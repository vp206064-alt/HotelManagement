import { useState } from 'react';
import {
    FaHeart, FaMapMarkerAlt, FaChevronRight, FaTimes,
    FaPlus, FaMinus, FaInfoCircle
} from 'react-icons/fa';

const ALL_VILLAS = [
    {
        id: 1,
        name: "Host My Journey Luxury Homes",
        location: "New Delhi",
        mapLink: "6.9 km from downtown",
        type: "One-Bedroom Villa",
        details: "Entire villa • 1 bedroom • 1 bathroom • Air conditioning • 1 full bed",
        price: 8000,
        taxes: 1440,
        cancellation: "No prepayment needed – pay at the property",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60",
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 2,
        name: "StayVista at The Birdwood Estate with Gym and Pool",
        location: "South Delhi, New Delhi",
        mapLink: "18.9 km from downtown",
        rating: 9.0,
        ratingText: "Wonderful",
        reviewsCount: "2 reviews",
        badge: "Getaway Deal",
        type: "Villa",
        details: "Entire villa • 6 bedrooms • 1 living room • 7 bathrooms • 286 m² • Air conditioning • 6 king beds",
        price: 48324,
        originalPrice: 60405,
        taxes: 8698,
        stockAlert: "We have 1 left at this price",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60",
        bedrooms: 6,
        bathrooms: 7,
    },
    {
        id: 3,
        name: "Barkat Luxury Pool Farmhouse 4BHK Party Villa Delhi",
        location: "Dwarka, New Delhi",
        mapLink: "20.8 km from downtown",
        type: "Villa with Private Pool",
        details: "Entire villa • 4 bedrooms • 1 living room • 4 bathrooms • 1 kitchen • 14 m² • Air conditioning • 5 beds (4 fulls, 1 sofa bed)",
        price: 30000,
        taxes: 5400,
        cancellation: "No prepayment needed – pay at the property",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60",
        bedrooms: 4,
        bathrooms: 4,
    },
    {
        id: 4,
        name: "The White House Farms",
        location: "Rohini, New Delhi",
        mapLink: "16.9 km from downtown",
        type: "Villa with Private Pool",
        details: "Entire villa • 4 bedrooms • 1 living room • 4 bathrooms • 1 kitchen • 511 m² • Air conditioning • 6 beds (5 fulls, 1 sofa bed)",
        price: 14500,
        taxes: 2610,
        cancellation: "No prepayment needed – pay at the property",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60",
        bedrooms: 4,
        bathrooms: 4,
    },
    {
        id: 5,
        name: "Luxotica Greens - 6 BHK Luxury Villa in Chattarpur",
        location: "South Delhi, New Delhi",
        mapLink: "23 km from downtown",
        badge: "New to Booking.com",
        type: "Villa",
        details: "Entire villa • 1 bedroom • 5 bathrooms • 4,046 m² • Air conditioning • 1 king bed",
        price: 27000,
        taxes: 4860,
        cancellation: "No prepayment needed – pay at the property",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60",
        bedrooms: 1,
        bathrooms: 5,
    },
    {
        id: 6,
        name: "Ultra Luxury 7BHK Estate I Pool, Grand Lawn and Tubs",
        location: "South Delhi, New Delhi",
        mapLink: "18.9 km from downtown",
        type: "Villa",
        details: "Entire villa • 2 bedrooms • 12 bathrooms • 1,000 m² • Air conditioning • 2 king beds",
        price: 157500,
        taxes: 28350,
        cancellation: "Free cancellation",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60",
        bedrooms: 2,
        bathrooms: 12,
    }
];

