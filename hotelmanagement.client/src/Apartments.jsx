import  { useState } from 'react';
import { FaBed, FaCalendarAlt, FaUser, FaStar, FaArrowLeft, FaChartLine, FaTimes } from 'react-icons/fa';
import Footer from './Footer';

const FEATURED_DESTINATIONS = [
    {
        name: 'Dubai',
        country: 'United Arab Emirates',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Rome',
        country: 'Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'London',
        country: 'United Kingdom',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Paris',
        country: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
    }
];

const KRAKOW_APARTMENTS = [
    {
        name: 'H11 Aparthotel',
        location: 'Krakow, Lesser Poland',
        badge: 'Apartment',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '3,494 reviews',
        description: 'Right in the centre of Krakow, H11 Aparthotel offers rooms with free WiFi. There is a private entrance at the aparthotel for the convenience...',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Wings Plaza',
        location: 'Krakow, Lesser Poland',
        badge: 'Apartment',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '2,025 reviews',
        description: 'Located just 8.3 km from Wawel Royal Castle, Wings Plaza provides accommodation in Krakow with access to a fitness centre, a garden,...',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'K4 APARTHOTEL KRAKÓW',
        location: 'Krakow, Lesser Poland',
        badge: 'Apartment',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '1,290 reviews',
        description: 'Featuring accommodation with free WiFi, air conditioning and flat-screen TV, K4 APARTHOTEL KRAKÓW is set a 9-minute walk from Cloth Hall and...',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Bentis Luxury Apartments',
        location: 'Krakow, Lesser Poland',
        badge: 'Apartment',
        rating: 9.8,
        ratingText: 'Exceptional',
        reviewsCount: '881 reviews',
        description: 'Situated within 100 metres of Jagiellonian University and less than 1 km of National Museum of Krakow, Bentis Luxury Apartments...',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    }
];

const LONDON_APARTMENTS = [
    {
        name: 'City Prime Kensington',
        location: 'London, Greater London',
        badge: 'Apartment',
        rating: 9.2,
        ratingText: 'Wonderful',
        reviewsCount: '2,279 reviews',
        description: 'Located less than 1 km from Natural History Museum in London, City Prime Kensington provides accommodation with air conditioning...',
        price: '₹ 33,617.13',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Cheval Three Quays at The Tower of London',
        location: 'London, Greater London',
        badge: 'Apartment',
        rating: 9.5,
        ratingText: 'Exceptional',
        reviewsCount: '863 reviews',
        description: 'Located next to the Tower of London, and overlooking the River Thames, Cheval Three Quays offers modern apartments with free Wi-Fi, and an...',
        price: '₹ 75,897.14',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'City Prime Camden',
        location: 'London, Greater London',
        badge: 'Apartment',
        rating: 9.1,
        ratingText: 'Wonderful',
        reviewsCount: '3,059 reviews',
        description: 'Situated within 1.5 km of Emirates Stadium and 2.4 km of King’s Cross Theatre, City Prime Camden features rooms with air conditioning and a...',
        price: '₹ 16,679.27',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'London Nino Apartments',
        location: 'London, Greater London',
        badge: 'Apartment',
        rating: 9.8,
        ratingText: 'Exceptional',
        reviewsCount: '273 reviews',
        description: 'Located within 600 metres of Clapham Junction and 4.4 km of South Kensington Underground Station, London Nino Apartments...',
        price: '₹ 50,852.37',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
    }
];

