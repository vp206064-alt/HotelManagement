import './DelhiHotels.css'; // Ensure your CSS file is named DelhiHotels.css

const delhiHotelsData = [
    {
        id: 1,
        name: "Hotel Nest - Greater Kailash 1",
        location: "Greater Kailash 1, New Delhi",
        distance: "9.4 km from downtown",
        description: "Located in New Delhi, within 4.2 miles of Humayun's Tomb and 4.6 miles of Tughlaqabad Fort, Hotel Nest - Greater Kailash 1 has accommodations with a terrace and free WiFi throughout the property as...",
        rating: "3 stars",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 2,
        name: "Hotel Glace Prime - Near IGI New Delhi Airport",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Located in New Delhi, Hotel Glace Prime Near IGI New Delhi Airport offers a garden. This 4-star hotel offers room service and an ATM.",
        rating: "4 stars",
        score: "8.8",
        reviewCount: "22 reviews",
        reviewCategory: "Excellent",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 3,
        name: "Hotel Aroma Igi Airport Delhi With Free Airport Drop",
        location: "Mahipalpur, New Delhi",
        distance: "13.8 km from downtown",
        description: "Located conveniently in the Mahipalpur district of New Delhi, Hotel Aroma Igi Airport Delhi With Free Airport Drop is located 5.7 miles from Qutub Minar, 6.9 miles from MG Road and 7.7 miles from...",
        rating: "4 stars",
        score: "8.9",
        reviewCount: "24 reviews",
        reviewCategory: "Excellent",
        locationScore: "Location 9.4",
        priceText: "Select dates"
    },
    {
        id: 4,
        name: "Hotel Decent Premier Suites Near Delhi Aerocity",
        location: "New Delhi",
        distance: "16.1 km from downtown",
        description: "Hotel Decent Premier Suites Near Delhi Aerocity is located in New Delhi, 7.9 miles from Qutub Minar and 8.9 miles from MG Road. This 4-star hotel has air-conditioned rooms with a private bathroom.",
        rating: "4 stars",
        score: "8.7",
        reviewCount: "228 reviews",
        reviewCategory: "Excellent",
        amenity: "Subway Access",
        priceText: "Select dates"
    },
    {
        id: 5,
        name: "Hotel Luxury Suites Delhi Airport",
        location: "New Delhi",
        distance: "14.9 km from downtown",
        description: "Hotel Luxury Suites Delhi Airport provides accommodations in New Delhi. With free WiFi, this 4-star hotel offers room service and an ATM.",
        rating: "4 stars",
        score: "8.1",
        reviewCount: "123 reviews",
        reviewCategory: "Very Good",
        priceText: "Select dates"
    },
    {
        id: 6,
        name: "Hotel Seven Inn Pride Near IGI Delhi Airport",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Located in New Delhi, 6.9 miles from Qutub Minar, Hotel Seven Inn Pride Near IGI Delhi Airport provides accommodations with a free bikes, free private parking, a garden and a terrace.",
        rating: "4 stars",
        score: "8.8",
        reviewCount: "286 reviews",
        reviewCategory: "Excellent",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 7,
        name: "Hotel Elysian By G K Group Near IGI Delhi Airport",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Located in New Delhi, 6.9 miles from Qutub Minar, Hotel Elysian By G K Group Near IGI Delhi Airport has accommodations with a garden, free private parking, a shared lounge and a terrace.",
        rating: "4 stars",
        score: "9.2",
        reviewCount: "88 reviews",
        reviewCategory: "Wonderful",
        locationScore: "Location 9.5",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 8,
        name: "Hotel Radiance Park Delhi Airport",
        location: "New Delhi",
        distance: "14.9 km from downtown",
        description: "Located in New Delhi, 6.9 miles from Qutub Minar, Hotel Radiance Park Delhi Airport has accommodations with a terrace, free private parking and a restaurant.",
        rating: "4 stars",
        score: "8.3",
        reviewCount: "125 reviews",
        reviewCategory: "Very Good",
        priceText: "Select dates"
    },
    {
        id: 9,
        name: "Hotel The Venue At Delhi Airport IGI",
        location: "Mahipalpur, New Delhi",
        distance: "13.7 km from downtown",
        description: "Hotel The Venue At Delhi Airport IGI provides air-conditioned accommodations in New Delhi.",
        rating: "3 stars",
        score: "9.3",
        reviewCount: "35 reviews",
        reviewCategory: "Wonderful",
        priceText: "Select dates"
    },
    {
        id: 10,
        name: "Hotel Olive Aero Suites Near Delhi IGI Airport",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Located within 6.9 miles of Qutub Minar and 7.9 miles of MG Road, Hotel Olive Aero Suites Near Delhi IGI Airport provides rooms with air conditioning and a private bathroom in New Delhi.",
        rating: "4 stars",
        score: "8.9",
        reviewCount: "127 reviews",
        reviewCategory: "Excellent",
        priceText: "Select dates"
    },
    {
        id: 11,
        name: "Hotel Belwood By Signature StayZ Near Delhi Airport",
        location: "Aerocity, New Delhi",
        distance: "13.6 km from downtown",
        description: "Located in New Delhi, 5.4 miles from Qutub Minar, Hotel Belwood By Signature StayZ Near Delhi Airport has accommodations with a fitness center, free private parking, a garden and a terrace.",
        rating: "4 stars",
        score: "8.9",
        reviewCount: "7 reviews",
        reviewCategory: "Excellent",
        locationScore: "Location 9.3",
        amenity: "Subway Access",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 12,
        name: "Hotel The Montana Suite - Free Airport and Aerocity Pickup & Drop",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Featuring a garden and views of city, Hotel The Montana Suite - Free Airport and Aerocity Pickup & Drop is located in New Delhi, 6.9 miles from Qutub Minar.",
        rating: "4 stars",
        score: "8.5",
        reviewCount: "65 reviews",
        reviewCategory: "Very Good",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 13,
        name: "Hotel D'Capitol-Delhi Airport",
        location: "Mahipalpur, New Delhi",
        distance: "13.8 km from downtown",
        description: "Hotel D'Capitol-Delhi Airport is located in New Delhi, in the Mahipalpur district. This 4-star hotel offers an ATM and a concierge service.",
        rating: "4 stars",
        score: "7.7",
        reviewCount: "2,206 reviews",
        reviewCategory: "Good",
        priceText: "Select dates"
    },
    {
        id: 14,
        name: "Hotel Aroma Suites Delhi - With Free Airport Drop",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Hotel Aroma Suites Delhi - With Free Airport Drop is located in New Delhi, 6.9 miles from Qutub Minar and 7.9 miles from MG Road.This 4-star hotel offers an ATM and a tour desk.",
        rating: "4 stars",
        score: "8.4",
        reviewCount: "120 reviews",
        reviewCategory: "Very Good",
        priceText: "Select dates"
    },
    {
        id: 15,
        name: "Hotel Bell Montana Stay Near IGI Airport Delhi- Free Airport Pickup & Drop",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Located in New Delhi, Hotel Bell Montana Stay Near IGI Airport Delhi- Free Airport Pickup & Drop features a garden. This 4-star hotel offers free shuttle service, room service and free WiFi.",
        rating: "4 stars",
        score: "8.5",
        reviewCount: "98 reviews",
        reviewCategory: "Very Good",
        tag: "New to Booking.com",
        priceText: "Select dates"
    },
    {
        id: 16,
        name: "Ballamounts Blue Hotel Near IGI Delhi Airport - Free Breakfast and Dinner complementry",
        location: "New Delhi",
        distance: "14.8 km from downtown",
        description: "Offering city views, Ballamounts Blue Hotel Near IGI Delhi Airport - Free Breakfast and Dinner complementry in New Delhi provides accommodations and a garden.",
        rating: "4 stars",
        score: "10",
        reviewCount: "6 reviews",
        reviewCategory: "Exceptional",
        locationScore: "Location 10",
        tag: "New to Booking.com",
        priceText: "Select dates"
    }
];