export default function SearchResults({ onBack }) {
    const [maxBudget, setMaxBudget] = useState(50000);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [viewMode, setViewMode] = useState('list');
    const [showNotice, setShowNotice] = useState(true);
    const [selectedSort, setSelectedSort] = useState('Our top picks');

    const filteredProperties = ALL_VILLAS.filter(item => {
        if (item.price > maxBudget && maxBudget < 150000) return false;
        if (bedrooms > 0 && item.bedrooms < bedrooms) return false;
        if (bathrooms > 0 && item.bathrooms < bathrooms) return false;
        return true;
    });

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Aptos, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1a1a1a' }}>

            {/* Top Breadcrumb Navigation */}
            <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '12px 16px', fontSize: '12px', color: '#006ce4' }}>
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={onBack}>Home</span> &gt;{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>India</span> &gt;{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Delhi NCR</span> &gt;{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>New Delhi</span> &gt;{' '}
                <span style={{ color: '#474747' }}>Search results</span>
            </div>

            <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 16px 40px', display: 'flex', gap: '24px' }}>

                {/* LEFT SIDEBAR FILTERS */}
                <div style={{ width: '280px', flexShrink: 0 }}>

                    {/* Map Preview Card */}
                    <div style={{
                        height: '140px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        position: 'relative',
                        marginBottom: '16px',
                        border: '1px solid #ccc',
                        backgroundImage: 'radial-gradient(#a3c2f0 1px, transparent 1px)',
                        backgroundColor: '#e8f2fe',
                        backgroundSize: '12px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <button style={{
                            backgroundColor: '#006ce4',
                            color: '#fff',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '13px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                        }}>
                            <FaMapMarkerAlt /> Show on map
                        </button>
                    </div>

                    {/* Sidebar Filter Accordion Container */}
                    <div style={{ border: '1px solid #e7e7e7', borderRadius: '8px', overflow: 'hidden' }}>

                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Filter by:</h3>
                        </div>

                        {/* Budget Slider Section */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                                Your budget (per night)
                            </label>
                            <div style={{ fontSize: '13px', color: '#1a1a1a', marginBottom: '8px' }}>
                                ₹ 1,000 – ₹ {maxBudget.toLocaleString()}{maxBudget >= 150000 ? '+' : ''}
                            </div>

                            {/* Fake Histogram Bars */}
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '30px', marginBottom: '4px', padding: '0 4px' }}>
                                {[15, 30, 45, 80, 60, 40, 90, 70, 50, 35, 20, 10, 25, 40, 15, 85, 30, 10].map((h, i) => (
                                    <div key={i} style={{ flex: 1, backgroundColor: '#006ce4', height: `${h}%`, borderRadius: '1px 1px 0 0' }}></div>
                                ))}
                            </div>

                            <input
                                type="range"
                                min="1000"
                                max="150000"
                                step="1000"
                                value={maxBudget}
                                onChange={(e) => setMaxBudget(Number(e.target.value))}
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>

                        {/* Popular Filters */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Popular filters
                            </label>
                            {[
                                { label: '5 stars', count: 1 },
                                { label: 'Breakfast included', count: 19 },
                                { label: 'Wonderful: 9+', count: 22 },
                                { label: 'Hotels', count: 2698 },
                                { label: 'Swimming pool', count: 57 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                                        <span>{item.label}</span>
                                    </label>
                                    <span style={{ color: '#6b6b6b' }}>{item.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Property Type Filter */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Property Type
                            </label>
                            {[
                                { label: 'Villas', count: 91, checked: true },
                                { label: 'Resort Villages', count: 2 },
                                { label: 'Luxury tents', count: 1 },
                                { label: 'Hotels', count: 2698 },
                                { label: 'Apartments', count: 1831 },
                                { label: 'Resorts', count: 16 },
                                { label: 'Bed and Breakfasts', count: 197 },
                                { label: 'Vacation Homes', count: 21 },
                                { label: 'Farm Stays', count: 49 },
                                { label: 'Chalets', count: 1 },
                                { label: 'Guesthouses', count: 222 },
                                { label: 'Homestays', count: 137 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" defaultChecked={item.checked} style={{ width: '16px', height: '16px' }} />
                                        <span style={{ fontWeight: item.checked ? 'bold' : 'normal' }}>{item.label}</span>
                                    </label>
                                    <span style={{ color: '#6b6b6b' }}>{item.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Size and Layout */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Size and layout
                            </label>

                            {/* Bedrooms Counter */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '13px' }}>
                                <span>Bedrooms</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #868686', borderRadius: '4px', padding: '4px 8px' }}>
                                    <button onClick={() => setBedrooms(Math.max(0, bedrooms - 1))} style={counterBtnStyle}><FaMinus style={{ fontSize: '10px' }} /></button>
                                    <span style={{ fontWeight: 'bold', minWidth: '12px', textAlign: 'center' }}>{bedrooms}</span>
                                    <button onClick={() => setBedrooms(bedrooms + 1)} style={counterBtnStyle}><FaPlus style={{ fontSize: '10px' }} /></button>
                                </div>
                            </div>

                            {/* Bathrooms Counter */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '13px' }}>
                                <span>Bathrooms</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #868686', borderRadius: '4px', padding: '4px 8px' }}>
                                    <button onClick={() => setBathrooms(Math.max(0, bathrooms - 1))} style={counterBtnStyle}><FaMinus style={{ fontSize: '10px' }} /></button>
                                    <span style={{ fontWeight: 'bold', minWidth: '12px', textAlign: 'center' }}>{bathrooms}</span>
                                    <button onClick={() => setBathrooms(bathrooms + 1)} style={counterBtnStyle}><FaPlus style={{ fontSize: '10px' }} /></button>
                                </div>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Facilities
                            </label>
                            {[
                                { label: 'Parking', count: 90 },
                                { label: 'Swimming pool', count: 57 },
                                { label: 'Hot tub/Jacuzzi', count: 9 },
                                { label: 'Free Wifi', count: 82 },
                                { label: 'Restaurant', count: 2 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                                        <span>{item.label}</span>
                                    </label>
                                    <span style={{ color: '#6b6b6b' }}>{item.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Room Facilities */}
                        <div style={{ padding: '16px', borderBottom: '1px solid #e7e7e7' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Room facilities
                            </label>
                            {[
                                { label: 'City view', count: 6 },
                                { label: 'Electric kettle', count: 21 },
                                { label: 'Mountain view', count: 3 },
                                { label: 'Infinity pool', count: 1 },
                                { label: 'Terrace', count: 44 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                                        <span>{item.label}</span>
                                    </label>
                                    <span style={{ color: '#6b6b6b' }}>{item.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Meals */}
                        <div style={{ padding: '16px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                                Meals
                            </label>
                            {[
                                { label: 'Breakfast included', count: 19 },
                                { label: 'Breakfast & dinner included', count: 11 },
                                { label: 'All-inclusive', count: 10 },
                                { label: 'All meals included', count: 3 },
                                { label: 'Kitchen facilities', count: 84 },
                                { label: 'Breakfast & lunch included', count: 1 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                                        <span>{item.label}</span>
                                    </label>
                                    <span style={{ color: '#6b6b6b' }}>{item.count}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* RIGHT MAIN CONTENT AREA */}
                <div style={{ flex: 1 }}>

                    {/* Header & List / Grid Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h1 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>
                            New Delhi: {filteredProperties.length} properties found
                        </h1>

                        <div style={{ display: 'flex', border: '1px solid #868686', borderRadius: '4px', overflow: 'hidden' }}>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    padding: '6px 16px',
                                    backgroundColor: viewMode === 'list' ? '#e8f2fe' : '#fff',
                                    border: 'none',
                                    borderRight: '1px solid #868686',
                                    fontSize: '13px',
                                    fontWeight: viewMode === 'list' ? 'bold' : 'normal',
                                    cursor: 'pointer'
                                }}>
                                List
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    padding: '6px 16px',
                                    backgroundColor: viewMode === 'grid' ? '#e8f2fe' : '#fff',
                                    border: 'none',
                                    fontSize: '13px',
                                    fontWeight: viewMode === 'grid' ? 'bold' : 'normal',
                                    cursor: 'pointer'
                                }}>
                                Grid
                            </button>
                        </div>
                    </div>

                    {/* Sort Dropdown Pill & Active Tags */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                        <select
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '20px',
                                border: '1px solid #868686',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                backgroundColor: '#fff',
                                cursor: 'pointer',
                                outline: 'none'
                            }}>
                            <option>Sort by: Our top picks</option>
                            <option>Price (lowest first)</option>
                            <option>Price (highest first)</option>
                            <option>Property rating</option>
                        </select>

                        {/* Active Pill: Villas */}
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid #006ce4',
                            color: '#006ce4',
                            borderRadius: '20px',
                            padding: '6px 12px',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            backgroundColor: '#fff'
                        }}>
                            Villas <FaTimes style={{ cursor: 'pointer' }} />
                        </span>
                    </div>

                    {/* Notice Alert Banner */}
                    {showNotice && (
                        <div style={{
                            border: '1px solid #e7e7e7',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            padding: '12px 16px',
                            fontSize: '13px',
                            color: '#1a1a1a',
                            marginBottom: '20px',
                            display: 'flex',
                            justify: 'space-between',
                            alignItems: 'center',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaInfoCircle style={{ color: '#1a1a1a', fontSize: '16px' }} />
                                <span>Based on your filters, 99% of places to stay are unavailable on our site.</span>
                            </div>
                            <FaTimes onClick={() => setShowNotice(false)} style={{ color: '#6b6b6b', cursor: 'pointer' }} />
                        </div>
                    )}

                    {/* PROPERTY CARDS LIST */}
                    <div style={{ display: viewMode === 'grid' ? 'grid' : 'flex', gridTemplateColumns: 'repeat(2, 1fr)', flexDirection: 'column', gap: '16px' }}>
                        {filteredProperties.map((villa) => (
                            <div key={villa.id} style={{
                                backgroundColor: '#fff',
                                border: '1px solid #e7e7e7',
                                borderRadius: '8px',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: viewMode === 'grid' ? 'column' : 'row',
                                gap: '16px',
                                position: 'relative'
                            }}>
                     
                                {/* Image Section */}
                                <div style={{ position: 'relative', width: viewMode === 'grid' ? '100%' : '240px', height: '200px', flexShrink: 0 }}>
                                    <img
                                        src={villa.image}
                                        alt={villa.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                                    />
                                    <button style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        backgroundColor: '#fff',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                                    }}>
                                        <FaHeart style={{ color: '#474747', fontSize: '14px' }} />
                                    </button>
                                </div>

                                {/* Details Section */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        {/* Header: Title & Reviews */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div>
                                                <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#006ce4', margin: '0 0 4px 0', cursor: 'pointer' }}>
                                                    {villa.name}
                                                </h2>
                                                <div style={{ fontSize: '12px', color: '#006ce4', marginBottom: '8px' }}>
                                                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{villa.location}</span> •{' '}
                                                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Show on map</span> •{' '}
                                                    <span style={{ color: '#474747' }}>{villa.mapLink}</span>
                                                </div>
                                            </div>

                                            {/* Rating Box */}
                                            {villa.rating && (
                                                <div style={{ textAlign: 'right', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <div>
                                                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{villa.ratingText}</div>
                                                        <div style={{ fontSize: '11px', color: '#6b6b6b' }}>{villa.reviewsCount}</div>
                                                    </div>
                                                    <div style={{ backgroundColor: '#003580', color: '#fff', padding: '4px 6px', borderRadius: '4px 4px 4px 0', fontWeight: 'bold', fontSize: '13px' }}>
                                                        {villa.rating}
                                                    </div>
                                                </div>
                                            )}

                                            {/* New Badge */}
                                            {villa.badge && !villa.rating && (
                                                <span style={{ backgroundColor: '#ffb700', color: '#000', fontSize: '11px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
                                                    {villa.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Deal Tag */}
                                        {villa.badge === 'Getaway Deal' && (
                                            <span style={{ backgroundColor: '#008234', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px' }}>
                                                Getaway Deal
                                            </span>
                                        )}

                                        {/* Room Specs Block */}
                                        <div style={{ borderLeft: '2px solid #e7e7e7', paddingLeft: '8px', margin: '6px 0' }}>
                                            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#1a1a1a' }}>{villa.type}</div>
                                            <div style={{ fontSize: '12px', color: '#474747', margin: '4px 0', lineHeight: '1.4' }}>{villa.details}</div>
                                        </div>

                                        {/* Cancellation / Payment Perks */}
                                        {villa.cancellation && (
                                            <div style={{ fontSize: '12px', color: '#008234', fontWeight: 'bold', marginTop: '4px' }}>
                                                ✓ {villa.cancellation}
                                            </div>
                                        )}
                                    </div>

                                    {/* Pricing and Availability CTA */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '12px' }}>
                                        <div>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#474747', cursor: 'pointer' }}>
                                                <input type="checkbox" /> Compare
                                            </label>
                                            {villa.stockAlert && (
                                                <div style={{ fontSize: '12px', color: '#d4111e', fontWeight: 'bold', marginTop: '4px' }}>
                                                    {villa.stockAlert}
                                                </div>
                                            )}
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '11px', color: '#6b6b6b' }}>1 night, 2 adults</div>

                                            {villa.originalPrice && (
                                                <span style={{ textDecoration: 'line-through', color: '#d4111e', fontSize: '13px', marginRight: '6px' }}>
                                                    ₹ {villa.originalPrice.toLocaleString()}
                                                </span>
                                            )}

                                            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a' }}>
                                                ₹ {villa.price.toLocaleString()}
                                            </span>

                                            <div style={{ fontSize: '11px', color: '#6b6b6b', marginBottom: '8px' }}>
                                                + ₹ {villa.taxes.toLocaleString()} taxes and fees
                                            </div>

                                            <button style={{
                                                backgroundColor: '#006ce4',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '10px 16px',
                                                borderRadius: '4px',
                                                fontWeight: 'bold',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                See availability <FaChevronRight style={{ fontSize: '11px' }} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

const counterBtnStyle = {
    backgroundColor: '#fff',
    border: 'none',
    color: '#006ce4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px'
};