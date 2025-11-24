'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

export default function Login() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={styles.body}>
            <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ''}`} id="container">
                <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className={styles.socialContainer}>
                            <a href="#" className="social"><FaFacebookF /></a>
                            <a href="#" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className={styles.socialContainer}>
                            <a href="#" className="social"><FaFacebookF /></a>
                            <a href="#" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles.ghost} id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={styles.ghost} id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
