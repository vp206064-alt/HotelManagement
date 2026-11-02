import  { useState } from 'react';

// Sample High Resolution Images corresponding to your screenshots
const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80', // Exterior Entrance
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',  // Master Suite
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',  // Luxury Bathroom
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',  // Dining & Bar Area
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',  // Royal Suite Bed
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',  // Lobby Reception
];

const ROOM_TYPES = [
    { id: 1, name: 'Deluxe King Room', bed: '1 king bed', guests: 2, price: '₹6,500' },
    { id: 2, name: 'Deluxe Twin Room', bed: '2 twin beds', guests: 2, price: '₹6,200' },
    { id: 3, name: 'Junior Suite', bed: '1 king bed', guests: 2, price: '₹8,900' },
    { id: 4, name: 'Executive Suite', bed: '1 king bed', guests: 2, price: '₹11,500' },
    { id: 5, name: 'Presidential Suite', bed: '1 king bed', guests: 4, price: '₹18,000' }
];

export default function ZippHotelRosalba({ onBack }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div style={{ fontFamily: 'Aptos, "Segoe UI", sans-serif', backgroundColor: '#f5f5f5', color: '#1a1a1a', minHeight: '100vh', padding: '16px' }}>
            {/* Top Navigation Bar */}
            <div style={{ maxWidth: '1140px', margin: '0 auto 12px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    onClick={onBack}
                    style={{ background: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
                >
                    ← Back to Hotels
                </button>
                <div style={{ fontSize: '13px', color: '#006ce4' }}>
                    <span>Home</span> &gt; <span>Hotels</span> &gt; <span>India</span> &gt; <span>Bangalore</span> &gt; <span style={{ color: '#555' }}>Zipp Hotel Rosalba</span>
                </div>
            </div>

            {/* Main Content Container */}
            <div style={{ maxWidth: '1140px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>

                {/* Header Title Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: '#febb02', fontSize: '16px' }}>★★★★</span>
                            <span style={{ backgroundColor: '#febb02', color: '#003580', fontSize: '11px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>👍+</span>
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '6px 0', color: '#1a1a1a' }}>Zipp Hotel Rosalba</h1>
                        <p style={{ fontSize: '13px', color: '#006ce4', margin: 0 }}>
                            📍 Rosalba Suites, No 131, Old Airport Road, Bangalore, 560017 Bangalore, India —
                            <strong style={{ cursor: 'pointer', marginLeft: '4px' }}>Excellent location – show map</strong>
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

                {/* We Price Match Banner */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px', fontSize: '13px', color: '#006ce4', fontWeight: 'bold' }}>
                    🏷️ We Price Match
                </div>

                {/* Photo Gallery Grid & Rating Side Banner */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginTop: '16px' }}>

                    {/* Photos Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px' }}>
                        <div style={{ position: 'relative', height: '320px', borderRadius: '6px 0 0 6px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                            <img src={GALLERY_IMAGES[0]} alt="Hotel Entrance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
                            <div style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                                <img src={GALLERY_IMAGES[1]} alt="Bedroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setIsGalleryOpen(true)}>
                                <img src={GALLERY_IMAGES[2]} alt="Bathroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                                    +67 photos
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Rating Box */}
                    <div style={{ border: '1px solid #e7e7e7', borderRadius: '6px', padding: '16px', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Wonderful</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>112 reviews</div>
                                </div>
                                <span style={{ backgroundColor: '#003580', color: '#fff', fontSize: '16px', fontWeight: 'bold', padding: '8px 10px', borderRadius: '6px 6px 6px 0' }}>
                                    9.0
                                </span>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '12px 0' }} />

                            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Guests who stayed here loved:</div>

                            <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#333', marginBottom: '8px', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #006ce4' }}>
                                “Cleanliness, attentiveness and overall everything.”
                                <div style={{ fontWeight: 'bold', fontStyle: 'normal', marginTop: '4px', color: '#006ce4' }}>👤 Mahaath 🇲🇻 Maldives</div>
                            </div>

                            <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#333', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #006ce4' }}>
                                “I had a very peaceful and comfortable stay. The staff from reception to housekeeping and restaurant were caring...”
                                <div style={{ fontWeight: 'bold', fontStyle: 'normal', marginTop: '4px', color: '#006ce4' }}>👤 Aishath 🇲🇻 Maldives</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '12px', backgroundColor: '#ebf3ff', padding: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#003580' }}>Excellent location!</span>
                            <span style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', border: '1px solid #003580' }}>9.3</span>
                        </div>
                    </div>
                </div>

                {/* Availability Section */}
                <div style={{ marginTop: '36px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>Availability</h2>
                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba', color: '#856404', padding: '10px 14px', borderRadius: '4px', fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        ⚠️ <span>Select dates to see this property's availability and prices</span>
                    </div>

                    {/* Search Date Filters */}
                    <div style={{ display: 'flex', gap: '8px', backgroundColor: '#febb02', padding: '4px', borderRadius: '6px', marginBottom: '20px' }}>
                        <input type="text" placeholder="Check-in date — Check-out date" style={{ flex: 2, border: 'none', padding: '12px', borderRadius: '4px', fontSize: '14px' }} readOnly value="15 Sep 2026 - 18 Sep 2026" />
                        <input type="text" placeholder="2 adults · 0 children · 1 room" style={{ flex: 1.5, border: 'none', padding: '12px', borderRadius: '4px', fontSize: '14px' }} readOnly value="2 adults · 0 children · 1 room" />
                        <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '0 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>Search</button>
                    </div>

                    {/* Room Availability Table */}
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #006ce4' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#4c76b2', color: '#fff', textAlign: 'left', fontSize: '14px' }}>
                                <th style={{ padding: '12px' }}>Room Type</th>
                                <th style={{ padding: '12px' }}>Number of guests</th>
                                <th style={{ padding: '12px' }}>Price</th>
                                <th style={{ padding: '12px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROOM_TYPES.map((room) => (
                                <tr key={room.id} style={{ borderBottom: '1px solid #e7e7e7', fontSize: '14px' }}>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ fontWeight: 'bold', color: '#006ce4', cursor: 'pointer' }}>{room.name}</div>
                                        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>🛏️ {room.bed}</div>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        {Array.from({ length: room.guests }).map((_, i) => (
                                            <span key={i} style={{ marginRight: '4px' }}>👤</span>
                                        ))}
                                    </td>
                                    <td style={{ padding: '16px', fontWeight: 'bold', fontSize: '16px', color: '#1a1a1a' }}>
                                        {room.price}
                                    </td>
                                    <td style={{ padding: '16px', textAlign: 'right' }}>
                                        <button style={{ backgroundColor: '#006ce4', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                                            Show prices
                                        </button>
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
                            <h3 style={{ margin: 0, fontSize: '18px' }}>Zipp Hotel Rosalba - Gallery</h3>
                            <button onClick={() => setIsGalleryOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold' }}>✕ Close</button>
                        </div>
                        <div style={{ height: '450px', backgroundColor: '#000' }}>
                            <img src={GALLERY_IMAGES[selectedImage]} alt="Gallery slide" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', padding: '12px', overflowX: 'auto', backgroundColor: '#f0f0f0' }}>
                            {GALLERY_IMAGES.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="thumb"
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