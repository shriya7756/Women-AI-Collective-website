'use client';

import { useEffect, useState } from 'react';
import styles from '../LandingPage/ImpactSection.module.css';

const impactData = [
    {
        icon: '/Frame 22.png',
        value: '500+',
        label: 'Girls JOINED'
    },
    {
        icon: '/Frame 24.png',
        value: '10+',
        label: 'Cities Reached'
    },
    {
        icon: '/Frame 23.png',
        value: '45%',
        label: 'Increase In Participation'
    }
];

export default function ImpactSection() {
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

        const section = document.getElementById('impact-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="impact-section" className={styles.impactWrapper}>
            <div className={styles.container}>
                {impactData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.impactBox} ${isVisible ? styles.fadeIn : ''}`}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                        <div className={styles.iconWrapper}>
                            <img src={item.icon} alt={item.label} className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.value}>{item.value}</div>
                            <div className={styles.label}>{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}