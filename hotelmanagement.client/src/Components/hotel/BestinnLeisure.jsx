import  { useState } from 'react';

const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80', // Lobby
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',  // Bathroom
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',  // Bedroom
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',  // Dining
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',  // Terrace Restaurant
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',  // Entrance
];

const ROOM_OPTIONS = [
    {
        id: 1,
        guests: 2,
        origPrice: '₹52,500',
        price: '₹31,500',
        taxes: '+ ₹1,575 taxes and fees',
        breakfast: 'Good breakfast ₹400',
        included: false
    },
    {
        id: 2,
        guests: 2,
        origPrice: '₹56,500',
        price: '₹33,900',
        taxes: '+ ₹1,695 taxes and fees',
        breakfast: 'Good breakfast included',
        included: true
    },
    {
        id: 3,
        guests: 1,
        origPrice: '₹50,100',
        price: '₹30,060',
        taxes: '+ ₹1,503 taxes and fees',
        breakfast: 'Good breakfast ₹400',
        included: false
    },
    {
        id: 4,
        guests: 1,
        origPrice: '₹52,500',
        price: '₹31,500',
        taxes: '+ ₹1,575 taxes and fees',
        breakfast: 'Good breakfast included',
        included: true
    }
];

export default function BestinnLeisure({ onBack }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#f5f5f5', color: '#1a1a1a', minHeight: '100vh', padding: '16px' }}>
            {/* Navigation Header */}
            <div style={{ maxWidth: '1140px', margin: '0 auto 12px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    onClick={onBack}
                    style={{ background: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
                >
                    ← Back to Hotels
                </button>
                <div style={{ fontSize: '13px', color: '#006ce4' }}>
                    <span>Home</span> &gt; <span>Hotels</span> &gt; <span>India</span> &gt; <span>Bangalore</span> &gt; <span style={{ color: '#555' }}>Hotel Lenexa by Bestinn Leisure</span>
                </div>
            </div>

            {/* Main Content Card */}
            <div style={{ maxWidth: '1140px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>

                {/* Header Information */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <div style={{ color: '#febb02', fontSize: '16px' }}>★★★</div>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '4px 0', color: '#1a1a1a' }}>Hotel Lenexa by Bestinn Leisure</h1>
                        <p style={{ fontSize: '13px', color: '#006ce4', margin: 0 }}>
                            📍 Hotel Lenexa By Bestinn Leisure, 560016 Bangalore, India —
                            <strong style={{ cursor: 'pointer', marginLeft: '4px' }}>Great location - show map</strong>
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <button style={{ border: '1px solid #006ce4', background: 'transparent', color: '#006ce4', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>❤️</button>
                        <button style={{ border: '1px solid #006ce4', background: 'transparent', color: '#006ce4', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>🔗</button>
                        <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                            Reserve
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px', fontSize: '13px', color: '#006ce4', fontWeight: 'bold' }}>
                    🏷️ We Price Match
                </div>

                {/* Photo Grid & Reviews Sidebar */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginTop: '16px' }}>

                    {/* Photos Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px' }}>
                        <div style={{ height: '320px', borderRadius: '6px 0 0 6px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                            <img src={GALLERY_IMAGES[0]} alt="Lobby Front Desk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
                            <div style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                                <img src={GALLERY_IMAGES[1]} alt="Modern Bathroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                                <img src={GALLERY_IMAGES[2]} alt="Deluxe Bedroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                                    +68 photos
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guest Rating Box */}
                    <div style={{ border: '1px solid #e7e7e7', borderRadius: '6px', padding: '16px', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Wonderful</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>118 reviews</div>
                                </div>
                                <span style={{ backgroundColor: '#003580', color: '#fff', fontSize: '16px', fontWeight: 'bold', padding: '8px 10px', borderRadius: '6px 6px 6px 0' }}>
                                    9.0
                                </span>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '12px 0' }} />

                            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Guests who stayed here loved:</div>

                            <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#333', marginBottom: '8px', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #006ce4' }}>
                                “we have stayed 4 days but all 4 days similar breakfast no changes. we need different in different days”
                                <div style={{ fontWeight: 'bold', fontStyle: 'normal', marginTop: '4px', color: '#006ce4' }}>👤 Bhat 🇱🇰 Sri Lanka</div>
                            </div>

                            <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#333', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #006ce4' }}>
                                “Excellent property! Loved the breakfast on the terrace!”
                                <div style={{ fontWeight: 'bold', fontStyle: 'normal', marginTop: '4px', color: '#006ce4' }}>👤 Sonali 🇮🇳 India</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '12px', backgroundColor: '#ebf3ff', padding: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#003580' }}>Staff Rating</span>
                            <span style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', border: '1px solid #003580' }}>9.1</span>
                        </div>
                    </div>
                </div>

                {/* Availability Section */}
                <div style={{ marginTop: '36px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Availability</h2>

                    {/* Date Search Selector */}
                    <div style={{ display: 'flex', gap: '8px', backgroundColor: '#febb02', padding: '4px', borderRadius: '6px', marginBottom: '20px' }}>
                        <input type="text" style={{ flex: 2, border: 'none', padding: '12px', borderRadius: '4px', fontSize: '14px', fontWeight: '500' }} readOnly value="Wed, Sep 2 — Thu, Sep 10" />
                        <input type="text" style={{ flex: 1.5, border: 'none', padding: '12px', borderRadius: '4px', fontSize: '14px', fontWeight: '500' }} readOnly value="2 adults · 0 children · 1 room" />
                        <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '0 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>Change search</button>
                    </div>

                    {/* Room Booking Table */}
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #006ce4' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#3c649f', color: '#fff', textAlign: 'left', fontSize: '14px' }}>
                                <th style={{ padding: '12px', width: '25%' }}>Room type</th>
                                <th style={{ padding: '12px', width: '12%' }}>Number of guests</th>
                                <th style={{ padding: '12px', width: '23%' }}>Price for 8 nights</th>
                                <th style={{ padding: '12px', width: '25%' }}>Your choices</th>
                                <th style={{ padding: '12px', width: '15%' }}>Select Rooms</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* Room Specs Left Column */}
                                <td rowSpan={5} style={{ padding: '16px', verticalAlign: 'top', borderRight: '1px solid #e7e7e7', borderBottom: '1px solid #e7e7e7' }}>
                                    <div style={{ fontWeight: 'bold', color: '#006ce4', fontSize: '16px', textDecoration: 'underline', cursor: 'pointer' }}>Deluxe Double Room</div>
                                    <div style={{ color: '#d91010', fontSize: '12px', fontWeight: 'bold', marginTop: '4px' }}>⏰ We have 4 left</div>
                                    <div style={{ fontSize: '13px', color: '#333', marginTop: '8px' }}>🛏️ 1 queen bed</div>
                                    <div style={{ height: '140px', borderRadius: '4px', overflow: 'hidden', marginTop: '8px' }}>
                                        <img src={GALLERY_IMAGES[2]} alt="Deluxe Double Room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
                                        {['📐 21 m²', '🏙️ City view', '❄️ Air conditioning', '🚿 Attached bathroom', '📺 Flat-screen TV', '🔇 Soundproofing', '🍸 Minibar', '📶 Free Wifi'].map((tag, i) => (
                                            <span key={i} style={{ border: '1px solid #ccc', fontSize: '11px', padding: '2px 6px', borderRadius: '3px', backgroundColor: '#fff' }}>{tag}</span>
                                        ))}
                                    </div>
                                </td>
                            </tr>

                            {ROOM_OPTIONS.map((opt) => (
                                <tr key={opt.id} style={{ borderBottom: '1px solid #e7e7e7', fontSize: '13px' }}>
                                    <td style={{ padding: '12px', borderRight: '1px solid #e7e7e7', verticalAlign: 'top' }}>
                                        {Array.from({ length: opt.guests }).map((_, i) => (
                                            <span key={i} style={{ fontSize: '14px', marginRight: '2px' }}>👤</span>
                                        ))}
                                    </td>
                                    <td style={{ padding: '12px', borderRight: '1px solid #e7e7e7', verticalAlign: 'top' }}>
                                        <div style={{ textDecoration: 'line-through', color: '#d91010', fontSize: '12px' }}>{opt.origPrice}</div>
                                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a' }}>{opt.price}</div>
                                        <div style={{ fontSize: '11px', color: '#666' }}>{opt.taxes}</div>
                                        <span style={{ backgroundColor: '#008009', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 4px', borderRadius: '3px', display: 'inline-block', marginTop: '4px' }}>40% off</span>
                                    </td>
                                    <td style={{ padding: '12px', borderRight: '1px solid #e7e7e7', verticalAlign: 'top' }}>
                                        <div style={{ fontWeight: 'bold', color: opt.included ? '#008009' : '#333' }}>☕ {opt.breakfast}</div>
                                        <div style={{ color: '#008009', fontWeight: 'bold', marginTop: '4px' }}>✓ Free cancellation <span style={{ fontWeight: 'normal', color: '#333' }}>before 6:00 PM on September 2, 2026</span></div>
                                        <div style={{ color: '#008009', fontWeight: 'bold', marginTop: '2px' }}>✓ No prepayment needed – <span style={{ fontWeight: 'normal', color: '#333' }}>pay at the property</span></div>
                                        <div style={{ color: '#008009', fontWeight: 'bold', marginTop: '2px' }}>💳 No credit card needed</div>
                                    </td>
                                    <td style={{ padding: '12px', verticalAlign: 'top' }}>
                                        <select style={{ width: '100%', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Gallery Popup Modal */}
            {isGalleryOpen && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
                    <div style={{ backgroundColor: '#fff', borderRadius: '8px', maxWidth: '800px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
                            <h3 style={{ margin: 0, fontSize: '18px' }}>Hotel Lenexa by Bestinn Leisure - Gallery</h3>
                            <button onClick={() => setIsGalleryOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold' }}>✕ Close</button>
                        </div>
                        <div style={{ height: '450px', backgroundColor: '#000' }}>
                            <img src={GALLERY_IMAGES[selectedImage]} alt="Gallery Slide" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', padding: '12px', overflowX: 'auto', backgroundColor: '#f0f0f0' }}>
                            {GALLERY_IMAGES.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="Thumbnail"
                                    onClick={() => setSelectedImage(idx)}
                                    style={{ width: '70px', height: '50px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px', border: selectedImage === idx ? '3px solid #006ce4' : 'none' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}