const PRAGUE_APARTMENTS = [
    {
        name: 'R16 Residences Prague',
        location: 'Prague, Czech Republic',
        badge: 'Apartment',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '1,847 reviews',
        description: 'R16 Residences Prague offers accommodation within less than 1 km of the centre of Prague, with free WiFi, and a kitchenette with a toaster...',
        price: '₹ 22,977.71',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'MOOo Downtown',
        location: 'Prague, Czech Republic',
        badge: 'Apartment',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '2,187 reviews',
        description: 'Located in a fully refurbished Art Nouveau building, MOOo Downtown offers modern apartments in a historical building in central Prague...',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'MOOo by the Castle',
        location: 'Prague, Czech Republic',
        badge: 'Apartment',
        rating: 9.7,
        ratingText: 'Exceptional',
        reviewsCount: '1,508 reviews',
        description: 'Located in a historical building from the 16th century, MOOo by the Castle offers apartments with free WiFi and concierge services. Prague...',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'SeNo6 Apartments',
        location: 'Prague, Czech Republic',
        badge: 'Apartment',
        rating: 9.6,
        ratingText: 'Exceptional',
        reviewsCount: '1,398 reviews',
        description: 'SeNo6 Apartments is located in the centre of Prague, 250 m from the historical building of the Municipal House and offers accommodation i...',
        price: '₹ 15,904.41',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    }
];

const MOST_BOOKED = [
    {
        name: 'Cozy apartments in the center of London',
        location: 'Apartment in London',
        stars: 4,
        rating: 6.7,
        ratingText: 'Pleasant',
        reviewsCount: '166 reviews',
        trendText: 'Popular with guests booking apartments in London',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/588648484.jpg?k=9396b3bbef92df7a7fba76956ae00b137d13aaf0684a3ae24b2206bc7b885fe2&o='
    },
    {
        name: 'Eiffel Grand View',
        location: 'Apartment in Paris',
        stars: 3,
        rating: 8.5,
        ratingText: 'Very Good',
        reviewsCount: '412 reviews',
        trendText: 'Popular with guests booking apartments in Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Apartamenty Collegia Sobieskiego',
        location: 'Apartment in Gdańsk',
        stars: 4,
        rating: 9.0,
        ratingText: 'Wonderful',
        reviewsCount: '6,172 reviews',
        trendText: 'Popular with guests booking apartments in Gdańsk',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'Rioca Vienna Posto 2',
        location: 'Apartment in Vienna',
        stars: 4,
        rating: 9.0,
        ratingText: 'Wonderful',
        reviewsCount: '15,208 reviews',
        trendText: 'Popular with guests booking apartments in Vienna',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
    }
];

