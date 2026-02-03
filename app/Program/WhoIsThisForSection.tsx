import React from 'react';
import styles from './WhoIsThisForSection.module.css';

const WhoIsThisForSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.leftContent}>
                <img
                    src="/Who is AI 101  for.jpg"
                    alt="Who is AI 101 for"
                    className={styles.forImage}
                />
            </div>

            <div className={styles.rightContent}>
                <span className={styles.subHeading}>Who Is This For?</span>
                <h2 className={styles.heading}>PERFECT IF YOU'RE</h2>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        High school student trying to build real skills beyond textbooks and classes
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        College student wanting to stand out in internships, job applications, freelance work or start earning on the side
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        Young professional looking to save time and grow faster using AI
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        Small business owner or aspiring founder curious about using AI in practical, everyday ways to scale work or business
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhoIsThisForSection;
