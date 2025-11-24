"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TestimonialCarousel.module.scss';

const testimonials = [
    {
        img: '/img/pope2.jpg',
        name: 'Pope Martin',
        role: 'Artist',
        text: '"I wanted to take a moment to share my thoughts on your recent showcase of artworks, songs, and writing. Overall, I was impressed with the diversity and creativity on display."'
    },
    {
        img: '/img/teach4.jpg',
        name: 'Maduabuchi Chimuanya',
        role: 'Customer',
        text: '"The collection of artworks was visually captivating and diverse. I particularly enjoyed the use of color and texture in the Art Galaxy. The presentation was well-done, although I felt that a few pieces could have benefited from better lighting to enhance their details."'
    },
    {
        img: '/img/teach.png',
        name: 'Solomon Martin',
        role: 'Customer',
        text: '"The music was a highlight of the showcase. The composition and lyrics of Bit of you by loner 3ga was especially moving, and the performance was professional. However, there were a few moments where the audio clarity could be improved to ensure that every nuance of the music is appreciated."'
    },
    {
        img: '/img/teach2.png',
        name: 'Vanessa Vanny',
        role: 'Customer',
        text: '"The written pieces were engaging and thought-provoking. Inked Villa stood out for its originality and depth. The presentation was clear, though incorporating a more interactive format might make the experience even more immersive."'
    },
    {
        img: '/img/IMG-20240609-WA0000.jpg',
        name: 'Paper_heart Jay',
        role: 'Artist',
        text: '"Consider exploring more diverse formats for presenting the artworks, such as interactive displays. Additionally, ensuring high-quality audio for all songs would enhance the overall experience."'
    }
];

export default function TestimonialCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carousel}>
            <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((item, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.content}>
                            <div className={styles.profile}>
                                <Image src={item.img} alt={item.name} width={100} height={100} className={styles.avatar} />
                                <div className={styles.info}>
                                    <h5 className={styles.name}>{item.name}</h5>
                                    <p className={styles.role}>{item.role}</p>
                                </div>
                            </div>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