export default function Apartments({ onGoHome, onNavigateApartments }) {
    const [destination, setDestination] = useState('New Delhi');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (onNavigateApartments) {
            onNavigateApartments(destination, { checkInDate, checkOutDate });
        }
    };

    const formatDateDisplay = () => {
        if (checkInDate && checkOutDate) {
            const inDate = new Date(checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
            const outDate = new Date(checkOutDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
            return `${inDate} — ${outDate}`;
        }
        if (checkInDate) {
            const inDate = new Date(checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
            return `${inDate} — Check-out date`;
        }
        return 'Check-in date — Check-out date';
    };

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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '60px 0 80px 0',
                color: '#fff',
                marginTop: '12px'
            }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px' }}>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Apartments</h1>
                    <p style={{ fontSize: '18px', margin: '0 0 32px 0' }}>Find the apartments that appeal to you the most</p>

                    {/* SEARCH FORM */}
                    <form onSubmit={handleSearch} style={{ backgroundColor: '#ffb700', padding: '4px', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={{ background: '#fff', flex: '1 1 260px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333' }}>
                            <FaBed style={{ color: '#555', fontSize: '18px' }} />
                            <input
                                type="text"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '15px' }}
                            />
                        </div>

                        {/* CALENDAR FIELD WITH INTERACTIVE DROPDOWN */}
                        <div style={{ position: 'relative', flex: '1 1 240px' }}>
                            <div
                                onClick={() => setShowCalendar(!showCalendar)}
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
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {formatDateDisplay()}
                                </span>
                            </div>

                            {/* CALENDAR POPOVER */}
                            {showCalendar && (
                                <div style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    left: 0,
                                    zIndex: 100,
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                    padding: '20px',
                                    width: '300px',
                                    color: '#333'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Select Travel Dates</span>
                                        <button
                                            type="button"
                                            onClick={() => setShowCalendar(false)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '14px' }}
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', color: '#555' }}>
                                                Check-in Date
                                            </label>
                                            <input
                                                type="date"
                                                value={checkInDate}
                                                onChange={(e) => setCheckInDate(e.target.value)}
                                                style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', color: '#555' }}>
                                                Check-out Date
                                            </label>
                                            <input
                                                type="date"
                                                value={checkOutDate}
                                                min={checkInDate}
                                                onChange={(e) => setCheckOutDate(e.target.value)}
                                                style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setShowCalendar(false)}
                                            style={{
                                                marginTop: '8px',
                                                backgroundColor: '#006ce4',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '10px',
                                                borderRadius: '4px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer',
                                                width: '100%'
                                            }}
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div style={{ background: '#fff', flex: '1 1 240px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '6px', color: '#333', fontSize: '14px' }}>
                            <FaUser style={{ color: '#555', fontSize: '16px' }} />
                            <span>2 adults · 0 children · 1 room</span>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '6px', padding: '0 32px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0 }}>
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* BREADCRUMB: Home > Hotels > All apartments */}
            <div style={{ maxWidth: '1140px', margin: '16px auto', padding: '0 16px', fontSize: '13px', color: '#006ce4' }}>
                <span style={{ cursor: 'pointer' }} onClick={onGoHome}>Home</span> &gt; <span style={{ cursor: 'pointer', color: '#006ce4' }} onClick={onGoHome}>Hotels</span> &gt; <span style={{ color: '#333' }}>All apartments</span>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 16px 60px 16px' }}>

                {/* 1. FEATURED APARTMENT DESTINATIONS */}
                <section style={{ marginBottom: '48px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div>
                            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Featured apartment destinations</h2>
                            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Check out these popular destinations for apartments</p>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {FEATURED_DESTINATIONS.map((dest, i) => (
                            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', position: 'relative', height: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => onNavigateApartments && onNavigateApartments(dest.name)}>
                                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: '#fff' }}>
                                    <h3 style={{ margin: '0 0 2px 0', fontSize: '18px', fontWeight: 'bold' }}>{dest.name}</h3>
                                    <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>{dest.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. WE LOVE THESE APARTMENTS IN KRAKOW */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>We love these apartments in Krakow</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {KRAKOW_APARTMENTS.map((item, i) => (
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

                {/* 3. FIND THE PERFECT APARTMENT IN LONDON */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Find the perfect apartment in London</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {LONDON_APARTMENTS.map((item, i) => (
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

                {/* 4. A GREAT CHOICE OF APARTMENTS IN PRAGUE */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>A great choice of apartments in Prague</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {PRAGUE_APARTMENTS.map((item, i) => (
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

                {/* 5. MOST BOOKED APARTMENTS THIS MONTH */}
                <section style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Most booked apartments this month</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        {MOST_BOOKED.map((item, i) => (
                            <div key={i} style={{ border: '1px solid #e7e7e7', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <div>
                                        {/* Stars */}
                                        <div style={{ display: 'flex', color: '#ffb700', fontSize: '12px', marginBottom: '4px' }}>
                                            {[...Array(item.stars)].map((_, idx) => (
                                                <FaStar key={idx} />
                                            ))}
                                        </div>
                                        {/* Title below stars */}
                                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#006ce4', cursor: 'pointer', lineHeight: '1.2' }}>{item.name}</h3>
                                        {/* Location */}
                                        <p style={{ fontSize: '12px', color: '#595959', margin: '0 0 10px 0' }}>{item.location}</p>
                                        {/* Trend Text with Chart Icon */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#008009', fontWeight: '500', marginBottom: '16px' }}>
                                            <FaChartLine style={{ fontSize: '14px' }} /> <span>{item.trendText}</span>
                                        </div>
                                    </div>
                                    {/* Rating badge & score at bottom */}
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