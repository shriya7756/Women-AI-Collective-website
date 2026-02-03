import React from 'react';
import styles from './HowDifferentSection.module.css';

const HowDifferentSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>How We're Different</h2>

            <div className={styles.container}>
                {/* Left Box */}
                <div className={`${styles.box} ${styles.leftBox}`}>
                    <div className={styles.iconPlaceholder}>
                        <img src="/Boring.png" alt="Boring" width={60} height={60} />
                    </div>

                    <div className={styles.labelBox}>
                        <span className={styles.labelText}>Online AI Courses generally sucks</span>
                    </div>

                    <ul className={styles.list}>
                        <li className={styles.listItem}>Boring self-paced videos with no support</li>
                        <li className={styles.listItem}>Overly technical for beginners</li>
                        <li className={styles.listItem}>Theoretical with no practical application</li>
                        <li className={styles.listItem}>Lonely learning experiences</li>
                    </ul>
                </div>

                {/* Right Box */}
                <div className={`${styles.box} ${styles.rightBox}`}>
                    <div className={styles.iconPlaceholder}>
                        <img src="/Happy.png" alt="Happy" width={60} height={60} />
                    </div>

                    <div className={styles.labelBox}>
                        <span className={styles.labelText}>But At Artificial Intelligence 101, You...</span>
                    </div>

                    <ul className={styles.list}>
                        <li className={styles.listItem}>Learn through live interactive sessions</li>
                        <li className={styles.listItem}>Attend Guest lectures by industry professionals</li>
                        <li className={styles.listItem}>Build real projects in a virtual hackathon</li>
                        <li className={styles.listItem}>Connect with a community of driven women</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowDifferentSection;