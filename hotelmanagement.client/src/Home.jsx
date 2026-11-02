export default function Home({ onOpenDefaultResorts }) {
    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
            <h1>Welcome to Booking.com Clone</h1>
            <p>This is your home page.</p>
            <button
                onClick={onOpenDefaultResorts}
                style={{ padding: '10px 20px', backgroundColor: '#006ce4', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
                View Resorts Page
            </button>
        </div>
    );
}