import { useState, useEffect, useRef } from 'react';
import { FaBed, FaCalendarAlt, FaUser, FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import Footer from './Footer';
import OberoiBengaluru from './Components/Hotel/OberoiBengaluru';
import ZippHotelRosalba from './Components/Hotel/ZippHotelRosalba';
import BestinnLeisure from './Components/Hotel/BestinnLeisure';
import OBSLuxurySuites from './Components/Hotel/OBSLuxurySuites';

export default function Hotels({ onGoHome, onSelectDelhi, onSelectHotel }) {
    const [popularHotelsRegion, setPopularHotelsRegion] = useState('North America');
    const [showOberoiPage, setShowOberoiPage] = useState(false);
    const [showBestinnPage, setShowBestinnPage] = useState(false);
    const [showZippPage, setShowZippPage] = useState(false);
    const [showOBSPage, setShowOBSPage] = useState(false);
    const [popularCitiesRegion, setPopularCitiesRegion] = useState('North America');
    const [openFaq, setOpenFaq] = useState(null);

    // Search input & Date Picker State
    const [searchQuery, setSearchQuery] = useState('London');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
    const [calendarSubTab, setCalendarSubTab] = useState('calendar');

    const calendarRef = useRef(null);

    // Close calendar popup on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendarDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setShowCalendarDropdown(false);
        const query = searchQuery.trim().toLowerCase();

        // If user searches for Delhi or New Delhi, trigger the Delhi view
        if (query.includes('delhi')) {
            if (onSelectDelhi) onSelectDelhi();
        } else {
            alert(`Searching for hotels in: ${searchQuery}\nCheck-in: ${checkInDate || 'Not selected'}\nCheck-out: ${checkOutDate || 'Not selected'}`);
        }
    };

    const handleCitySelect = (cityName) => {
        if (cityName.toLowerCase().includes('delhi')) {
            if (onSelectDelhi) onSelectDelhi();
        } else {
            alert(`Selected city: ${cityName}`);
        }
    };

    const handleHotelClick = (hotelName) => {
        if (hotelName === 'The Oberoi Bengaluru') {
            setShowOberoiPage(true);
            return;
        }

        if (hotelName === 'Zipp Hotel Rosalba') {
            setShowZippPage(true);
            return;
        }

        if (hotelName === 'Hotel Lenexa by Bestinn Leisure') {
            setShowBestinnPage(true);
            return;
        }
        if (hotelName === 'OBS Luxury Suites - JP Nagar') {
            setShowOBSPage(true);
            return;
        }

        onSelectHotel?.(hotelName);
    };

    const lastMinuteHotels = [
        {
            name: 'The Oberoi Bengaluru',
            city: 'Bengaluru',
            rating: '9.3',
            reviews: '1,608 reviews',
            badge: 'Wonderful',
            desc: 'Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore...',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'Zipp Hotel Rosalba',
            city: 'Bengaluru',
            rating: '9.0',
            reviews: '106 reviews',
            badge: 'Wonderful',
            desc: 'Located in Bangalore, 3.3 miles from Brigade Road, Zipp Hotel Rosalba provides accommodations with a fitness center, free private parking...',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'Hotel Lenexa by Bestinn Leisure',
            city: 'Bengaluru',
            rating: '9.0',
            reviews: '109 reviews',
            badge: 'Wonderful',
            desc: 'Located in Bangalore, 4.1 miles from The Heritage Centre & Aerospace Museum, Hotel Lenexa by Bestinn Leisure has accommodations with a...',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'OBS Luxury Suites - JP Nagar',
            city: 'Bengaluru',
            rating: '9.5',
            reviews: '128 reviews',
            badge: 'Exceptional',
            desc: 'Located in Bangalore, within 3.3 miles of Bull Temple and 3.6 miles of The Forum, Koramangala, OBS Luxury Suites - JP Nagar...',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80'
        }
    ];

    const popularDestinations = [
        { name: 'Paris, France', price: '₹ 16,182', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
        { name: 'Barcelona, Spain', price: '₹ 19,115', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Madrid, Spain', price: '₹ 11,666', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Istanbul, Turkey', price: '₹ 6,619', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' }
    ];

    const hotelsByRegion = {
        'North America': [
            { name: 'Hotel Edison Times Square', location: 'New York, United States', rating: '8.0 Very Good', reviews: '12,155 reviews', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=300&q=80' },
            { name: 'New York Marriott Marquis', location: 'New York, United States', rating: '8.5 Very Good', reviews: '2,991 reviews', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80' },
            { name: 'SpringHill Suites by Marriott New York Manhattan/Times Square South', location: 'New York, United States', rating: '8.4 Very Good', reviews: '7,641 reviews', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80' },
            { name: 'SpringHill Suites by Marriott New York Manhattan Chelsea', location: 'New York, United States', rating: '8.5 Very Good', reviews: '10,607 reviews', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80' },
            { name: 'Park Lane New York', location: 'New York, United States', rating: '7.7 Good', reviews: '5,033 reviews', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=80' },
            { name: 'TownePlace Suites by Marriott New York Manhattan/Chelsea', location: 'New York, United States', rating: '8.4 Very Good', reviews: '7,426 reviews', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80' },
            { name: 'Hyatt Place New York City - Times Square', location: 'New York, United States', rating: '7.8 Good', reviews: '18,238 reviews', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80' }
        ],
        'Europe': [
            { name: 'Hotel Plaza Tour Eiffel', location: 'Paris, France', rating: '8.6 Excellent', reviews: '3,420 reviews', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
            { name: 'Grand Hotel Central', location: 'Barcelona, Spain', rating: '8.9 Excellent', reviews: '2,150 reviews', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=300&q=80' }
        ],
        'Asia': [
            { name: 'The Taj Mahal Palace', location: 'Mumbai, India', rating: '9.3 Wonderful', reviews: '4,890 reviews', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80' },
            { name: 'Marina Bay Sands', location: 'Singapore', rating: '9.1 Wonderful', reviews: '9,120 reviews', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80' },
            { name: 'The Roseate New Delhi', location: 'New Delhi, India', rating: '7.9 Good', reviews: '199 reviews', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80' }
        ]
    };

    const citiesByRegion = {
        'North America': [
            { name: 'New York', hotels: '426 hotels', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=300&q=80' },
            { name: 'Los Angeles', hotels: '294 hotels', image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=300&q=80' },
            { name: 'Chicago', hotels: '197 hotels', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=300&q=80' },
            { name: 'Orlando', hotels: '310 hotels', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80' },
            { name: 'Miami Beach', hotels: '220 hotels', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80' },
            { name: 'San Francisco', hotels: '186 hotels', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80' },
            { name: 'Boston', hotels: '95 hotels', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=300&q=80' },
            { name: 'Miami', hotels: '185 hotels', image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=300&q=80' },
            { name: 'Toronto', hotels: '153 hotels', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=300&q=80' }
        ],
        'Europe': [
            { name: 'Paris', hotels: '650 hotels', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
            { name: 'London', hotels: '720 hotels', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=300&q=80' },
            { name: 'Rome', hotels: '510 hotels', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=80' }
        ],
        'Asia': [
            { name: 'Tokyo', hotels: '480 hotels', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80' },
            { name: 'Bangkok', hotels: '590 hotels', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=300&q=80' },
            { name: 'New Delhi', hotels: '2,225 hotels', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=300&q=80' },
            { name: 'Mumbai', hotels: '340 hotels', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=300&q=80' }
        ]
    };

    const faqs = [
        { q: 'How do I find cheap hotels on Booking.com?', a: 'You can sort hotels by price (lowest first) or use filters to set a maximum budget per night. Also check for Genius loyalty discounts and seasonal deals.' },
        { q: 'Where can I find hotel deals on Booking.com?', a: 'Check the Deals section on Booking.com for last-minute discounts and getaway deals offering at least 15% off.' },
        { q: 'How many hotels are listed on Booking.com?', a: 'Booking.com features millions of properties worldwide, including independent hotels, luxury resorts, boutique stays, and homestays.' },
        { q: 'How do I search for a hotel on Booking.com?', a: 'Enter your destination, check-in and check-out dates, and number of guests into the search bar on the homepage, then click Search.' },
        { q: 'How do I find cheap last-minute hotels on Booking.com?', a: 'Use the "Last minute hotels near you tonight" section or enter dates for today to find special rate reductions offered by properties with empty rooms.' },
        { q: 'Why should I trust Booking.com\'s hotel reviews?', a: 'All reviews on Booking.com are written by verified guests who have actually stayed at the property, ensuring genuine and trustworthy feedback.' }
    ];

    const currentHotelsList = hotelsByRegion[popularHotelsRegion] || hotelsByRegion['North America'];
    const currentCitiesList = citiesByRegion[popularCitiesRegion] || citiesByRegion['North America'];

    if (showOberoiPage) {
        return <OberoiBengaluru onBack={() => setShowOberoiPage(false)} />;
    }

    if (showZippPage) {
        return <ZippHotelRosalba onBack={() => setShowZippPage(false)} />;
    }
    if (showBestinnPage) {
        return <BestinnLeisure onBack={() => setShowBestinnPage(false)} />;
    }
    if (showOBSPage) {
        return <OBSLuxurySuites onBack={() => setShowOBSPage(false)} />;
    }

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* TOP BLUE HEADER */}
            <header style={{ backgroundColor: '#003580', color: '#fff', padding: '16px 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, cursor: 'pointer' }} onClick={onGoHome}>
                        Booking.com
                    </h1>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>INR</span>
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>IN</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>List your property</span>
                        <button style={{ backgroundColor: '#fff', color: '#003580', border: 'none', padding: '6px 16px', borderRadius: '2px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>Register</button>
                        <button style={{ backgroundColor: '#fff', color: '#003580', border: 'none', padding: '6px 16px', borderRadius: '2px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>Sign in</button>
                    </div>
                </div>
            </header>

            {/* BACK TO HOME LINK */}
            <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e7e7e7', padding: '12px 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                    <button onClick={onGoHome} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', color: '#006ce4', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}>
                        <FaArrowLeft /> Back to Home
                    </button>
                </div>
            </div>

            {/* HERO SECTION WITH BACKGROUND IMAGE AND SEARCH BAR */}
            <section style={{
                position: 'relative',
                backgroundImage: `url('https://www.5minscraft.com/secure-admin/uploads/featured/2023/07/1180665273_WxH.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                padding: '60px 0 80px 0'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 10px 0' }}>Hotels</h2>
                    <p style={{ fontSize: '18px', margin: '0 0 32px 0', opacity: 0.95 }}>Find the hotels that appeal to you the most</p>

                    {/* SEARCH FORM WITH DUAL-MONTH POPUP CALENDAR */}
                    <form onSubmit={handleSearchSubmit} style={{ backgroundColor: '#ffb700', padding: '4px', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                        <div style={{ backgroundColor: '#fff', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', borderRadius: '4px', minHeight: '52px' }}>
                            <FaBed style={{ color: '#555', fontSize: '18px' }} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Where are you going? (e.g., New Delhi)"
                                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#333' }}
                            />
                        </div>

                        {/* Interactive Calendar Dropdown Trigger & Popup Card */}
                        <div style={{ backgroundColor: '#fff', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', borderRadius: '4px', minHeight: '52px', position: 'relative' }} ref={calendarRef}>
                            <div
                                onClick={() => setShowCalendarDropdown(prev => !prev)}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', cursor: 'pointer', height: '100%' }}
                            >
                                <FaCalendarAlt style={{ color: '#555', fontSize: '18px', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px', color: checkInDate || checkOutDate ? '#222' : '#757575', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left' }}>
                                    {checkInDate || checkOutDate ? `${checkInDate || 'Check-in date'} — ${checkOutDate || 'Check-out date'}` : 'Check-in date — Check-out date'}
                                </span>
                            </div>

                            {/* Dual-Month Popup Overlay Card */}
                            {showCalendarDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '60px',
                                    left: 0,
                                    backgroundColor: '#fff',
                                    color: '#222',
                                    borderRadius: '4px',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                                    zIndex: 100,
                                    width: '620px',
                                    padding: '16px',
                                    cursor: 'default',
                                    textAlign: 'left'
                                }}>
                                    {/* Tabs Header */}
                                    <div style={{ display: 'flex', borderBottom: '1px solid #e7e7e7', marginBottom: '16px' }}>
                                        <button
                                            type="button"
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
                                            type="button"
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
                                            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', backgroundColor: '#f8f8f8', padding: '12px', borderRadius: '6px' }}>
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

                                            {/* Dual Month Visual Layout */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{ width: '48%' }}>
                                                    <h4 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', marginBottom: '12px' }}>August 2026</h4>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '11px', color: '#666', fontWeight: 'bold', marginBottom: '8px' }}>
                                                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '13px', rowGap: '6px' }}>
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
                                                                    padding: '6px 0',
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
                                                    <h4 style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', marginBottom: '12px' }}>September 2026</h4>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '11px', color: '#666', fontWeight: 'bold', marginBottom: '8px' }}>
                                                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                                                    </div>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '13px', rowGap: '6px' }}>
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
                                                                    padding: '6px 0',
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
                                                    type="button"
                                                    onClick={() => setShowCalendarDropdown(false)}
                                                    style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ padding: '20px 0', textAlign: 'center', color: '#555' }}>
                                            <p style={{ fontSize: '14px', fontWeight: '500' }}>Flexible dates (Weekend, 1 week, 2 weeks) feature arriving soon!</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div style={{ backgroundColor: '#fff', flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', borderRadius: '4px', minHeight: '52px' }}>
                            <FaUser style={{ color: '#555', fontSize: '18px' }} />
                            <span style={{ color: '#333', fontSize: '14px' }}>2 adults · 0 children · 1 room</span>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '4px', padding: '0 32px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', flexGrow: 1, minHeight: '52px' }}>
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e7e7e7', padding: '8px 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                    <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                        <span style={{ color: '#006ce4', cursor: 'pointer' }} onClick={onGoHome}>Home</span> &gt; <span style={{ color: '#006ce4', cursor: 'pointer' }}>Hotels</span> &gt; All hotels
                    </p>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <main style={{ maxWidth: '1100px', margin: '32px auto', padding: '0 16px', flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>

                {/* LAST MINUTE HOTELS NEAR YOU TONIGHT */}
                <section>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>Last minute hotels near you tonight</h3>
                        <button style={{ border: '1px solid #006ce4', background: 'none', color: '#006ce4', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>See all</button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                        {lastMinuteHotels.map((hotel, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleHotelClick(hotel.name)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        handleHotelClick(hotel.name);
                                    }
                                }}
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer'
                                }}
                            >
                                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                                <div style={{ padding: '16px' }}>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold', color: '#006ce4' }}>{hotel.name}</h4>
                                    <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '13px' }}>{hotel.city}</p>
                                    <p style={{ margin: 0, fontSize: '12px', fontWeight: '500' }}>
                                        <span style={{ backgroundColor: '#003580', color: '#fff', padding: '2px 4px', borderRadius: '3px', marginRight: '4px' }}>{hotel.rating}</span>
                                        {hotel.badge} · {hotel.reviews}
                                    </p>
                                    <p style={{ margin: '8px 0 0 0', color: '#555', fontSize: '12px' }}>{hotel.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* EXPLORE DESTINATIONS POPULAR WITH OTHER TRAVELERS */}
                <section>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Explore destinations currently popular with other travelers</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                        {popularDestinations.map((dest, idx) => (
                            <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                                <div style={{ padding: '16px' }}>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 'bold' }}>{dest.name}</h4>
                                    <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>Avg. price per night for a 3-star hotel: <strong style={{ color: '#333' }}>{dest.price}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* POPULAR HOTELS */}
                <section>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Popular hotels</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px', borderBottom: '1px solid #ddd', paddingBottom: '12px' }}>
                        {Object.keys(hotelsByRegion).map((region) => (
                            <button
                                key={region}
                                onClick={() => setPopularHotelsRegion(region)}
                                style={{
                                    border: 'none',
                                    background: popularHotelsRegion === region ? '#003580' : 'transparent',
                                    color: popularHotelsRegion === region ? '#fff' : '#006ce4',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                        {currentHotelsList.map((hotel, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleHotelClick(hotel.name)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        handleHotelClick(hotel.name);
                                    }
                                }}
                                style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '12px', display: 'flex', gap: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                            >
                                <img src={hotel.image} alt={hotel.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold', color: '#006ce4' }}>{hotel.name}</h4>
                                    <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '12px' }}>{hotel.location}</p>
                                    <p style={{ margin: 0, fontSize: '12px', fontWeight: '500' }}>
                                        <span style={{ backgroundColor: '#003580', color: '#fff', padding: '2px 4px', borderRadius: '3px', marginRight: '4px' }}>{hotel.rating.split(' ')[0]}</span>
                                        {hotel.rating.split(' ').slice(1).join(' ')} · {hotel.reviews}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* POPULAR CITIES */}
                <section>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Popular cities</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px', borderBottom: '1px solid #ddd', paddingBottom: '12px' }}>
                        {Object.keys(citiesByRegion).map((region) => (
                            <button
                                key={region}
                                onClick={() => setPopularCitiesRegion(region)}
                                style={{
                                    border: 'none',
                                    background: popularCitiesRegion === region ? '#003580' : 'transparent',
                                    color: popularCitiesRegion === region ? '#fff' : '#006ce4',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {currentCitiesList.map((city, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleCitySelect(city.name)}
                                style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                            >
                                <img src={city.image} alt={city.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                                <div style={{ padding: '12px' }}>
                                    <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: 'bold' }}>{city.name}</h4>
                                    <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>{city.hotels}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQS ABOUT HOTELS */}
                <section style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>FAQs about hotels on Booking.com</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                                <div
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', color: '#003580' }}
                                >
                                    <span>{faq.q}</span>
                                    <FaChevronDown style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                </div>
                                {openFaq === idx && (
                                    <p style={{ margin: '10px 0 0 0', color: '#444', fontSize: '14px', lineHeight: '1.5' }}>{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
