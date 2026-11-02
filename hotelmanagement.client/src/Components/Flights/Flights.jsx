import { useState } from 'react';

const DESTINATIONS_DATA = [
    // Page 1
    { id: 1, city: 'London', country: 'United Kingdom', price: 'INR55,223', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
    { id: 2, city: 'Dabolim', country: 'India', price: 'INR8,824', image: 'https://cdn.thegoavilla.com/static/img/articles/dabolim-airport.jpg' },
    { id: 3, city: 'New Delhi', country: 'India', price: 'INR12,942', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80' },
    { id: 4, city: 'Dubai', country: 'United Arab Emirates', price: 'INR26,689', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
    { id: 5, city: 'Bangalore', country: 'India', price: 'INR11,228', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80' },
    { id: 6, city: 'Chennai', country: 'India', price: 'INR13,221', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80' },
    { id: 7, city: 'Bangkok', country: 'Thailand', price: 'INR23,450', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80' },
    { id: 8, city: 'Cochin', country: 'India', price: 'INR20,886', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },

    // Page 2
    { id: 9, city: 'Hyderabad', country: 'India', price: 'INR12,500', image: 'https://wallpaperaccess.com/full/2142440.jpg' },
    { id: 10, city: 'Frankfurt', country: 'Germany', price: 'INR61,200', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=80' },
    { id: 11, city: 'Ahmedabad', country: 'India', price: 'INR11,250', image: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=600&q=80' },
    { id: 12, city: 'Abu Dhabi', country: 'United Arab Emirates', price: 'INR24,500', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
    { id: 13, city: 'Mangalore', country: 'India', price: 'INR10,800', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80' },
    { id: 14, city: 'Kolkata', country: 'India', price: 'INR15,522', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80' },
    { id: 15, city: 'Amsterdam', country: 'Netherlands', price: 'INR50,196', image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600&q=80' },
    { id: 16, city: 'Colombo', country: 'Sri Lanka', price: 'INR28,553', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80' },

    // Page 3
    { id: 17, city: 'Mopa', country: 'India', price: 'INR10,254', image: 'https://as1.ftcdn.net/jpg/01/15/00/72/1000_F_115007200_gdV0ogjxan3VNV8t7vgmRVSTrj7JAfcg.jpg' },
    { id: 18, city: 'New York', country: 'United States', price: 'INR72,544', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80' },
    { id: 19, city: 'San Francisco', country: 'United States', price: 'INR92,447', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80' },
    { id: 20, city: 'Manama', country: 'Bahrain', price: 'INR33,690', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80' },
    { id: 21, city: 'Udaipur', country: 'India', price: 'INR15,522', image: 'https://images.unsplash.com/photo-1629210132098-592c636e3d1a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 22, city: 'Melbourne', country: 'Australia', price: 'INR185,143', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80' },
    { id: 23, city: 'Trivandrum', country: 'India', price: 'INR20,886', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
    { id: 24, city: 'Sydney', country: 'Australia', price: 'INR84,344', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80' },

    // Page 4
    { id: 25, city: 'Malé', country: 'Maldives', price: 'INR33,886', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80' },
    { id: 26, city: 'Rajkot', country: 'India', price: 'INR11,045', image: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=600&q=80' },
    { id: 27, city: 'Varanasi', country: 'India', price: 'INR12,344', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80' },
    { id: 28, city: 'Singapore', country: 'Singapore', price: 'INR27,908', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80' },
    { id: 29, city: 'Chandigarh', country: 'India', price: 'INR20,196', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80' },
    { id: 30, city: 'Kuta', country: 'Indonesia', price: 'INR31,200', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
    { id: 31, city: 'Indore', country: 'India', price: 'INR11,400', image: 'https://media.istockphoto.com/id/539001564/photo/rajwada-palace-indore.jpg?s=612x612&w=is&k=20&c=D5WooX8k0QVI69VGtWp1Iy7nOkCQ91lF4ns7hUeq8m0=' },
    { id: 32, city: 'Nagpur', country: 'India', price: 'INR10,950', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80' },

    // Page 5
    { id: 33, city: 'Paris', country: 'France', price: 'INR54,890', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80' },
    { id: 34, city: 'Aurangabad', country: 'India', price: 'INR11,664', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80' },
    { id: 35, city: 'Rome', country: 'Italy', price: 'INR49,561', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80' },
    { id: 36, city: 'Tokyo', country: 'Japan', price: 'INR88,788', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80' },
    { id: 37, city: 'Muscat', country: 'Oman', price: 'INR16,337', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80' },
    { id: 38, city: 'Zurich', country: 'Switzerland', price: 'INR48,170', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80' },
    { id: 39, city: 'Vadodara', country: 'India', price: 'INR10,467', image: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=600&q=80' },
    { id: 40, city: 'Hong Kong', country: 'Hong Kong', price: 'INR35,976', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80' },
    { id: 41, city: 'Dublin', country: 'Ireland', price: 'INR192,165', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&q=80' },
    { id: 42, city: 'Phuket', country: 'Thailand', price: 'INR30,899', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80' },
    { id: 43, city: 'Riyadh', country: 'Saudi Arabia', price: 'INR123,497', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&q=80' },
    { id: 44, city: 'Bhopal', country: 'India', price: 'INR11,793', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80' }
];

const FLIGHT_RESULTS = [
    { id: 'fl-1', airline: 'Air India', code: 'AI 604', depart: '06:10', arrive: '07:55', duration: '1h 45m', price: 4829 },
    { id: 'fl-2', airline: 'IndiGo', code: '6E 533', depart: '09:25', arrive: '11:10', duration: '1h 45m', price: 5175 },
    { id: 'fl-3', airline: 'Vistara', code: 'UK 820', depart: '14:15', arrive: '16:00', duration: '1h 45m', price: 6299 },
    { id: 'fl-4', airline: 'Akasa Air', code: 'QP 1362', depart: '19:40', arrive: '21:30', duration: '1h 50m', price: 4560 }
];

function FlightResults({ fromLocation, toLocation, onBack }) {
    const [selectedFlight, setSelectedFlight] = useState(null);
    return (
        <div style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", sans-serif', minHeight: '100vh', background: '#f5f5f5', color: '#1a1a1a' }}>
            <header style={{ background: '#003580', color: '#fff', padding: '16px 24px' }}><div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><strong style={{ fontSize: '24px' }}>Booking.com</strong><button onClick={onBack} style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: '4px', padding: '8px 14px', cursor: 'pointer' }}>← Edit search</button></div></header>
            <main style={{ maxWidth: '900px', padding: '30px 24px', margin: '0 auto' }}><h1 style={{ margin: 0 }}>Flights from {fromLocation} to {toLocation}</h1><p style={{ color: '#666' }}>{FLIGHT_RESULTS.length} flights found · sorted by lowest price</p>
                {FLIGHT_RESULTS.map((flight) => <article key={flight.id} style={{ background: '#fff', border: selectedFlight?.id === flight.id ? '2px solid #006ce4' : '1px solid #ddd', borderRadius: '8px', padding: '18px', margin: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}><div><strong>{flight.airline}</strong><div style={{ fontSize: '13px', color: '#666' }}>{flight.code}</div></div><div><strong>{flight.depart}</strong> → <strong>{flight.arrive}</strong><div style={{ fontSize: '13px', color: '#666' }}>{flight.duration} · Non-stop</div></div><div><strong style={{ fontSize: '20px' }}>₹ {flight.price.toLocaleString()}</strong><button onClick={() => setSelectedFlight(flight)} style={{ display: 'block', marginTop: '7px', background: '#006ce4', border: 'none', color: '#fff', borderRadius: '4px', padding: '8px 14px', cursor: 'pointer', fontWeight: 'bold' }}>Select</button></div></article>)}
                {selectedFlight && <div style={{ background: '#e7f1ff', border: '1px solid #006ce4', padding: '16px', borderRadius: '8px', marginTop: '20px' }}><strong>{selectedFlight.airline} {selectedFlight.code} selected</strong><p style={{ marginBottom: 0 }}>₹ {selectedFlight.price.toLocaleString()} per traveler · Ready for booking.</p></div>}
            </main>
        </div>
    );
}

export default function Flights({ onBack }) {
    // Search Form States
    const [tripType, setTripType] = useState('roundTrip');
    const [cabinClass, setCabinClass] = useState('Economy');
    const [directOnly, setDirectOnly] = useState(false);
    const [fromLocation, setFromLocation] = useState('Mumbai All airports');
    const [toLocation, setToLocation] = useState('Anywhere');
    const [dates, setDates] = useState('Sat, Oct 3 – Sat, Oct 10');
    const [travelers, setTravelers] = useState('1 adult');

    // Active Filters
    const [activeFilter, setActiveFilter] = useState('Trending');
    const [currentPage, setCurrentPage] = useState(1);
    const [view, setView] = useState('destinations');

    // Pagination calculation
    const itemsPerPage = 8;
    const totalPages = Math.ceil(DESTINATIONS_DATA.length / itemsPerPage);
    const currentItems = DESTINATIONS_DATA.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    if (view === 'results') {
        return <FlightResults fromLocation={fromLocation} toLocation={toLocation} onBack={() => setView('destinations')} />;
    }
    if (view === 'map') {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <button
                        onClick={() => setView('destinations')}
                        style={{
                            marginBottom: '16px',
                            backgroundColor: '#006ce4',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        ← Back to Flights
                    </button>

                    <iframe
                        src="https://worldmap.page/"
                        title="Interactive world map"
                        width="100%"
                        height="600"
                        style={{ border: 0, borderRadius: '8px', backgroundColor: '#fff' }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }

    const handleSwapLocations = () => {
        const temp = fromLocation;
        setFromLocation(toLocation);
        setToLocation(temp);
    };

    return (
        <div style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', color: '#1a1a1a' }}>

            {/* Header Navbar */}
            <header style={{ backgroundColor: '#003580', color: '#fff', padding: '12px 24px' }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Booking.com</div>


                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>INR</span>
                        <span style={{ fontSize: '18px' }}>🇮🇳</span>
                        <button style={{ background: 'none', border: '1px solid #fff', borderRadius: '50%', color: '#fff', width: '28px', height: '28px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>?</button>
                        <button style={{ backgroundColor: '#fff', color: '#006ce4', border: 'none', padding: '7px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>Register</button>
                        <button style={{ backgroundColor: '#fff', color: '#006ce4', border: 'none', padding: '7px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>Sign in</button>
                    </div>
                </div>

                {/* Main Navigation Services Bar */}
                <div style={{ maxWidth: '1140px', margin: '16px auto 8px auto', display: 'flex', gap: '8px' }}>
                    <button
                        onClick={onBack}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: 'none',
                            background: 'transparent',
                            color: '#fff',
                            fontFamily: 'inherit'
                        }}
                    >
                        🛏️ Stays
                    </button>
                    <div style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #fff', backgroundColor: 'rgba(255,255,255,0.15)', fontWeight: 'bold' }}>✈️ Flights</div>
                    <div style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>🏢 Flight + Hotel</div>
                    <div style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>🚗 Car rental</div>
                    <div style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>🎡 Attractions</div>
                    <div style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>🚕 Airport taxis</div>
                </div>
            </header>

            {/* Main Search Section */}
            <div style={{ backgroundColor: '#f5f5f5', padding: '24px' }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

                    {/* Search Controls Container */}
                    <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>

                        {/* Radio options & settings */}
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px', fontSize: '14px', flexWrap: 'wrap' }}>
                            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <input type="radio" name="tripType" checked={tripType === 'roundTrip'} onChange={() => setTripType('roundTrip')} />
                                Round-trip
                            </label>
                            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <input type="radio" name="tripType" checked={tripType === 'oneWay'} onChange={() => setTripType('oneWay')} />
                                One-way
                            </label>
                            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <input type="radio" name="tripType" checked={tripType === 'multiCity'} onChange={() => setTripType('multiCity')} />
                                Multi-city
                            </label>

                            <select
                                value={cabinClass}
                                onChange={(e) => setCabinClass(e.target.value)}
                                style={{ border: 'none', background: 'transparent', fontSize: '14px', cursor: 'pointer', color: '#006ce4' }}
                            >
                                <option value="Economy">Cabin class: Economy</option>
                                <option value="Premium Economy">Cabin class: Premium Economy</option>
                                <option value="Business">Cabin class: Business</option>
                                <option value="First">Cabin class: First</option>
                            </select>

                            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                                <input type="checkbox" checked={directOnly} onChange={(e) => setDirectOnly(e.target.checked)} />
                                Direct flights only
                            </label>
                        </div>

                        {/* Search Input Yellow Border Box */}
                        <div style={{
                            border: '4px solid #febb02',
                            borderRadius: '8px',
                            display: 'grid',
                            gridTemplateColumns: '1.4fr auto 1.4fr 1.6fr 1.2fr auto',
                            backgroundColor: '#febb02',
                            gap: '2px'
                        }}>
                            {/* Leaving From */}
                            <div style={{ backgroundColor: '#fff', padding: '8px 12px', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '18px', color: '#666' }}>✈️</span>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>Leaving from</div>
                                    <input
                                        type="text"
                                        value={fromLocation}
                                        onChange={(e) => setFromLocation(e.target.value)}
                                        style={{ border: 'none', outline: 'none', fontSize: '14px', fontWeight: 'bold', width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Swap Button */}
                            <button
                                onClick={handleSwapLocations}
                                style={{ backgroundColor: '#fff', border: 'none', padding: '0 8px', cursor: 'pointer', color: '#006ce4', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                ⇄
                            </button>

                            {/* Going To */}
                            <div style={{ backgroundColor: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '18px', color: '#666' }}>✈️</span>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>Going to</div>
                                    <input
                                        type="text"
                                        value={toLocation}
                                        onChange={(e) => setToLocation(e.target.value)}
                                        style={{ border: 'none', outline: 'none', fontSize: '14px', fontWeight: 'bold', width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Travel Dates */}
                            <div style={{ backgroundColor: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '18px', color: '#666' }}>📅</span>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>Travel dates</div>
                                    <input
                                        type="text"
                                        value={dates}
                                        onChange={(e) => setDates(e.target.value)}
                                        style={{ border: 'none', outline: 'none', fontSize: '13px', fontWeight: 'bold', width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Travelers */}
                            <div style={{ backgroundColor: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '18px', color: '#666' }}>👤</span>
                                <div>
                                    <div style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>Travelers</div>
                                    <input
                                        type="text"
                                        value={travelers}
                                        onChange={(e) => setTravelers(e.target.value)}
                                        style={{ border: 'none', outline: 'none', fontSize: '13px', fontWeight: 'bold', width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Search Button */}
                            <button onClick={() => setView('results')} style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '0 28px', borderRadius: '0 4px 4px 0', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Filter Pills Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                            {['Trending', 'Stops', 'Price', 'Duration', 'Flight times'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        border: activeFilter === filter ? '1px solid #006ce4' : '1px solid #ccc',
                                        backgroundColor: activeFilter === filter ? '#f0f4fa' : '#fff',
                                        color: activeFilter === filter ? '#006ce4' : '#1a1a1a',
                                        fontWeight: activeFilter === filter ? 'bold' : 'normal',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    {filter === 'Trending' && '⇅'} {filter} ⤯
                                </button>
                            ))}
                            <button style={{ background: 'none', border: 'none', color: '#006ce4', fontSize: '14px', cursor: 'pointer', marginLeft: '8px', fontWeight: '500' }}>
                                Clear filters
                            </button>
                        </div>

                        <div style={{ marginLeft: 'auto', color: '#666', cursor: 'pointer', fontSize: '18px' }}>
                            ⓘ
                        </div>
                    </div>

                    {/* Flight Destination Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '20px' }}>
                        {currentItems.map((item) => (
                            <div key={item.id} onClick={() => { setToLocation(item.city); setView('results'); }} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e7e7e7', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                                <div style={{ height: '160px', overflow: 'hidden', position: 'relative', backgroundColor: '#e0e0e0' }}>
                                    <img
                                        src={item.image}
                                        alt={item.city}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{item.city}</h3>
                                    <div style={{ fontSize: '14px', color: '#666', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        📍 {item.country}
                                    </div>
                                    <div style={{ textAlign: 'right', marginTop: '16px' }}>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a' }}>{item.price}</div>
                                        <div style={{ fontSize: '12px', color: '#666' }}>per traveler</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Interactive Open Map Banner on Page 1 */}
                        {currentPage === 1 && (
                            <div style={{
                                gridColumn: 'span 2',
                                backgroundColor: '#006ce4',
                                borderRadius: '8px',
                                color: '#fff',
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                                backgroundSize: '16px 16px'
                            }}>
                                <span style={{ fontSize: '48px', marginBottom: '8px' }}>🌐</span>
                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Explore Anywhere</h3>
                                <button
                                    onClick={() => setView('map')}
                                    style={{ backgroundColor: '#fff', color: '#006ce4', border: 'none', padding: '10px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    🌐 Open Map
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Pagination Bar */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '32px' }}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            style={{ background: 'none', border: 'none', cursor: currentPage === 1 ? 'default' : 'pointer', opacity: currentPage === 1 ? 0.4 : 1, fontSize: '16px' }}
                        >
                            &lt;
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    padding: '6px 12px',
                                    backgroundColor: currentPage === index + 1 ? '#fff' : 'transparent',
                                    color: currentPage === index + 1 ? '#006ce4' : '#1a1a1a',
                                    borderColor: currentPage === index + 1 ? '#006ce4' : '#ccc',
                                    fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                                    cursor: 'pointer'
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            style={{ background: 'none', border: 'none', cursor: currentPage === totalPages ? 'default' : 'pointer', opacity: currentPage === totalPages ? 0.4 : 1, fontSize: '16px' }}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #e7e7e7', padding: '40px 24px', fontSize: '13px', color: '#262626', marginTop: '40px' }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

                    {/* Multi-Column Links */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', marginBottom: '32px' }}>
                        <div>
                            <h4 style={{ fontWeight: 'bold', margin: '0 0 12px 0', fontSize: '14px' }}>Support</h4>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Manage your trips</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Customer Service help</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Safety Resource Center</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', margin: '0 0 12px 0', fontSize: '14px' }}>Discover</h4>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Genius loyalty program</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Seasonal and holiday deals</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Travel articles</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Booking.com for Business</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Traveller Review Awards</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Car rental</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Flight finder</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Restaurant reservations</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Booking.com for Travel Agents</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', margin: '0 0 12px 0', fontSize: '14px' }}>Terms and settings</h4>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Privacy Notice</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Terms of Service</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Accessibility Statement</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Modern Slavery Statement</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Human Rights Statement</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', margin: '0 0 12px 0', fontSize: '14px' }}>Partners</h4>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Extranet login</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Partner help</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>List your property</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Become an affiliate</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', margin: '0 0 12px 0', fontSize: '14px' }}>About</h4>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>About Booking.com</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>How We Work</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Sustainability</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Press center</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Careers</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Investor relations</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Corporate contact</p>
                            <p style={{ margin: '6px 0', cursor: 'pointer' }}>Content guidelines and reporting</p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        🇮🇳
                    </div>

                    {/* Booking Holdings Footer Branding */}
                    <div style={{ textAlign: 'center', color: '#666', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                        <p style={{ margin: '0 0 4px 0', fontSize: '12px' }}>
                            Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
                        </p>
                        <p style={{ margin: '0 0 16px 0', fontSize: '12px' }}>
                            Copyright © 1996–2026 Booking.com™. All rights reserved.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'center', fontWeight: 'bold', fontSize: '14px', color: '#003580' }}>
                            <span>Booking.com</span>
                            <span style={{ color: '#00a3e0' }}>priceline</span>
                            <span style={{ color: '#ff690f' }}>KAYAK</span>
                            <span style={{ color: '#52b043' }}>agoda</span>
                            <span style={{ color: '#da3743' }}>OpenTable</span>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}



