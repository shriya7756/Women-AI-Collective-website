'use client';

import { useEffect, useState } from 'react';
import styles from "../LandingPage/PillarsSection.module.css"

export default function WhoWeAreSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className= {styles.heroSection}>
            <div className={styles.container}>
                {/* First Section - Text Left, Image Right */}
                <div className={`${styles.contentRow} ${isVisible ? styles.fadeIn : ''}`}>
                    <div className={styles.textContent}>
                        <h1 className={styles.mainHeading}>
                            Women AI Collective is the first AI literacy platform
                        </h1>
                        <p className={styles.subText}>
                            Designed specifically for women from both non-tech and tech to become AI-literate and AI-fluent.
                            We believe that in an AI-first world, not knowing how AI works creates a new barrier, keeping women,
                            especially those from non-tech backgrounds, out of future job opportunities. This isn&apos;t just about
                            technology. It&apos;s about equality.
                        </p>
                        <button className={styles.knowMoreButton}>
                            <span className={styles.buttonText}>Know more</span>
                            <div className={styles.arrowContainer}>
                                <img src="/Pixel Arrow.png" alt="Arrow" className={styles.arrowDefault} />
                                <img src="/Pixel Arrow straight.png" alt="Arrow" className={styles.arrowHover} />
                            </div>
                        </button>
                    </div>
                    <div className={styles.imageContent}>
                        <img
                            src="/hero-image.png"
                            alt="Women AI Collective - AI Literacy Platform"
                            className={styles.heroImage}
                        />
                    </div>
                </div>

                {/* Second Section - Image Left, Text Right */}
                <div className={`${styles.contentRow} ${styles.contentRowReverse} ${isVisible ? styles.fadeInDelay : ''}`}>
                    <div className={styles.imageContent}>
                        <img
                            src="/hero-image-2.png"
                            alt="AI Education for Women"
                            className={styles.heroImage}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.secondHeading}>
                            Because Your Background Shouldn&apos;t Limit Your Future
                        </h2>
                        <p className={styles.secondSubText}>
                            AI is transforming every industry but the current AI education remains intimidating and technical,
                            and excludes millions of talented women. Skill disparity is amplifying gender disparity. These women
                            aren&apos;t lacking capability- they lack access to AI education that speaks their language. The result?
                            A massive talent pool left behind when we need diverse perspectives in AI the most.
                        </p>
                        <button className={styles.knowMoreButton}>
                            <span className={styles.buttonText}>Know more</span>
                            <div className={styles.arrowContainer}>
                                <img src="/Pixel Arrow.png" alt="Arrow" className={styles.arrowDefault} />
                                <img src="/Pixel Arrow straight.png" alt="Arrow" className={styles.arrowHover} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
