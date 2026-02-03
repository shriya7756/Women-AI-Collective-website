'use client';

import { useEffect, useState } from 'react';
import styles from './PillarsSection.module.css';

const pillars = [
    {
        number: '1',
        title: 'Near-Peer Mentorship',
        description: "Start with the basics through guided sessions with mentors who've walked your path. We cover AI and ML fundamentals in practical, relatable terms that make sense to beginners and build confidence."
    },
    {
        number: '2',
        title: 'Guest Sessions',
        description: "Get real-world insights and training from professionals actively working in AI and tech. Learn what's actually happening in the industry, not just theory from textbooks."
    },
    {
        number: '3',
        title: 'Hands-On Learning',
        description: "Put knowledge into practice with real use cases of Generative AI tools. Build your own simple custom AI agents and discover how AI can amplify your existing skills."
    },
    {
        number: '4',
        title: 'Virtual Hackathon',
        description: "Apply everything you've learned by building a passion project that combines AI tools with your domain expertise—whether that's social work, literature, business, or any field you're passionate about."
    },
    {
        number: '5',
        title: 'Sisterhood Support',
        description: "Join a community of women breaking barriers together. Because learning is better when you're not alone.",
        hasImage: true
    }
];

export default function PillarsSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('pillars-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="pillars-section" className={styles.pillarsWrapper}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} ${isVisible ? styles.fadeIn : ''}`}>
                    HOW WE SOLVE THE PROBLEM
                </h2>

                <div className={`${styles.dottedRectangle} ${isVisible ? styles.fadeInScale : ''}`}>
                    {/* Precise Divider Lines */}
                    <div className={styles.verticalLine}></div>
                    <div className={styles.horizontalLineLeft}></div>
                    <div className={styles.horizontalLineRight}></div>
                    <div className={styles.horizontalLineBottom}></div>

                    <div className={styles.pillarsGrid}>
                        {pillars.map((pillar, index) => (
                            <div key={index} className={`${styles.pillarItem} ${pillar.number === '5' ? styles.pillarFull : ''}`}>
                                <div className={styles.pillarContent}>
                                    <span className={styles.pillarNumber}>Pillar No. {pillar.number}</span>
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                    <p className={styles.pillarText}>{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image shown after all pillars (keeps desktop absolute placement, mobile shows it after pillar 5) */}
                    <div className={styles.pillarImageOnly}>
                        <picture>
                            <source media="(max-width: 768px)" srcSet="/how we solve the problem img - mobile image.png" />
                            <img
                                src="/How we solve the problem Img.png"
                                alt="Sisterhood Support"
                                className={styles.pillarImage}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}