export default function DelhiHotels({ onGoHome }) {
    return (
        <div className="delhi-hotels-container">
            {/* Optional Back to Home / Breadcrumb Navigation */}
            <div className="search-header-path" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <span>Home</span> &gt; <span>India</span> &gt; <span>Delhi NCR</span> &gt; <span>New Delhi</span> &gt; <span>Search results</span>
                </div>
                {onGoHome && (
                    <button
                        onClick={onGoHome}
                        style={{ padding: '4px 10px', cursor: 'pointer', background: '#0071c2', color: '#fff', border: 'none', borderRadius: '4px' }}
                    >
                        &larr; Back to Home
                    </button>
                )}
            </div>

            <h2 className="results-title">
                New Delhi: {delhiHotelsCountDisplay(delhiHotelsData.length)} properties found
            </h2>

            <div className="hotels-list">
                {delhiHotelsData.map(hotel => (
                    <div className="hotel-card" key={hotel.id}>
                        <div className="hotel-image-placeholder">
                            <span className="heart-icon">♥</span>
                            {hotel.tag && <span className="badge-tag">{hotel.tag}</span>}
                        </div>

                        <div className="hotel-info">
                            <div className="hotel-main-details">
                                <h3>{hotel.name}</h3>
                                <div className="hotel-rating-stars">
                                    {'★'.repeat(parseInt(hotel.rating) || 3)}
                                </div>
                                <p className="hotel-location-text">
                                    <span className="link-map">{hotel.location}</span> · {hotel.distance}
                                    {hotel.amenity && ` · ${hotel.amenity}`}
                                </p>
                                <p className="hotel-desc">{hotel.description}</p>
                            </div>

                            <div className="hotel-pricing-section">
                                {hotel.score && (
                                    <div className="review-box-container">
                                        <div className="review-summary">
                                            <span className="review-category">{hotel.reviewCategory}</span>
                                            <span className="review-count">{hotel.reviewCount}</span>
                                        </div>
                                        <div className="review-score-badge">{hotel.score}</div>
                                    </div>
                                )}
                                {hotel.locationScore && (
                                    <div className="location-score-tag">{hotel.locationScore}</div>
                                )}
                                <button className="select-dates-btn">{hotel.priceText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function delhiHotelsCountDisplay(count) {
    return count.toLocaleString();
}