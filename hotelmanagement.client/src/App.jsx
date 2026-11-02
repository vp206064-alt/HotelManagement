import { useState, useEffect } from 'react';
import BookingDashboard from './BookingDashboard';
import Auth from './Auth';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [user, setUser] = useState(null);

    // Track Firebase authentication state globally across the app
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Handle user sign out
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error('Sign out error:', err);
        }
    };

    if (currentView === 'auth') {
        return (
            <Auth
                onBackToDashboard={() => setCurrentView('dashboard')}
                onSuccess={() => setCurrentView('dashboard')}
            />
        );
    }

    return (
        <BookingDashboard
            user={user}
            onNavigateToAuth={() => setCurrentView('auth')}
            onSignOut={handleSignOut}
        />
    );
}