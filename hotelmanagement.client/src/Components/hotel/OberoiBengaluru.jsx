import React, { useState } from 'react';
import {
    FaStar,
    FaMapMarkerAlt,
    FaTimes,
    FaCheck,
    FaCoffee,
    FaBed,
    FaUser,
    FaHeart,
    FaShareAlt
} from 'react-icons/fa';

const HOTEL_DATA = {
    id: 'oberoi-bengaluru',
    name: 'The Oberoi Bengaluru',
    stars: 5,
    address: '37-39, Mahatma Gandhi Road , 560001 Bangalore, India',
    locationBadge: 'Excellent location – show map – Subway Access',
    rating: 9.3,
    ratingText: 'Wonderful',
    reviewsCount: '1,592 reviews',
    staffRating: 9.6,
    description: 'Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore...',
    heroImages: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    ],
    galleryCategories: [
        { id: 'all', label: 'Overview' },
        { id: 'deluxe', label: 'Deluxe Room w...' },
        { id: 'luxury', label: 'Luxury Room w...' },
        { id: 'premier', label: 'Premier Room ...' },
        { id: 'exec', label: 'Executive Suite ...' },
        { id: 'deluxe-suite', label: 'Deluxe Suite wi...' }
    ],
    galleryImages: [
        { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', category: 'all' },
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', category: 'deluxe' },
        { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', category: 'all' },
        { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', category: 'luxury' },
        { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', category: 'all' },
        { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80', category: 'premier' },
        { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', category: 'all' },
        { url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80', category: 'exec' },
        { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', category: 'deluxe-suite' },
        { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80', category: 'all' }
    ],
    reviews: [
        {
            author: 'Das',
            country: 'United States',
            flag: '🇺🇸',
            text: '“Hands down - one of the best hotels I have every stayed in. The attention to detail and guest satisfaction is beyond comparison. All staff are superb. There is nothing more to say than: stay at the...”'
        },
        {
            author: 'Debby',
            country: 'India',
            flag: '🇮🇳',
            text: '“Good hospitality , great breakfast and good location”'
        },
        {
            author: 'Guest Review',
            country: 'India',
            flag: '🇮🇳',
            text: '“The staff (thank you to Ms. JONAKI BISWAS & Mr. ADARSH SINGH) the lobby, the facilities, the location and overall luxury experience...”'
        }
    ],
    roomTypes: [
        {
            name: 'Deluxe Room with Private Balcony',
            badge: 'We have 2 left',
            bed: '1 queen bed',
            features: ['1 room', '32 m²', 'Balcony', 'Garden view', 'Air conditioning', 'Attached bathroom', 'Flat-screen TV', 'Coffee machine', 'Minibar'],
            options: [
                {
                    guests: 2,
                    price: 18000,
                    taxes: 3240,
                    breakfastText: 'Exceptional breakfast ₹ 2,301',
                    breakfastIncluded: false,
                    airportShuttle: false,
                    cancellation: 'Non-refundable',
                    payment: 'Pay the property before arrival'
                },
                {
                    guests: 2,
                    price: 20000,
                    taxes: 3600,
                    breakfastText: 'Exceptional breakfast included',
                    breakfastIncluded: true,
                    airportShuttle: false,
                    cancellation: 'Non-refundable',
                    payment: 'Pay the property before arrival'
                },
                {
                    guests: 2,
                    price: 20500,
                    taxes: 3690,
                    breakfastText: 'Exceptional breakfast included',
                    breakfastIncluded: true,
                    airportShuttle: true,
                    cancellation: 'Non-refundable',
                    payment: 'Pay the property before arrival'
                },
                {
                    guests: 1,
                    price: 17000,
                    taxes: 3060,
                    breakfastText: 'Exceptional breakfast ₹ 2,301',
                    breakfastIncluded: false,
                    airportShuttle: false,
                    cancellation: 'Non-refundable',
                    payment: 'Pay the property before arrival'
                }
            ]
        }
    ]
};

export default function OberoiBengaluru({ onBack }) {
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState('all');
    const [selectedRoomCounts, setSelectedRoomCounts] = useState({});

    const handleRoomSelectChange = (index, value) => {
        setSelectedRoomCounts(prev => ({ ...prev, [index]: value }));
    };

    const filteredGalleryImages = galleryFilter === 'all'
        ? HOTEL_DATA.galleryImages
        : HOTEL_DATA.galleryImages.filter(img => img.category === galleryFilter);

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', color: '#333' }}>
            <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '16px' }}>

                {/* Back Button */}
                {onBack && (
                    <button
                        onClick={onBack}
                        style={{ background: 'none', border: 'none', color: '#006ce4', cursor: 'pointer', fontWeight: 'bold', padding: '8px 0', fontSize: '14px', marginBottom: '8px' }}
                    >
                        ← Back to search
                    </button>
                )}

                {/* Hotel Header */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px 8px 0 0', borderBottom: '1px solid #eee' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                {[...Array(HOTEL_DATA.stars)].map((_, i) => (
                                    <FaStar key={i} style={{ color: '#ffb700', fontSize: '14px' }} />
                                ))}
                                <span style={{ backgroundColor: '#ffb700', color: '#fff', fontSize: '10px', padding: '2px 4px', borderRadius: '2px', fontWeight: 'bold' }}>👍</span>
                            </div>
                            <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0 0 6px 0', color: '#262626' }}>
                                {HOTEL_DATA.name}
                            </h1>
                            <p style={{ fontSize: '13px', color: '#006ce4', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <FaMapMarkerAlt style={{ color: '#006ce4' }} /> {HOTEL_DATA.address} — <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>{HOTEL_DATA.locationBadge}</span>
                            </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <FaHeart style={{ color: '#006ce4', fontSize: '20px', cursor: 'pointer' }} />
                            <FaShareAlt style={{ color: '#006ce4', fontSize: '20px', cursor: 'pointer' }} />
                            <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                                Reserve
                            </button>
                        </div>
                    </div>
                </div>

                {/* Gallery & Score Sidebar */}
                <div style={{ backgroundColor: '#fff', padding: '20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', borderRadius: '0 0 8px 8px', marginBottom: '24px' }}>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ height: '310px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setShowGalleryModal(true)}>
                                <img src={HOTEL_DATA.heroImages[0]} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ height: '151px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setShowGalleryModal(true)}>
                                    <img src={HOTEL_DATA.heroImages[1]} alt="Hero 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ height: '151px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setShowGalleryModal(true)}>
                                    <img src={HOTEL_DATA.heroImages[2]} alt="Hero 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                            {HOTEL_DATA.heroImages.slice(3, 6).map((img, idx) => (
                                <div key={idx} style={{ height: '90px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setShowGalleryModal(true)}>
                                    <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                            <div
                                onClick={() => setShowGalleryModal(true)}
                                style={{
                                    height: '90px',
                                    borderRadius: '4px',
                                    backgroundImage: `url(${HOTEL_DATA.heroImages[6]})`,
                                    backgroundSize: 'cover',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '15px' }}>
                                    +37 photos
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ border: '1px solid #e7e7e7', borderRadius: '8px', padding: '16px', backgroundColor: '#fff' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#262626' }}>{HOTEL_DATA.ratingText}</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>{HOTEL_DATA.reviewsCount}</div>
                                </div>
                                <div style={{ backgroundColor: '#003580', color: '#fff', padding: '6px 10px', borderRadius: '6px 6px 6px 0', fontWeight: 'bold', fontSize: '16px' }}>
                                    {HOTEL_DATA.rating}
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Guests who stayed here loved</div>
                                <p style={{ fontSize: '12px', color: '#444', fontStyle: 'italic', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                                    {HOTEL_DATA.reviews[0].text}
                                </p>
                                <div style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span>{HOTEL_DATA.reviews[0].flag}</span> <span>{HOTEL_DATA.reviews[0].author}</span> · <span>{HOTEL_DATA.reviews[0].country}</span>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #f0f0f0', marginTop: '12px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Staff</span>
                                <span style={{ border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{HOTEL_DATA.staffRating}</span>
                            </div>
                        </div>

                        <div style={{
                            height: '140px',
                            borderRadius: '8px',
                            backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                                Show on map
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rooms Table */}
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e7e7', overflow: 'hidden' }}>
                    <div style={{ padding: '16px', borderBottom: '1px solid #eee', display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Filter by:</span>
                        <label style={{ fontSize: '14px', cursor: 'pointer' }}><input type="checkbox" /> Rooms</label>
                        <label style={{ fontSize: '14px', cursor: 'pointer' }}><input type="checkbox" /> Suites</label>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#003580', color: '#fff' }}>
                                <th style={{ padding: '12px 16px', width: '30%' }}>Room type</th>
                                <th style={{ padding: '12px 16px', width: '10%' }}>Number of guests</th>
                                <th style={{ padding: '12px 16px', width: '18%' }}>Today's Price</th>
                                <th style={{ padding: '12px 16px', width: '27%' }}>Your choices</th>
                                <th style={{ padding: '12px 16px', width: '15%' }}>Select Rooms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {HOTEL_DATA.roomTypes.map((room, roomIdx) => (
                                <React.Fragment key={roomIdx}>
                                    {room.options.map((opt, optIdx) => (
                                        <tr key={optIdx} style={{ borderBottom: '1px solid #e7e7e7', verticalAlign: 'top' }}>
                                            {optIdx === 0 && (
                                                <td rowSpan={room.options.length} style={{ padding: '16px', borderRight: '1px solid #e7e7e7', backgroundColor: '#fafafa' }}>
                                                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#006ce4', fontWeight: 'bold' }}>
                                                        {room.name}
                                                    </h4>
                                                    <div style={{ color: '#d9381e', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
                                                        ⏰ {room.badge}
                                                    </div>

                                                    <div style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#444', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <FaBed /> <span>{room.bed}</span>
                                                    </div>

                                                    <div style={{ borderRadius: '6px', overflow: 'hidden', height: '120px', marginBottom: '12px', position: 'relative' }}>
                                                        <img src={HOTEL_DATA.heroImages[1]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>

                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                        {room.features.map((feat, fIdx) => (
                                                            <span key={fIdx} style={{ border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', color: '#444' }}>
                                                                {feat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            )}

                                            <td style={{ padding: '16px', borderRight: '1px solid #e7e7e7' }}>
                                                <div style={{ display: 'flex', gap: '2px', color: '#333' }}>
                                                    {[...Array(opt.guests)].map((_, g) => (
                                                        <FaUser key={g} style={{ fontSize: '14px' }} />
                                                    ))}
                                                </div>
                                            </td>

                                            <td style={{ padding: '16px', borderRight: '1px solid #e7e7e7' }}>
                                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#262626' }}>
                                                    ₹ {opt.price.toLocaleString()}
                                                </div>
                                                <div style={{ fontSize: '11px', color: '#666' }}>
                                                    + ₹ {opt.taxes.toLocaleString()} taxes and fees
                                                </div>
                                            </td>

                                            <td style={{ padding: '16px', borderRight: '1px solid #e7e7e7' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                    <div style={{ fontSize: '12px', color: opt.breakfastIncluded ? '#008009' : '#333', fontWeight: opt.breakfastIncluded ? 'bold' : 'normal', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <FaCoffee /> {opt.breakfastText}
                                                    </div>
                                                    {opt.airportShuttle && (
                                                        <div style={{ fontSize: '12px', color: '#008009', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            <FaCheck /> Includes one-way airport shuttle
                                                        </div>
                                                    )}
                                                    <div style={{ fontSize: '12px', color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <FaTimes style={{ color: '#666' }} /> {opt.cancellation}
                                                    </div>
                                                </div>
                                            </td>

                                            <td style={{ padding: '16px' }}>
                                                <select
                                                    value={selectedRoomCounts[optIdx] || 0}
                                                    onChange={(e) => handleRoomSelectChange(optIdx, e.target.value)}
                                                    style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', width: '100%', marginBottom: '12px' }}
                                                >
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>

                                                {optIdx === 0 && (
                                                    <div>
                                                        <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', width: '100%', padding: '10px 0', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                                                            I'll reserve
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            {/* Modal */}
            {showGalleryModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div style={{ backgroundColor: '#fff', borderRadius: '12px', width: '1000px', maxWidth: '95vw', height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                        <div style={{ padding: '16px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#262626' }}>{HOTEL_DATA.name}</h2>
                            <button onClick={() => setShowGalleryModal(false)} style={{ background: 'none', border: 'none', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                Close <FaTimes />
                            </button>
                        </div>
                        <div style={{ padding: '12px 24px', borderBottom: '1px solid #eee', display: 'flex', gap: '12px', overflowX: 'auto' }}>
                            {HOTEL_DATA.galleryCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setGalleryFilter(cat.id)}
                                    style={{
                                        border: galleryFilter === cat.id ? '2px solid #006ce4' : '1px solid #ccc',
                                        backgroundColor: galleryFilter === cat.id ? '#f0f6ff' : '#fff',
                                        color: galleryFilter === cat.id ? '#006ce4' : '#333',
                                        padding: '6px 14px',
                                        borderRadius: '6px',
                                        fontWeight: galleryFilter === cat.id ? 'bold' : 'normal',
                                        fontSize: '13px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div style={{ padding: '20px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                            {filteredGalleryImages.map((img, i) => (
                                <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', height: '200px' }}>
                                    <img src={img.url} alt={`Gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}