import React from 'react';
import styles from './ProgramHighlightsSection.module.css';

const ProgramHighlightsSection = () => {
    const highlights = [
        {
            title: "Weekly Live Sessions",
            text: "6-week live near-peer session on Saturdays.",
            className: styles.card1,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <polygon points="10 8 14 11 10 14 10 8"></polygon>
                </svg>
            )
        },
        {
            title: "Professional Workshops",
            text: "2 session where you learn from Industry Professionals.",
            className: styles.card2,
            imageUrl: "/Vector (1).png"
        },
        {
            title: "15+ Gen AI Tools hands-on learning",
            text: "15+ cutting-edge AI tools that will help you from Upskilling to Job Application to Elevating your workflows.",
            className: styles.card3,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        },
        {
            title: "Virtual Hackathon",
            text: "Build projects using AI tools in real time, collaborating and competing.",
            className: styles.card4,
            imageUrl: "/Vector.png"
        },
        {
            title: "AI Cheat Sheet",
            text: "Unlock the hacks, give you an edge to build services and product you can sell and start earning.",
            className: styles.card5,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <path d="M12 2v20"></path>
                    <path d="m16 18 4-4-4-4"></path>
                    <path d="m8 6-4 4 4 4"></path>
                </svg>
            )
        },
        {
            title: "Certificate of Participation",
            text: "Display your certificate on LinkedIn and have it on your Resume.",
            className: styles.card6,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <path d="M12 15V3"></path>
                    <path d="M12 15C15 15 18 12 18 9C18 6 15 3 12 3C9 3 6 6 6 9C6 12 9 15 12 15Z"></path>
                    <path d="M12 15L12 21"></path>
                    <path d="M12 21L9 19"></path>
                    <path d="M12 21L15 19"></path>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Program Highlights</h2>
            <div className={styles.grid}>
                {highlights.map((item, index) => (
                    <div key={index} className={`${styles.card} ${item.className}`}>
                        <div className={styles.cardContent}>
                            {item.imageUrl && (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className={styles[`cardImage${index + 1}`]}
                                />
                            )}
                            {item.icon}
                            <h3 className={styles.cardHeading}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramHighlightsSection;
