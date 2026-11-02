import { useState, useRef, useEffect } from 'react';
import {
    FaBed,
    FaCalendarAlt,
    FaUser,
    FaStar,
    FaArrowLeft,
    FaChartLine,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import Footer from './Footer';

const FEATURED_DESTINATIONS = [
    {
        name: 'Kissimmee',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Destin',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Myrtle Beach',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Hilton Head Island',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80'
    }
];

const UBUD_VILLAS = [
    {
        name: 'Quiet Luxury Paradise Fab Staff Lebah Villas Central Ubud',
        location: 'Ubud, Bali',
        badge: 'Villa',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '553 reviews',
        description: 'Offering a year-round outdoor pool with bar chairs, Lebah Villa is located in the secluded area in Ubud City-Center. Ubud Market is 2297...',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Bidadari Private Villas & Retreat',
        location: 'Ubud, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '691 reviews',
        description: 'Bidadari Private Villas & Retreat offers villas set amidst tropical greenery only 10 minutes from Ubud City Centre. Certain villas have a...',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Sawah Villas',
        location: 'Ubud, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '403 reviews',
        description: 'Situated within 1.9 km of Goa Gajah and 2.8 km of Monkey Forest Ubud, Sawah Villas features rooms with air conditioning and a private bathroo...',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Jagadhita Villas Ubud Bali',
        location: 'Ubud, Bali',
        badge: 'Villa',
        rating: 9.8,
        ratingText: 'Exceptional',
        reviewsCount: '216 reviews',
        description: 'Jagadhita Villas Ubud Bali is set in Ubud and features a pool with a view and mountain views.',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
    }
];

const SEMINYAK_VILLAS = [
    {
        name: 'The Kunja Villa-Hotel',
        location: 'Seminyak, Bali',
        badge: 'Villa',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '566 reviews',
        description: 'The Kunja is a boutique hotel offering serviced private villas, favourably located in Petitenget Seminyak. It is only an 8-minute wal...',
        price: '₹ 44,167.23',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Villa Mia Seminyak - Boutique Villas - II',
        location: 'Seminyak, Bali',
        badge: 'Villa',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '352 reviews',
        description: 'Boasting a patio with garden views, an outdoor swimming pool and an open-air bath, Villa Mia Seminyak - Boutique Villas - II can be found in...',
        price: '₹ 18,469.93',
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'eqUILIBRIA Seminyak',
        location: 'Seminyak, Bali',
        badge: 'Villa',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '516 reviews',
        description: 'eqUILIBRIA Seminyak offers a selection of eco-friendly villas with private pools in downtown Seminyak.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Je Ne Sais Quoi Seminyak',
        location: 'Seminyak, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '459 reviews',
        description: 'Featuring accommodation with a private pool, pool view and a balcony, Je Ne Sais Quoi Seminyak is located in Seminyak. This property...',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
    }
];

const ULUWATU_VILLAS = [
    {
        name: 'Tropical Almond Villa',
        location: 'Uluwatu, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '290 reviews',
        description: 'Featuring air-conditioned accommodation with a pool with a view, pool view and a terrace, Tropical Almond Villa is located in...',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Widji Garden Villa',
        location: 'Uluwatu, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '249 reviews',
        description: 'Located in Uluwatu, 5.8 km from Uluwatu Temple and 6.2 km from Garuda Wisnu Kencana, Widji Garden Villa provides spacious air-...',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Luz_ita Sunshine Villa',
        location: 'Uluwatu, Bali',
        badge: 'Villa',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '392 reviews',
        description: 'Boasting a balcony with pool views, an outdoor swimming pool and a garden, Luz_ita Sunshine Villa can be found in Uluwatu, close to Topan...',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Adara Villas Uluwatu',
        location: 'Uluwatu, Bali',
        badge: 'Villa',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '164 reviews',
        description: 'Adara Villas Uluwatu is located in Uluwatu and features a private pool and pool views. There is a private entrance at the villa for the...',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80'
    }
];

const MOST_BOOKED = [
    {
        name: 'Kawaguchiko Country Cottage Ban',
        location: 'Villa in Fujikawaguchiko',
        stars: 4,
        rating: 8.9,
        ratingText: 'Excellent',
        reviewsCount: '3,620 reviews',
        trendText: 'Popular with guests booking villas in Fujikawaguchiko',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Marinell Collection Palm-Mar',
        location: 'Villa in Palm-Mar',
        stars: 0,
        rating: 8.7,
        ratingText: 'Excellent',
        reviewsCount: '4,954 reviews',
        trendText: 'Popular with guests booking villas in Palm-Mar',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'TIA Layover Rooms',
        location: 'Villa in Krujë',
        stars: 0,
        rating: 8.5,
        ratingText: 'Very Good',
        reviewsCount: '751 reviews',
        trendText: 'Popular with guests booking villas in Krujë',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Crystal Besso Shirahama',
        location: 'Villa in Shirahama',
        stars: 0,
        rating: 8.6,
        ratingText: 'Excellent',
        reviewsCount: '987 reviews',
        trendText: 'Popular with guests booking villas in Shirahama',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    }
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Villas({ onGoHome, onNavigateVillas }) {
    // Calendar Popover State
    const [showCalendar, setShowCalendar] = useState(false);
    const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'flexible'
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    // Start view with August 2026 (matching your screenshot context)
    const [viewDate, setViewDate] = useState(new Date(2026, 7, 1));
    const calendarRef = useRef(null);

    // Close calendar popover on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (onNavigateVillas) {
            onNavigateVillas();
        }
    };

    // Calendar Navigation Functions
    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const handleDateSelect = (date) => {
        if (!checkInDate || (checkInDate && checkOutDate)) {
            setCheckInDate(date);
            setCheckOutDate(null);
        } else if (checkInDate && !checkOutDate) {
            if (date < checkInDate) {
                setCheckInDate(date);
            } else {
                setCheckOutDate(date);
                setShowCalendar(false);
            }
        }
    };

    const isSameDay = (d1, d2) => {
        if (!d1 || !d2) return false;
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };

    const isInRange = (date) => {
        if (!checkInDate || !checkOutDate) return false;
        return date > checkInDate && date < checkOutDate;
    };

    const formatDateDisplay = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    // Helper to generate grid days for a given month
    const renderMonthGrid = (year, monthIndex) => {
        const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        const monthName = new Date(year, monthIndex).toLocaleString('default', { month: 'long', year: 'numeric' });

        const emptySlots = Array.from({ length: firstDayOfWeek });
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        return (
            <div style={{ flex: 1, padding: '0 12px' }}>
                <h4 style={{ textAlign: 'center', margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>
                    {monthName}
                </h4>

                {/* Weekday Labels */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '8px' }}>
                    {DAYS_OF_WEEK.map((day, idx) => (
                        <span key={idx} style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>{day}</span>
                    ))}
                </div>

                {/* Days Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px 0' }}>
                    {emptySlots.map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {days.map((day) => {
                        const currentDate = new Date(year, monthIndex, day);
                        const selectedStart = isSameDay(currentDate, checkInDate);
                        const selectedEnd = isSameDay(currentDate, checkOutDate);
                        const highlighted = isInRange(currentDate);

                        let backgroundColor = 'transparent';
                        let textColor = '#333';
                        let borderRadius = '0';

                        if (selectedStart || selectedEnd) {
                            backgroundColor = '#006ce4';
                            textColor = '#fff';
                            borderRadius = '4px';
                        } else if (highlighted) {
                            backgroundColor = '#f2f6fc';
                            textColor = '#006ce4';
                        }

                        return (
                            <button
                                key={day}
                                type="button"
                                onClick={() => handleDateSelect(currentDate)}
                                style={{
                                    height: '38px',
                                    width: '100%',
                                    border: 'none',
                                    background: backgroundColor,
                                    color: textColor,
                                    fontSize: '14px',
                                    fontWeight: selectedStart || selectedEnd ? 'bold' : 'normal',
                                    borderRadius: borderRadius,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background-color 0.15s'
                                }}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const nextMonthDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '60px 0 80px 0',
                color: '#fff',
                marginTop: '12px'
            }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px' }}>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Villas</h1>
                    <p style={{ fontSize: '18px', margin: '0 0 32px 0' }}>Find the villas that appeal to you the most</p>

                    {/* SEARCH FORM WITH CALENDAR POPOVER */}
                    <div style={{ position: 'relative' }} ref={calendarRef}>
                        <form onSubmit={handleSearch} style={{ backgroundColor: '#ffb700', padding: '4px', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>

                            {/* Destination Input */}
                            <div style={{ background: '#fff', flex: '1 1 260px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333' }}>
                                <FaBed style={{ color: '#555', fontSize: '18px' }} />
                                <input
                                    type="text"
                                    defaultValue="London"
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '15px' }}
                                />
                            </div>

                            {/* Date Picker Input Trigger */}
                            <div
                                onClick={() => setShowCalendar(!showCalendar)}
                                style={{ background: '#fff', flex: '1 1 280px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333', fontSize: '14px', cursor: 'pointer', userSelect: 'none' }}
                            >
                                <FaCalendarAlt style={{ color: '#555', fontSize: '16px' }} />
                                <span>
                                    {checkInDate && checkOutDate
                                        ? `${formatDateDisplay(checkInDate)} — ${formatDateDisplay(checkOutDate)}`
                                        : checkInDate
                                            ? `${formatDateDisplay(checkInDate)} — Check-out date`
                                            : 'Check-in date — Check-out date'}
                                </span>
                            </div>

                            {/* Occupancy Input */}
                            <div style={{ background: '#fff', flex: '1 1 240px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333', fontSize: '14px' }}>
                                <FaUser style={{ color: '#555', fontSize: '16px' }} />
                                <span>2 adults · 0 children · 1 room</span>
                            </div>

                            {/* Search Button */}
                            <button type="submit" style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '6px', padding: '0 32px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
                                Search
                            </button>
                        </form>

                        {/* CALENDAR POPOVER */}
                        {showCalendar && (
                            <div style={{
                                position: 'absolute',
                                top: '105%',
                                left: '20%',
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                                color: '#333',
                                padding: '20px 24px',
                                zIndex: 1000,
                                width: '680px',
                                maxWidth: '90vw'
                            }}>
                                {/* Top Tabs: Calendar / I'm flexible */}
                                <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #e7e7e7', marginBottom: '20px' }}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('calendar')}
                                        style={{
                                            padding: '10px 24px',
                                            border: 'none',
                                            background: 'none',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            color: activeTab === 'calendar' ? '#006ce4' : '#666',
                                            borderBottom: activeTab === 'calendar' ? '3px solid #006ce4' : 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Calendar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('flexible')}
                                        style={{
                                            padding: '10px 24px',
                                            border: 'none',
                                            background: 'none',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            color: activeTab === 'flexible' ? '#006ce4' : '#666',
                                            borderBottom: activeTab === 'flexible' ? '3px solid #006ce4' : 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        I'm flexible
                                    </button>
                                </div>

                                {activeTab === 'calendar' ? (
                                    <div style={{ position: 'relative' }}>
                                        {/* Prev & Next Month Navigation Buttons */}
                                        <button
                                            type="button"
                                            onClick={handlePrevMonth}
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                border: '1px solid #ccc',
                                                background: '#fff',
                                                borderRadius: '50%',
                                                width: '32px',
                                                height: '32px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 10
                                            }}
                                        >
                                            <FaChevronLeft style={{ fontSize: '12px', color: '#333' }} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleNextMonth}
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                top: 0,
                                                border: '1px solid #ccc',
                                                background: '#fff',
                                                borderRadius: '50%',
                                                width: '32px',
                                                height: '32px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 10
                                            }}
                                        >
                                            <FaChevronRight style={{ fontSize: '12px', color: '#333' }} />
                                        </button>

                                        {/* Dual Month View Container */}
                                        <div style={{ display: 'flex', gap: '24px' }}>
                                            {renderMonthGrid(viewDate.getFullYear(), viewDate.getMonth())}
                                            {renderMonthGrid(nextMonthDate.getFullYear(), nextMonthDate.getMonth())}
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
                                        <p style={{ fontSize: '16px', margin: 0 }}>Select stay duration and flexible dates</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* BREADCRUMB: Home > Hotels > All villas */}
            <div style={{ maxWidth: '1140px', margin: '16px auto', padding: '0 16px', fontSize: '13px', color: '#006ce4' }}>
                <span style={{ cursor: 'pointer' }} onClick={onGoHome}>Home</span> &gt; <span style={{ cursor: 'pointer', color: '#006ce4' }} onClick={onGoHome}>Hotels</span> &gt; <span style={{ color: '#333' }}>All villas</span>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px 60px 16px' }}>

                {/* 1. FEATURED VILLA DESTINATIONS */}
                <section style={{ marginBottom: '48px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div>
                            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Featured villa destinations</h2>
                            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Check out these popular destinations for villas</p>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {FEATURED_DESTINATIONS.map((dest, i) => (
                            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', position: 'relative', height: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => onNavigateVillas && onNavigateVillas(dest.name)}>
                                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: '#fff' }}>
                                    <h3 style={{ margin: '0 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>{dest.name}</h3>
                                    <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>{dest.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. WE LOVE THESE VILLAS IN UBUD */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>We love these villas in Ubud</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {UBUD_VILLAS.map((item, i) => (
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

                {/* 3. FIND THE PERFECT VILLA IN SEMINYAK */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Find the perfect villa in Seminyak</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {SEMINYAK_VILLAS.map((item, i) => (
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
                                        <p style={{ fontSize: '12px', color: '#333', margin: '0 0 12px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    </div>
                                    <div>
                                        {item.price && (
                                            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#262626', marginBottom: '8px' }}>
                                                From <span style={{ fontSize: '18px' }}>{item.price}</span> <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#666' }}>per night</span>
                                            </div>
                                        )}
                                        <span style={{ fontSize: '12px', color: '#006ce4', fontWeight: 'bold', cursor: 'pointer' }}>Show more</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. A GREAT CHOICE OF VILLAS IN ULUWATU */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>A great choice of villas in Uluwatu</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {ULUWATU_VILLAS.map((item, i) => (
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
                                        <p style={{ fontSize: '12px', color: '#333', margin: '0 0 12px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '12px', color: '#006ce4', fontWeight: 'bold', cursor: 'pointer' }}>Show more</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. MOST BOOKED VILLAS THIS MONTH */}
                <section style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Most booked villas this month</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {MOST_BOOKED.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        {item.stars > 0 && (
                                            <div style={{ display: 'flex', color: '#ffb700', fontSize: '12px', marginBottom: '4px' }}>
                                                {[...Array(item.stars)].map((_, idx) => (
                                                    <FaStar key={idx} />
                                                ))}
                                            </div>
                                        )}
                                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer', lineHeight: '1.2' }}>{item.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#595959', margin: '0 0 10px 0' }}>{item.location}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#008009', fontWeight: '500', marginBottom: '16px' }}>
                                            <FaChartLine style={{ fontSize: '14px' }} /> <span>{item.trendText}</span>
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