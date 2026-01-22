"use client"
import React from 'react';
import styles from './ProgramHighlightsSection.module.css';

const ProgramHighlightsSection = () => {
    const highlights = [
        {
            title: "Weekly Live Sessions",
            text: "6-week live near-peer session on Saturdays.",
            className: styles.card1,
            imageUrl: "/Laptop Play Video.png"
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
            imageUrl: "/Apps.png"
        },
        {
            title: "Virtual Hackathon",
            text: "Unlock the hacks, give you an edge to build services and product you can sell and start earning.",
            className: styles.card4,
            imageUrl: "/Vector.png"
        },
        {
            title: "AI Cheat Sheet",
            text: "Unlock the hacks, give you an edge to build services and product you can sell and start earning.",
            className: styles.card5,
            imageUrl: "/light icon.png",
            showArrow: true
        },
        {
            title: "Certificate of Participation",
            text: "Display your certificate on LinkedIn and have it on your Resume.",
            className: styles.card6,
            imageUrl: "/Diploma.png"
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

                            <h3 className={styles.cardHeading}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>

                            {index === 4 ? (
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={styles.whiteArrow}>
                                    <path d="M21.5 8.9375L34.0625 21.5L21.5 34.0625M8.9375 21.5H34.0625"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            ) : item.showArrow && (
                                <img src="/Pixel Arrow straight.png" alt="arrow" className={styles.cardArrow} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramHighlightsSection;
