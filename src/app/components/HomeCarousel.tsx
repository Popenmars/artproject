"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HomeCarousel.module.scss';

const slides = [
    { src: '/img/marslogo1.png', alt: 'Mars Logo' },
    { src: '/img/art gallery.jpg', alt: 'Art Gallery' },
    { src: '/img/writerspace.jpg', alt: 'Writer Space' },
    { src: '/img/music space.jpg', alt: 'Music Space' },
];

export default function HomeCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carousel}>
            <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <Image src={slide.src} alt={slide.alt} width={300} height={300} className={styles.image} />
                    </div>
                ))}
            </div>
            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
