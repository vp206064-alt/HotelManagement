import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from 'firebase/auth';

export default function Auth({ onBackToDashboard }) {
    const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'mobile'
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    // Email / Password States
    const [authEmail, setAuthEmail] = useState('');
    const [authPassword, setAuthPassword] = useState('');

    // Mobile OTP States
    const [authMobile, setAuthMobile] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');

    const handleGoBack = () => {
        if (onBackToDashboard) {
            onBackToDashboard();
        } else {
            window.location.href = '/';
        }
    };

    // --- 1. EMAIL & PASSWORD SUBMISSION ---
    const handleEmailAuthSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            if (isRegisterMode) {
                await createUserWithEmailAndPassword(auth, authEmail, authPassword);
                alert('Registration successful! You can now sign in.');
                setIsRegisterMode(false);
            } else {
                await signInWithEmailAndPassword(auth, authEmail, authPassword);
                alert('Sign in successful!');
                handleGoBack();
            }
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    // --- 2. MOBILE OTP SETUP & SEND ---
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible'
            });
        }
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        if (!authMobile || authMobile.length < 10) {
            setErrorMessage('Please enter a valid 10-digit mobile number.');
            return;
        }

        try {
            setupRecaptcha();
            const formattedPhone = `+91${authMobile}`;
            const appVerifier = window.recaptchaVerifier;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
            setConfirmationResult(confirmation);
            alert('OTP sent successfully!');
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            await confirmationResult.confirm(otpCode);
            alert('Mobile authentication successful!');
            handleGoBack();
        } catch (err) {
            setErrorMessage(err.message || 'Invalid OTP code. Please try again.');
        }
    };

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Invisible container for Firebase Phone Recaptcha */}
            <div id="recaptcha-container"></div>

            {/* Header */}
            <header style={{ backgroundColor: '#003580', color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, cursor: 'pointer' }} onClick={handleGoBack}>
                    Booking.com
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '18px' }}>🇮🇳</span>
                    <FaQuestionCircle style={{ fontSize: '20px', cursor: 'pointer' }} />
                </div>
            </header>

            {/* Auth Form Container */}
            <div style={{ maxWidth: '400px', margin: '40px auto', padding: '0 16px', flex: 1, width: '100%' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
                    {isRegisterMode ? 'Create an account' : 'Sign in or create an account'}
                </h2>
                <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '20px', lineHeight: '1.4' }}>
                    You can sign in using your Booking.com account via Email or Mobile OTP.
                </p>

                {/* Authentication Method Tabs */}
                <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', marginBottom: '24px' }}>
                    <button
                        type="button"
                        onClick={() => { setAuthMethod('email'); setErrorMessage(''); }}
                        style={{
                            flex: 1,
                            padding: '10px 0',
                            background: 'none',
                            border: 'none',
                            borderBottom: authMethod === 'email' ? '3px solid #006ce4' : '3px solid transparent',
                            fontWeight: authMethod === 'email' ? 'bold' : 'normal',
                            color: authMethod === 'email' ? '#006ce4' : '#6b6b6b',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        📧 Email Address
                    </button>
                    <button
                        type="button"
                        onClick={() => { setAuthMethod('mobile'); setErrorMessage(''); }}
                        style={{
                            flex: 1,
                            padding: '10px 0',
                            background: 'none',
                            border: 'none',
                            borderBottom: authMethod === 'mobile' ? '3px solid #006ce4' : '3px solid transparent',
                            fontWeight: authMethod === 'mobile' ? 'bold' : 'normal',
                            color: authMethod === 'mobile' ? '#006ce4' : '#6b6b6b',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        📱 Mobile OTP
                    </button>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                    <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '4px', fontSize: '13px', marginBottom: '16px' }}>
                        {errorMessage}
                    </div>
                )}

                {/* --- METHOD 1: EMAIL FORM --- */}
                {authMethod === 'email' && (
                    <form onSubmit={handleEmailAuthSubmit}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '6px' }}>
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={authEmail}
                            onChange={(e) => setAuthEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', fontSize: '15px', borderRadius: '4px', border: '1px solid #797979', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }}
                            required
                        />

                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '6px' }}>
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={authPassword}
                            onChange={(e) => setAuthPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', fontSize: '15px', borderRadius: '4px', border: '1px solid #797979', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }}
                            required
                        />

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                            {!isRegisterMode ? (
                                <>
                                    <button
                                        type="submit"
                                        style={{ flex: 1, backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setIsRegisterMode(true); setErrorMessage(''); }}
                                        style={{ flex: 1, backgroundColor: '#fff', color: '#006ce4', border: '1px solid #006ce4', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                    >
                                        Register
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="submit"
                                        style={{ flex: 1, backgroundColor: '#008009', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                    >
                                        Create Account
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setIsRegisterMode(false); setErrorMessage(''); }}
                                        style={{ flex: 1, backgroundColor: '#fff', color: '#6b6b6b', border: '1px solid #797979', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                    >
                                        Back to Sign In
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                )}

                {/* --- METHOD 2: MOBILE OTP FORM --- */}
                {authMethod === 'mobile' && (
                    <div style={{ marginBottom: '24px' }}>
                        {!confirmationResult ? (
                            <form onSubmit={handleSendOtp}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '6px' }}>
                                    Mobile Number
                                </label>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                                    <span style={{ padding: '10px 12px', backgroundColor: '#f0f0f0', border: '1px solid #797979', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', color: '#555' }}>
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="10-digit mobile number"
                                        value={authMobile}
                                        onChange={(e) => setAuthMobile(e.target.value)}
                                        maxLength={10}
                                        style={{ width: '100%', padding: '10px 12px', fontSize: '15px', borderRadius: '4px', border: '1px solid #797979', outline: 'none', boxSizing: 'border-box' }}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{ width: '100%', backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                    Send Verification OTP
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyOtp}>
                                <div style={{ backgroundColor: '#eef6ff', padding: '10px', borderRadius: '4px', fontSize: '13px', color: '#003580', marginBottom: '16px' }}>
                                    OTP sent to +91 {authMobile}.{' '}
                                    <button
                                        type="button"
                                        onClick={() => setConfirmationResult(null)}
                                        style={{ background: 'none', border: 'none', color: '#006ce4', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                                    >
                                        Change number
                                    </button>
                                </div>

                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '6px' }}>
                                    Enter OTP Code
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 123456"
                                    value={otpCode}
                                    onChange={(e) => setOtpCode(e.target.value)}
                                    maxLength={6}
                                    style={{ width: '100%', padding: '10px 12px', fontSize: '18px', textAlign: 'center', letterSpacing: '6px', borderRadius: '4px', border: '1px solid #797979', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }}
                                    required
                                />

                                <button
                                    type="submit"
                                    style={{ width: '100%', backgroundColor: '#008009', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                    Verify OTP & Sign In
                                </button>
                            </form>
                        )}
                    </div>
                )}

                {/* Back to Dashboard Footer */}
                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '16px', textAlign: 'center' }}>
                    <button type="button" onClick={handleGoBack} style={{ marginTop: '16px', border: 'none', background: 'none', color: '#006ce4', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
                        &larr; Back to Booking.com
                    </button>
                </div>
            </div>
        </div>
    );
}