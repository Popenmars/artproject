import styles from './page.module.scss';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.contactRow}>
                    <div className={styles.getInTouch}>
                        <div className={styles.contactInfo}>
                            <h2>GET IN TOUCH</h2>
                            <Link href="mailto:popemartin@gmail.com">popemartin@gmail.com</Link>
                            <Link href="tel:+2348104325820">+234 810 432 5820</Link>
                            <Link href="#">47 Oakwood Lane<br />NY 10012, New York B14 7QT<br />United States</Link>
                        </div>

                        <form action="" className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name*</label>
                                <input type="text" id="name" placeholder="Your name" className="form-control" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="lastname">Last Name*</label>
                                <input type="text" id="lastname" placeholder="Your last name" className="form-control" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Your email*</label>
                                <input type="email" id="email" placeholder="Your email address" className="form-control" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message*</label>
                                <textarea name="message" id="message" placeholder="Enter your message" className="form-control" rows={5}></textarea>
                            </div>

                            <button className={`btn ${styles.contactbtn}`}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
