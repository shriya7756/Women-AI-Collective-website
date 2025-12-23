import React from 'react';
import styles from './WhoIsThisForSection.module.css';

const WhoIsThisForSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.leftContent}>
                <div className={styles.card}>
                    <div className={`${styles.label} ${styles.label1}`}>1. High school student..</div>
                    <div className={`${styles.label} ${styles.label2}`}>2. College student..</div>
                    <div className={`${styles.label} ${styles.label3}`}>3. Young professional..</div>
                    <div className={`${styles.label} ${styles.label4}`}>4. Entrepreneurs..</div>
                </div>
            </div>

            <div className={styles.rightContent}>
                <span className={styles.subHeading}>Who Is This For?</span>
                <h2 className={styles.heading}>PERFECT IF YOU'RE</h2>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        High school student planning your future career
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        College student wanting to stand out in job applications
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        Young professional looking to advance faster
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✓</span>
                        Entrepreneur seeking to scale your business with AI
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhoIsThisForSection;
