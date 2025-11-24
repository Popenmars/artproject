'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa';

export default function Signup() {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const togglePasswordVisibility = () => {
        if (password.length > 0) {
            setShowPassword(!showPassword);
        }
    };

    return (
        <section className={styles.hero}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/img/marsvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className="container">
                <div  style={{ minHeight: '100vh' }}>
                    <div >
                        <div className={styles.glassContainer}>
                            <div className={styles.loginContainer}>
                                <div className={styles.loginTitle}>
                                    <span>Login</span>
                                </div>

                                <div className={styles.loginOption}>
                                    <div className={styles.option}>
                                        <a href="#">
                                            <Image src="/img/googlelogo.png" width={30} height={30} alt="Google" />
                                        </a>
                                    </div>

                                    <div className={styles.option}>
                                        <a href="#">
                                            <Image src="/img/applelogo.jpg" width={55} height={55} alt="Apple" />
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.seperator}>
                                    <span>OR</span>
                                </div>

                                <form>
                                    <div className={styles.inputWrapper}>
                                        <input type="text" id="user" required />
                                        <label htmlFor="user">Username</label>
                                        <span className={styles.icon}><FaUser /></span>
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="pass"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="pass">Password</label>
                                        <span
                                            className={styles.icon}
                                            onClick={togglePasswordVisibility}
                                            style={{ cursor: password.length > 0 ? 'pointer' : 'default' }}
                                        >
                                            {showPassword ? <FaUnlock /> : <FaLock />}
                                        </span>
                                    </div>

                                    <div className={styles.rememberForgot}>
                                        <div className={styles.rememberMe}>
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>

                                        <div className={styles.forgot}>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <input type="submit" className={styles.inputSubmit} value="Login" />
                                    </div>
                                </form>

                                <div className={styles.signupLink}>
                                    <span>Don&apos;t have an account? <button onClick={toggleModal}>Sign Up</button></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalOverlay} onClick={toggleModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h4 className="text-light">Sign Up</h4>
                            <button onClick={toggleModal}>&times;</button>
                        </div>
                        <div className={styles.modalBody}>
                            <form action="">
                                <div className={styles.mb}>
                                    <label htmlFor="name" className="form-label text-light">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                </div>
                                <div className={styles.mb}>
                                    <label htmlFor="username" className="form-label text-light">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                </div>
                                <div className={styles.mb}>
                                    <label htmlFor="email" className="form-label text-light">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className={styles.mb}>
                                    <label htmlFor="password" className="form-label text-light">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                                </div>
                                <div className={styles.mb}>
                                    <label htmlFor="phone" className="form-label text-light">Phone no</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone no" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                                </div>
                            </form>
                        </div>
                        <div className={styles.modalFooter}>
                            <button onClick={toggleModal}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
