import { useState, useEffect, useRef } from 'react';
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendarAlt, FaUser, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';
import Hotels from './Hotels';
import Villas from './Villas';
import Resorts from './Resorts';
import Apartments from './Apartments';
import Flights from './Components/Flights/Flights';

// Static database outside component to prevent re-creation on renders
const ALL_PROPERTIES_DATABASE = [
    { id: 1, name: 'Novotel Aerocity', type: 'Hotel', city: 'New Delhi', rating: 8.8, price: 7490, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Taj Lands End', type: 'Hotel', city: 'Mumbai', rating: 9.2, price: 12500, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Palm Breeze Villa', type: 'Villa', city: 'Mumbai', rating: 9.0, price: 18000, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Silicon Valley Luxury Stay', type: 'Apartment', city: 'Bangalore', rating: 8.5, price: 4200, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'ECR Beachfront Resort', type: 'Resort', city: 'Chennai', rating: 8.9, price: 9500, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80' }
];

const navBtnStyle = { backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer', fontSize: '13px' };
const searchFieldStyle = { backgroundColor: '#fff', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', borderRadius: '4px', minHeight: '52px', position: 'relative' };
const searchInputStyle = { border: 'none', outline: 'none', width: '100%', fontSize: '14px', background: 'transparent', fontFamily: 'inherit', cursor: 'pointer', color: '#333' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' };

export default function BookingDashboard({ user, onNavigateToAuth, onSignOut }) {
    const [activeTab, setActiveTab] = useState('stays');
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    // Popup toggle states
    const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
    const [calendarSubTab, setCalendarSubTab] = useState('calendar'); // 'calendar' | 'flexible'

    const [view, setView] = useState('home');
    const [activeFilter, setActiveFilter] = useState({ type: '', city: '' });
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const calendarRef = useRef(null);

    // Close popup on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendarDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCardClick = (type, city) => {
        if (!city) {
            if (type === 'Hotel') { setView('hotels'); return; }
            if (type === 'Villa') { setView('villas'); return; }
            if (type === 'Resort') { setView('resorts'); return; }
            if (type === 'Apartment') { setView('apartments'); return; }
        }

        setActiveFilter({ type: type || '', city: city || '' });
        setLoading(true);
        setView('results');
    };

    const handleSearchSubmit = () => {
        setShowCalendarDropdown(false);
        handleCardClick('', destination);
    };

    useEffect(() => {
        if (view !== 'results') return;

        let queryParams = [];
        if (activeFilter.type) queryParams.push(`type=${encodeURIComponent(activeFilter.type)}`);
        if (activeFilter.city) queryParams.push(`city=${encodeURIComponent(activeFilter.city)}`);
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

        fetch(`https://localhost:7000/api/properties${queryString}`)
            .then(res => {
                if (!res.ok) throw new Error('API unavailable');
                return res.json();
            })
            .then(data => {
                setProperties(data);
                setLoading(false);
            })
            .catch(() => {
                let filtered = ALL_PROPERTIES_DATABASE;
                if (activeFilter.type) {
                    filtered = filtered.filter(p => p.type.toLowerCase() === activeFilter.type.toLowerCase());
                }
                if (activeFilter.city) {
                    filtered = filtered.filter(p => p.city.toLowerCase().includes(activeFilter.city.toLowerCase()));
                }
                setProperties(filtered);
                setLoading(false);
            });
    }, [view, activeFilter]);

    if (view === 'hotels') return <Hotels onGoHome={() => setView('home')} />;
    if (view === 'villas') return <Villas onGoHome={() => setView('home')} />;
    if (view === 'resorts') return <Resorts onGoHome={() => setView('home')} />;
    if (view === 'apartments') return <Apartments onGoHome={() => setView('home')} />;
    if (view === 'flights') {
        return <Flights onBack={() => {
            setView('home');
            setActiveTab('stays');
        }} />;
    }

    const trendingDestinations = [
        { name: 'New Delhi', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80' },
        { name: 'Bangalore', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mumbai', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80' },
        { name: 'Chennai', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
    ];

    const propertyTypes = [
        { title: 'Hotels', type: 'Hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
        { title: 'Apartments', type: 'Apartment', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80' },
        { title: 'Resorts', type: 'Resort', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80' },
        { title: 'Villas', type: 'Villa', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* HEADER */}
            <header style={{ backgroundColor: '#003580', color: '#fff', padding: '12px 0 20px 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, cursor: 'pointer' }} onClick={() => setView('home')}>
                            Booking.com
                        </h1>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>INR</span>
                            <span style={{ fontSize: '18px' }}>🇮🇳</span>
                            <button style={navBtnStyle}>List your property</button>

                            {/* Dynamic Auth Section */}
                            {user ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '13px', backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 10px', borderRadius: '4px' }}>
                                        {user.email || user.phoneNumber}
                                    </span>
                                    <button
                                        onClick={onSignOut}
                                        style={{ ...navBtnStyle, backgroundColor: '#fff', color: '#003580', fontWeight: 'bold' }}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button onClick={onNavigateToAuth} style={{ ...navBtnStyle, backgroundColor: '#fff', color: '#003580', cursor: 'pointer' }}>Register</button>
                                    <button onClick={onNavigateToAuth} style={{ ...navBtnStyle, backgroundColor: '#fff', color: '#003580', cursor: 'pointer' }}>Sign in</button>
                                </>
                            )}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        {[{ id: 'stays', label: 'Stays', icon: <FaBed /> }, { id: 'flights', label: 'Flights', icon: <FaPlane /> }, { id: 'car', label: 'Car rental', icon: <FaCar /> }, { id: 'taxis', label: 'Airport taxis', icon: <FaTaxi /> }].map((tab) => (
                            <button key={tab.id} onClick={() => {
                                setActiveTab(tab.id);
                                if (tab.id === 'flights') setView('flights');
                            }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '100px', border: activeTab === tab.id ? '2px solid #fff' : 'none', backgroundColor: activeTab === tab.id ? 'rgba(255,255,255,0.15)' : 'transparent', color: '#fff', cursor: 'pointer', fontWeight: '500' }}>
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* SEARCH HERO */}
            <section style={{ backgroundColor: '#003580', color: '#fff', paddingBottom: '48px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', margin: '16px 0 8px 0' }}>Find your next stay</h2>
                    <p style={{ fontSize: '20px', margin: '0 0 24px 0', opacity: 0.9 }}>Search deals on hotels, homes, and much more...</p>

                    <div style={{ backgroundColor: '#ffb700', padding: '4px', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={searchFieldStyle}>
                            <FaBed style={{ color: '#333', fontSize: '18px' }} />
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                                style={searchInputStyle}
                            />
                        </div>

                        {/* Booking.com Style Popup Calendar Field */}
                        <div style={searchFieldStyle} ref={calendarRef}>
                            <div
                                onClick={() => setShowCalendarDropdown(prev => !prev)}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', cursor: 'pointer', height: '100%' }}
                            >
                                <FaCalendarAlt style={{ color: '#333', fontSize: '18px', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px', color: checkInDate || checkOutDate ? '#222' : '#757575', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {checkInDate || checkOutDate ? `${checkInDate || 'Check-in date'} — ${checkOutDate || 'Check-out date'}` : 'Check-in date — Check-out date'}
                                </span>
                            </div>

                            {/* Dual-Month Popup Card */}
                            {showCalendarDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '60px',
                                    left: 0,
                                    backgroundColor: '#fff',
                                    color: '#222',
                                    borderRadius: '4px',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                    zIndex: 100,
                                    width: '650px',
                                    padding: '16px',
                                    cursor: 'default'
                                }}>
                                    {/* Tabs Header */}
                                    <div style={{ display: 'flex', borderBottom: '1px solid #e7e7e7', marginBottom: '16px' }}>
                                        <button
                                            onClick={() => setCalendarSubTab('calendar')}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                padding: '8px 16px',
                                                fontWeight: 'bold',
                                                fontSize: '14px',
                                                color: calendarSubTab === 'calendar' ? '#006ce4' : '#555',
                                                borderBottom: calendarSubTab === 'calendar' ? '2px solid #006ce4' : '2px solid transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Calendar
                                        </button>
                                        <button
                                            onClick={() => setCalendarSubTab('flexible')}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                padding: '8px 16px',
                                                fontWeight: 'bold',
                                                fontSize: '14px',
                                                color: calendarSubTab === 'flexible' ? '#006ce4' : '#555',
                                                borderBottom: calendarSubTab === 'flexible' ? '2px solid #006ce4' : '2px solid transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            I'm flexible
                                        </button>
                                    </div>

                                    {calendarSubTab === 'calendar' ? (
                                        <div>
                                            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', backgroundColor: '#f8f8f8', padding: '12px', borderRadius: '6px' }}>
                                                <div style={{ flex: 1 }}>
                                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '4px' }}>Check-in Date</label>
                                                    <input
                                                        type="date"
                                                        value={checkInDate}
                                                        onChange={(e) => setCheckInDate(e.target.value)}
                                                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
                                                    />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '4px' }}>Check-out Date</label>
                                                    <input
                                                        type="date"
                                                        value={checkOutDate}
                                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Dual Month Visual Layout Mock */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                                <div style={{ width: '48%' }}>
                                                    <h4 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>August 2026</h4>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', color: '#666', fontWeight: 'bold', marginBottom: '8px' }}>
                                                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '13px', rowGap: '8px' }}>
                                                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                                            <span
                                                                key={day}
                                                                onClick={() => {
                                                                    const formatted = `2026-08-${day < 10 ? '0' + day : day}`;
                                                                    if (!checkInDate || (checkInDate && checkOutDate)) {
                                                                        setCheckInDate(formatted);
                                                                        setCheckOutDate('');
                                                                    } else {
                                                                        setCheckOutDate(formatted);
                                                                    }
                                                                }}
                                                                style={{
                                                                    padding: '8px 0',
                                                                    cursor: 'pointer',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: checkInDate === `2026-08-${day < 10 ? '0' + day : day}` || checkOutDate === `2026-08-${day < 10 ? '0' + day : day}` ? '#003580' : 'transparent',
                                                                    color: checkInDate === `2026-08-${day < 10 ? '0' + day : day}` || checkOutDate === `2026-08-${day < 10 ? '0' + day : day}` ? '#fff' : '#222'
                                                                }}
                                                            >
                                                                {day}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div style={{ width: '48%', borderLeft: '1px solid #eee', paddingLeft: '16px' }}>
                                                    <h4 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>September 2026</h4>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', color: '#666', fontWeight: 'bold', marginBottom: '8px' }}>
                                                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '13px', rowGap: '8px' }}>
                                                        {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                                                            <span
                                                                key={day}
                                                                onClick={() => {
                                                                    const formatted = `2026-09-${day < 10 ? '0' + day : day}`;
                                                                    if (!checkInDate || (checkInDate && checkOutDate)) {
                                                                        setCheckInDate(formatted);
                                                                        setCheckOutDate('');
                                                                    } else {
                                                                        setCheckOutDate(formatted);
                                                                    }
                                                                }}
                                                                style={{
                                                                    padding: '8px 0',
                                                                    cursor: 'pointer',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: checkInDate === `2026-09-${day < 10 ? '0' + day : day}` || checkOutDate === `2026-09-${day < 10 ? '0' + day : day}` ? '#003580' : 'transparent',
                                                                    color: checkInDate === `2026-09-${day < 10 ? '0' + day : day}` || checkOutDate === `2026-09-${day < 10 ? '0' + day : day}` ? '#fff' : '#222'
                                                                }}
                                                            >
                                                                {day}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                                                <button
                                                    onClick={() => setShowCalendarDropdown(false)}
                                                    style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ padding: '24px 0', textAlign: 'center', color: '#555' }}>
                                            <p style={{ fontSize: '15px', fontWeight: '500' }}>Flexible trip options (Weekend, 1 week, 2 weeks) coming soon!</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div style={searchFieldStyle}>
                            <FaUser style={{ color: '#333', fontSize: '18px' }} />
                            <span style={{ color: '#333', fontSize: '14px' }}>2 adults · 0 children · 1 room</span>
                        </div>

                        <button onClick={handleSearchSubmit} style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '4px', padding: '0 32px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', flexGrow: 1, minHeight: '52px' }}>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main style={{ maxWidth: '1100px', margin: '32px auto', padding: '0 16px', flex: 1, width: '100%' }}>
                {view === 'home' ? (
                    <>
                        <section style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Browse by property type</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                                {propertyTypes.map((item, idx) => (
                                    <div key={idx} style={cardStyle} onClick={() => handleCardClick(item.type, '')}>
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                        <div style={{ padding: '12px' }}>
                                            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{item.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '4px' }}>Trending destinations</h3>
                            <p style={{ color: '#6b6b6b', marginBottom: '16px' }}>Most popular choices for travelers from India</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                                {trendingDestinations.map((city, idx) => (
                                    <div key={idx} style={cardStyle} onClick={() => handleCardClick('', city.name)}>
                                        <div style={{ position: 'relative', height: '200px' }}>
                                            <img src={city.image} alt={city.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 60%)', padding: '16px', color: '#fff' }}>
                                                <h4 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>{city.name} {city.flag}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                ) : (
                    <div>
                        <button onClick={() => setView('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', color: '#006ce4', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '16px' }}>
                            <FaArrowLeft /> Back to Home
                        </button>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                            {activeFilter.type && `${activeFilter.type}s`}
                            {activeFilter.city && ` Stays in ${activeFilter.city}`}
                            {!activeFilter.type && !activeFilter.city && 'All Available Properties'}
                        </h2>

                        {loading ? (
                            <p>Loading properties from database...</p>
                        ) : properties.length === 0 ? (
                            <p>No properties found for this selection.</p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {properties.map((item) => (
                                    <div key={item.id} style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', display: 'flex', gap: '16px' }}>
                                        <img src={item.image || item.imageUrl} alt={item.name} style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '6px' }} />
                                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <h3 style={{ margin: 0, color: '#006ce4' }}>{item.name}</h3>
                                                    <span style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{item.rating}</span>
                                                </div>
                                                <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
                                                    <FaMapMarkerAlt /> {item.city || item.location} • {item.type}
                                                </p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                                    ₹ {item.price ? item.price.toLocaleString('en-IN') : 'N/A'}
                                                </div>
                                                <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', marginTop: '8px', cursor: 'pointer' }}>
                                                    See availability
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}