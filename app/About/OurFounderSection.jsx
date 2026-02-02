'use client';

import styles from './OurFounderSection.module.css';

export default function OurFounderSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Our Founder</h2>

            <div className={styles.contentContainer}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/motion_photo_4942381548780179075.jpg"
                        alt=""
                        className={styles.bgImage}
                    />
                    <img
                        src="/Our Founder img.png"
                        alt="Samina Khatoon - Founder"
                        className={styles.founderImage}
                    />
                </div>

                <div className={styles.textColumn}>
                    <h3 className={styles.subHeading}>Meet Samina,</h3>
                    <p className={styles.description}>
                        At WAIC, we&apos;re committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power to understand, use, and question the technology shaping our lives.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/samina-khatoon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinLink}
                    >
                        <img
                            src="/image 13.png"
                            alt="LinkedIn Profile"
                            className={styles.linkedinIcon}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}