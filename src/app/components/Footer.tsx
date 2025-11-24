"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/signup') {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.contain1}>
                    <div>
                        <div>
                            <h3>MARSYNERGY</h3>
                            <p>Whether you&apos;re an artist looking to display your work or a visitor seeking to explore <br /> new artistic expressions, <strong>MARSYNERGY</strong> is your gateway to a dynamic and creative community.</p>
                        </div>
                        <div>
                            <h3>SERVICES</h3>
                            <ul>
                                <li><Link href="/artgalaxy">ART GALAXY</Link></li>
                                <li><Link href="/inkedvilla">INKED VILLA</Link></li>
                                <li><Link href="/soundspace">SOUND SPACE</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>CONTACT</h3>
                            <ul>
                                <li><span><FaHome /></span> <Link href="">New York, NY 10012, US</Link></li>
                                <li><span><FaEnvelope /></span> <Link href="mailto:popemartin@gmail.com">popemartin@gmail.com</Link></li>
                                <li><span><FaPhone /></span> <Link href="tel:+2348104325820">+234 810 432 5820</Link></li>
                                <li><span><FaPrint /></span> <Link href="tel:+2348104325820">+234 810 432 5820</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>FOLLOW US</h3>
                            <Link className={`${styles.socialBtn}`} style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                                <FaFacebookF />
                            </Link>

                            <Link className={`${styles.socialBtn}`} style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                                <FaTwitter />
                            </Link>

                            <Link className={`${styles.socialBtn}`} style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                                <FaGoogle />
                            </Link>

                            <Link className={`${styles.socialBtn}`} style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                                <FaInstagram />
                            </Link>

                            <Link className={`${styles.socialBtn}`} style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
