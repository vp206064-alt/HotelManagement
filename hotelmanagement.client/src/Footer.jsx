import { useState } from 'react';

// Mock data defined directly inside the file to prevent import errors
const POPULAR_DESTINATIONS = [
    ['New Delhi Hotels', 'Mumbai Hotels', 'Bengaluru Hotels', 'Chennai Hotels', 'Hyderabad Hotels'],
    ['Goa Hotels', 'Jaipur Hotels', 'Ooty Hotels', 'Udaipur Hotels', 'Kolkata Hotels'],
    ['Kochi Hotels', 'Manali Hotels', 'Shimla Hotels', 'Agra Hotels', 'Munnar Hotels'],
    ['Pondicherry Hotels', 'Varanasi Hotels', 'Mussoorie Hotels', 'Lonavala Hotels', 'Rishikesh Hotels'],
    ['Pune Hotels', 'Coorg Hotels', 'Mysore Hotels', 'Alleppey Hotels', 'Darjeeling Hotels']
];

const CATEGORY_LINKS = [
    'Hotels', 'Apartments', 'Resorts', 'Villas', 'Hostels', 'Guesthouses', 'B&Bs', 'Homestays'
];

const FOOTER_COLUMNS = [
    {
        title: 'Support',
        links: ['Manage your trips', 'Customer Service', 'Safety Resource Center']
    },
    {
        title: 'Discover',
        links: ['Genius loyalty program', 'Seasonal deals', 'Travel articles', 'Booking.com Communities']
    },
    {
        title: 'Terms and settings',
        links: ['Privacy & cookies', 'Terms & conditions', 'Partner dispute', 'Modern Slavery Statement']
    },
    {
        title: 'Partners',
        links: ['Extranet login', 'Partner help', 'List your property', 'Become an affiliate']
    },
    {
        title: 'About',
        links: ['About Booking.com', 'How We Work', 'Sustainability', 'Careers', 'Investor relations']
    }
];

export default function Footer() {
    const [footerTab, setFooterTab] = useState('domestic');

    return (
        <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #e7e7e7', marginTop: '40px', paddingTop: '32px', paddingBottom: '32px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>

                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>
                    Popular with travelers from India
                </h3>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid #e7e7e7', paddingBottom: '12px' }}>
                    {[
                        { id: 'domestic', label: 'Domestic cities' },
                        { id: 'intl', label: 'International cities' },
                        { id: 'regions', label: 'Regions' },
                        { id: 'countries', label: 'Countries' },
                        { id: 'places', label: 'Places to stay' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setFooterTab(tab.id)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '100px',
                                border: footerTab === tab.id ? '1px solid #006ce4' : '1px solid transparent',
                                backgroundColor: footerTab === tab.id ? '#f0f6ff' : 'transparent',
                                color: footerTab === tab.id ? '#006ce4' : '#262626',
                                fontSize: '14px',
                                fontWeight: footerTab === tab.id ? 'bold' : 'normal',
                                cursor: 'pointer'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
                    {POPULAR_DESTINATIONS.map((col, colIdx) => (
                        <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {col.map((item, itemIdx) => (
                                <a key={itemIdx} href={`#${item}`} style={{ color: '#262626', fontSize: '13px', textDecoration: 'none' }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px', paddingBottom: '32px', borderBottom: '1px solid #e7e7e7', fontSize: '13px', color: '#262626' }}>
                    {CATEGORY_LINKS.map((cat, idx) => (
                        <span key={idx}>
                            <a href={`#${cat}`} style={{ color: '#262626', textDecoration: 'none' }}>{cat}</a>
                            {idx < CATEGORY_LINKS.length - 1 && <span style={{ marginLeft: '12px', color: '#868686' }}>·</span>}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', paddingTop: '32px' }}>
                    {FOOTER_COLUMNS.map((col, idx) => (
                        <div key={idx}>
                            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>{col.title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {col.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a href={`#${link}`} style={{ color: '#262626', fontSize: '13px', textDecoration: 'none' }}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    );
}