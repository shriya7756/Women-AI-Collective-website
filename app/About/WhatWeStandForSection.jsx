'use client';

import { useEffect, useState } from 'react';
import styles from "./WhatWeStandFor.module.css"

export default function WhatWeStandForSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const pillars = [
        {
            id: 'access',
            image: "/Frame 1171276400.png",
            title: 'Access',
            description: 'We believe technology should feel reachable before it feels technical. Access creates confidence, and confidence is where ambitions flourish.'
        },
        {
            id: 'sisterhood',
            image: '/Frame 1171276399.png',
            title: 'Sisterhood',
            description: 'We believe women grow stronger when they learn together. Support, trust and shared progress matter more than competition.'
        },
        {
            id: 'agency',
            image: '/Frame 1171276401.png',
            title: 'Agency',
            description: 'We believe skills should lead to independence. Through hands-on, practical learning, women turn AI knowledge into income, opportunity and autonomy.'
        }
    ];

    return (
        <section className={styles.whatWeStandForSection}>
            <div className={styles.container}>
                <h1 className={`${styles.mainTitle} ${isVisible ? styles.fadeIn : ''}`}>
                    What we stand for?
                </h1>
                
                <div className={`${styles.pillarsContainer} ${isVisible ? styles.fadeIn : ''}`}>
                    {pillars.map((pillar) => (
                        <div key={pillar.id} className={styles.pillarCard}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className={styles.pillarImage}
                                />
                            </div>
                            <h2 className={styles.pillarTitle}>{pillar.title}</h2>
                            <p className={styles.pillarDescription}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}