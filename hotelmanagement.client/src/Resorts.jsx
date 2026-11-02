import { useState, useRef, useEffect } from 'react';
import {
    FaBed,
    FaCalendarAlt,
    FaUser,
    FaStar,
    FaArrowLeft,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import Footer from './Footer';

const FEATURED_DESTINATIONS = [
    {
        name: 'Panama City Beach',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Dubai',
        country: 'United Arab Emirates',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Porto De Galinhas',
        country: 'Brazil',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Destin',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
    }
];

const HURGHADA_RESORTS = [
    {
        name: 'Pickalbatros Citadel Resort Sahl Hasheesh',
        location: 'Hurghada, Red Sea Governorate',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '7,272 reviews',
        description: 'Featuring 3 swimming pools including breathtaking infinity pool, the all-inclusive Pickalbatros Citadel Resort Sahl Hasheesh...',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive',
        location: 'Hurghada, Red Sea Governorate',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '3,764 reviews',
        description: 'Facing the beachfront, Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive offers...',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'JAZ Soma Beach',
        location: 'Hurghada, Red Sea Governorate',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '2,937 reviews',
        description: 'JAZ Soma Beach offers accommodation with a restaurant, free private parking, an outdoor swimming pool and a bar...',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Sunrise Alora Aqua Park Resort',
        location: 'Hurghada, Red Sea Governorate',
        badge: 'Resort',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '2,756 reviews',
        description: 'Facing the beachfront, Sunrise Alora Aqua Park Resort offers 4-star accommodation in Hurghada and is...',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    }
];

const UBUD_RESORTS = [
    {
        name: 'The Alena Resort a Pramana Experience',
        location: 'Ubud, Bali',
        badge: 'Resort',
        rating: 9.8,
        ratingText: 'Exceptional',
        reviewsCount: '937 reviews',
        description: 'Offering an outdoor pool with sun terrace, The Alena Resort is located in Ubud, a 15-minute drive from Ubud Palace...',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Ubud Valley Boutique Resort',
        location: 'Ubud, Bali',
        badge: 'Resort',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '810 reviews',
        description: 'Set in Ubud, 5 km from Elephant Cave, Ubud Valley Boutique Resort has a number of amenities including free bikes and free WiFi.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Tejaprana Bisma',
        location: 'Ubud, Bali',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '933 reviews',
        description: 'Set in Ubud, 1.6 km from Saraswati Temple, Tejaprana Bisma offers accommodation with a garden, free private parking...',
        image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Sakti Garden Resort & Spa',
        location: 'Ubud, Bali',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '1,352 reviews',
        description: 'Situated in Ubud, 1.9 km from Ubud Palace, Sakti Garden Resort & Spa features accommodation with an outdoor swimming pool...',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80'
    }
];

const SHARM_RESORTS = [
    {
        name: 'Sunrise Diamond Beach Resort -Grand Select',
        location: 'Sharm El Sheikh, South Sinai',
        badge: 'Resort',
        rating: 9.4,
        ratingText: 'Wonderful',
        reviewsCount: '6,023 reviews',
        description: 'Situated on Om El Seid Plateau, SUNRISE Diamond Beach Resort - Grand Select has a private beach...',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Pickalbatros Laguna Vista Aqua Park - 24 HRS All Inclusive',
        location: 'Sharm El Sheikh, South Sinai',
        badge: 'Resort',
        rating: 9.4,
        ratingText: 'Wonderful',
        reviewsCount: '8,716 reviews',
        description: 'Situated on a private sandy beach in Nabq Bay, Albatros Laguna Vista offers air-conditioned rooms with Led screen TV...',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Steigenberger Alcazar',
        location: 'Sharm El Sheikh, South Sinai',
        badge: 'Resort',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '4,162 reviews',
        description: 'Steigenberger Alcazar is the latest venue in Nabq around 15 minutes from Sharm El-Sheikh International Airport.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Charmillion Club Resort',
        location: 'Sharm El Sheikh, South Sinai',
        badge: 'Resort',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '4,490 reviews',
        description: 'Located along Nabq Bay, the all-inclusive Charmillion Club Resort has a private beach with a coral reef and 3 restaurants.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
];

const MOST_BOOKED = [
    {
        name: 'Flamingo Las Vegas Hotel & Casino',
        location: 'Resort in Las Vegas',
        stars: 3,
        rating: 7.8,
        ratingText: 'Good',
        reviewsCount: '24,079 reviews',
        trendText: 'Popular with guests booking resorts in Las Vegas',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Paris Las Vegas Hotel & Casino',
        location: 'Resort in Las Vegas',
        stars: 4,
        rating: 8.0,
        ratingText: 'Very Good',
        reviewsCount: '22,240 reviews',
        trendText: 'Popular with guests booking resorts in Las Vegas',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Hotel101 - Madrid',
        location: 'Resort in Madrid',
        stars: 3,
        rating: 9.1,
        ratingText: 'Wonderful',
        reviewsCount: '5,691 reviews',
        trendText: 'Popular with guests booking resorts in Madrid',
        image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Excalibur',
        location: 'Resort in Las Vegas',
        stars: 3,
        rating: 7.6,
        ratingText: 'Good',
        reviewsCount: '30,986 reviews',
        trendText: 'Popular with guests booking resorts in Las Vegas',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
    }
];

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DefaultResort({ onGoHome, onNavigateResorts }) {
    // Calendar & Booking States
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('calendar');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [viewDate, setViewDate] = useState(new Date(2026, 7, 1)); // August 2026 default

    const calendarRef = useRef(null);

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsCalendarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (onNavigateResorts) {
            onNavigateResorts({
                checkInDate: checkInDate ? checkInDate.toISOString() : '',
                checkOutDate: checkOutDate ? checkOutDate.toISOString() : ''
            });
        }
    };

    // Calendar Navigation Functions
    const nextMonths = () => {
        setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    const prevMonths = () => {
        setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    const handleDateClick = (date) => {
        if (!checkInDate || (checkInDate && checkOutDate)) {
            setCheckInDate(date);
            setCheckOutDate(null);
        } else if (checkInDate && !checkOutDate) {
            if (date < checkInDate) {
                setCheckInDate(date);
            } else {
                setCheckOutDate(date);
                setIsCalendarOpen(false);
            }
        }
    };

    const formatDateDisplay = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const isSameDay = (d1, d2) => {
        return d1 && d2 &&
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };

    const isInRange = (date) => {
        if (!checkInDate || !checkOutDate) return false;
        return date > checkInDate && date < checkOutDate;
    };

    // Helper to generate days grid for a given month
    const renderMonthGrid = (year, month) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        // Empty padding cells before first day
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} style={{ height: '36px' }}></div>);
        }

        // Days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isSelectedStart = isSameDay(date, checkInDate);
            const isSelectedEnd = isSameDay(date, checkOutDate);
            const inRange = isInRange(date);

            let bg = 'transparent';
            let color = '#333';
            let fontWeight = 'normal';

            if (isSelectedStart || isSelectedEnd) {
                bg = '#003580';
                color = '#fff';
                fontWeight = 'bold';
            } else if (inRange) {
                bg = '#f2f6fa';
                color = '#003580';
            }

            days.push(
                <button
                    key={day}
                    type="button"
                    onClick={() => handleDateClick(date)}
                    style={{
                        height: '36px',
                        width: '100%',
                        border: 'none',
                        background: bg,
                        color: color,
                        fontWeight: fontWeight,
                        borderRadius: isSelectedStart ? '4px 0 0 4px' : isSelectedEnd ? '0 4px 4px 0' : '0',
                        cursor: 'pointer',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s'
                    }}
                >
                    {day}
                </button>
            );
        }
        return days;
    };

    // Second month date reference
    const secondMonthDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>

            {/* HEADER */}
            <header style={{ backgroundColor: '#003580', color: '#fff', padding: '12px 0 16px 0' }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, cursor: 'pointer' }} onClick={onGoHome}>
                        Booking.com
                    </h1>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>INR</span>
                        <span style={{ fontSize: '18px' }}>🇮🇳</span>
                        <button style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '6px 12px', borderRadius: '3px', cursor: 'pointer' }}>List your property</button>
                        <button style={{ background: '#fff', color: '#003580', border: 'none', padding: '6px 12px', borderRadius: '3px', fontWeight: 'bold', cursor: 'pointer' }}>Register</button>
                        <button style={{ background: '#fff', color: '#003580', border: 'none', padding: '6px 12px', borderRadius: '3px', fontWeight: 'bold', cursor: 'pointer' }}>Sign in</button>
                    </div>
                </div>
            </header>

            {/* BACK TO HOME BUTTON */}
            <div style={{ maxWidth: '1140px', margin: '16px auto 0 auto', padding: '0 16px' }}>
                <button
                    onClick={onGoHome}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#006ce4',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: 0
                    }}
                >
                    <FaArrowLeft /> Back to Home
                </button>
            </div>

            {/* HERO SECTION WITH SEARCH BAR */}
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '60px 0 80px 0',
                color: '#fff',
                marginTop: '12px'
            }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px' }}>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Resorts</h1>
                    <p style={{ fontSize: '18px', margin: '0 0 32px 0' }}>Find the resorts that appeal to you the most</p>

                    {/* SEARCH FORM */}
                    <form onSubmit={handleSearch} style={{ backgroundColor: '#ffb700', padding: '4px', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px', position: 'relative' }}>

                        {/* Destination Field */}
                        <div style={{ background: '#fff', flex: '1 1 260px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333' }}>
                            <FaBed style={{ color: '#555', fontSize: '18px' }} />
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '15px' }}
                            />
                        </div>

                        {/* Date Field Trigger */}
                        <div
                            style={{ position: 'relative', flex: '1 1 300px' }}
                            ref={calendarRef}
                        >
                            <div
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                style={{
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    color: '#333',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    height: '100%',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <FaCalendarAlt style={{ color: '#555', fontSize: '16px', flexShrink: 0 }} />
                                <span style={{ color: checkInDate ? '#333' : '#777', fontWeight: '500' }}>
                                    {checkInDate ? formatDateDisplay(checkInDate) : 'Check-in date'}
                                </span>
                                <span style={{ color: '#888' }}>—</span>
                                <span style={{ color: checkOutDate ? '#333' : '#777', fontWeight: '500' }}>
                                    {checkOutDate ? formatDateDisplay(checkOutDate) : 'Check-out date'}
                                </span>
                            </div>

                            {/* BOOKING.COM CALENDAR POPUP MODAL */}
                            {isCalendarOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    left: '0',
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                                    padding: '20px 24px',
                                    zIndex: 1000,
                                    width: '640px',
                                    color: '#333'
                                }}>
                                    {/* Tabs */}
                                    <div style={{ display: 'flex', borderBottom: '1px solid #e7e7e7', marginBottom: '20px' }}>
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('calendar')}
                                            style={{
                                                padding: '10px 20px',
                                                border: 'none',
                                                background: 'none',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                color: activeTab === 'calendar' ? '#006ce4' : '#555',
                                                borderBottom: activeTab === 'calendar' ? '3px solid #006ce4' : '3px solid transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Calendar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('flexible')}
                                            style={{
                                                padding: '10px 20px',
                                                border: 'none',
                                                background: 'none',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                color: activeTab === 'flexible' ? '#006ce4' : '#555',
                                                borderBottom: activeTab === 'flexible' ? '3px solid #006ce4' : '3px solid transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            I'm flexible
                                        </button>
                                    </div>

                                    {activeTab === 'calendar' ? (
                                        <div style={{ position: 'relative' }}>
                                            {/* Month Navigation Arrows */}
                                            <button
                                                type="button"
                                                onClick={prevMonths}
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '2px',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    padding: '8px',
                                                    zIndex: 10
                                                }}
                                            >
                                                <FaChevronLeft />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextMonths}
                                                style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    top: '2px',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    padding: '8px',
                                                    zIndex: 10
                                                }}
                                            >
                                                <FaChevronRight />
                                            </button>

                                            {/* Dual Month View Grid */}
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

                                                {/* Left Month */}
                                                <div>
                                                    <h3 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
                                                        {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
                                                    </h3>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                                                        {WEEKDAYS.map((day, idx) => <div key={idx}>{day}</div>)}
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '2px' }}>
                                                        {renderMonthGrid(viewDate.getFullYear(), viewDate.getMonth())}
                                                    </div>
                                                </div>

                                                {/* Right Month */}
                                                <div>
                                                    <h3 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
                                                        {MONTH_NAMES[secondMonthDate.getMonth()]} {secondMonthDate.getFullYear()}
                                                    </h3>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                                                        {WEEKDAYS.map((day, idx) => <div key={idx}>{day}</div>)}
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '2px' }}>
                                                        {renderMonthGrid(secondMonthDate.getFullYear(), secondMonthDate.getMonth())}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ padding: '30px', textAlign: 'center', color: '#666' }}>
                                            <p style={{ fontSize: '15px', margin: 0 }}>Select stay duration and flexible travel dates.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Guests Field */}
                        <div style={{ background: '#fff', flex: '1 1 240px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333', fontSize: '14px' }}>
                            <FaUser style={{ color: '#555', fontSize: '16px' }} />
                            <span>2 adults · 0 children · 1 room</span>
                        </div>

                        {/* Search Button */}
                        <button type="submit" style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '6px', padding: '0 32px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* BREADCRUMB */}
            <div style={{ maxWidth: '1140px', margin: '16px auto', padding: '0 16px', fontSize: '13px', color: '#006ce4' }}>
                <span style={{ cursor: 'pointer' }} onClick={onGoHome}>Home</span> &gt; <span style={{ color: '#333' }}>All resorts</span>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px 60px 16px' }}>

                {/* 1. FEATURED RESORT DESTINATIONS */}
                <section style={{ marginBottom: '48px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div>
                            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Featured resort destinations</h2>
                            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Check out these popular destinations for resorts</p>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', position: 'relative' }}>
                        {FEATURED_DESTINATIONS.map((dest, i) => (
                            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', position: 'relative', height: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => onNavigateResorts && onNavigateResorts(dest.name)}>
                                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: '#fff' }}>
                                    <h3 style={{ margin: '0 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>{dest.name}</h3>
                                    <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>{dest.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. WE LOVE THESE RESORTS IN HURGHADA */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>We love these resorts in Hurghada</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {HURGHADA_RESORTS.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <span style={{ border: '1px solid #ccc', fontSize: '11px', padding: '2px 6px', borderRadius: '4px', color: '#444' }}>{item.badge}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{item.ratingText}</div>
                                                    <div style={{ fontSize: '10px', color: '#666' }}>{item.reviewsCount}</div>
                                                </div>
                                                <span style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 6px', borderRadius: '4px 4px 4px 0', fontWeight: 'bold', fontSize: '12px' }}>
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer' }}>{item.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>{item.location}</p>
                                        <p style={{ fontSize: '12px', color: '#333', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    </div>
                                    <div style={{ marginTop: '12px' }}>
                                        <span style={{ fontSize: '12px', color: '#006ce4', fontWeight: 'bold', cursor: 'pointer' }}>Show more</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. FIND THE PERFECT RESORT IN UBUD */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Find the perfect resort in Ubud</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {UBUD_RESORTS.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <span style={{ border: '1px solid #ccc', fontSize: '11px', padding: '2px 6px', borderRadius: '4px', color: '#444' }}>{item.badge}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{item.ratingText}</div>
                                                    <div style={{ fontSize: '10px', color: '#666' }}>{item.reviewsCount}</div>
                                                </div>
                                                <span style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 6px', borderRadius: '4px 4px 4px 0', fontWeight: 'bold', fontSize: '12px' }}>
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer' }}>{item.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>{item.location}</p>
                                        <p style={{ fontSize: '12px', color: '#333', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    </div>
                                    <div style={{ marginTop: '12px' }}>
                                        <span style={{ fontSize: '12px', color: '#006ce4', fontWeight: 'bold', cursor: 'pointer' }}>Show more</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. A GREAT CHOICE OF RESORTS IN SHARM EL SHEIKH */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>A great choice of resorts in Sharm El Sheikh</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {SHARM_RESORTS.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <span style={{ border: '1px solid #ccc', fontSize: '11px', padding: '2px 6px', borderRadius: '4px', color: '#444' }}>{item.badge}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{item.ratingText}</div>
                                                    <div style={{ fontSize: '10px', color: '#666' }}>{item.reviewsCount}</div>
                                                </div>
                                                <span style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 6px', borderRadius: '4px 4px 4px 0', fontWeight: 'bold', fontSize: '12px' }}>
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer' }}>{item.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>{item.location}</p>
                                        <p style={{ fontSize: '12px', color: '#333', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    </div>
                                    <div style={{ marginTop: '12px' }}>
                                        <span style={{ fontSize: '12px', color: '#006ce4', fontWeight: 'bold', cursor: 'pointer' }}>Show more</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. MOST BOOKED RESORTS THIS MONTH */}
                <section style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Most booked resorts this month</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {MOST_BOOKED.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', color: '#ffb700', fontSize: '12px', marginBottom: '6px' }}>
                                            {[...Array(item.stars)].map((_, idx) => (
                                                <FaStar key={idx} />
                                            ))}
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer' }}>{item.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>{item.location}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#008009', fontWeight: 'bold', marginBottom: '12px' }}>
                                            <span>📈</span> {item.trendText}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-start', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
                                        <span style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 6px', borderRadius: '4px 4px 4px 0', fontWeight: 'bold', fontSize: '12px' }}>
                                            {item.rating}
                                        </span>
                                        <div style={{ fontSize: '12px' }}>
                                            <span style={{ fontWeight: 'bold' }}>{item.ratingText}</span>
                                            <span style={{ color: '#666', marginLeft: '4px' }}>· {item.reviewsCount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}