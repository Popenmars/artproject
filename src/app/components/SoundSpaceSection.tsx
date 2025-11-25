"use client"
import Image from 'next/image';
import styles from './ProductSection.module.scss';
import { useRouter } from 'next/navigation';

interface SoundSpaceSectionProps {
    isLandingPage?: boolean;
}

export default function SoundSpaceSection({ isLandingPage = false }: SoundSpaceSectionProps) {
    const router = useRouter()
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.imageWrapper} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <Image src="/img/music space.jpg" alt="Sound Space" width={600} height={400} />
                    </div>
                    <div className={styles.content} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h2>Sound Space</h2>
                        <p>At Mars Synergy, we believe that sound and music are fundamental to our experience of the world. Sound Space displays a dedicated, rich and diverse spectrum of auditory celebrating experiences that shape our lives.</p>
                        {!isLandingPage && (
                            <p>Sound Space is designed to evoke emotion, create atmosphere, and transport you to different realms. Our music display features a wide array of genres, from classical masterpieces to contemporary hits. Join us in exploring the profound impact of sound and music on our emotions, thoughts, and connections.</p>
                        )}
                        <button onClick={() => router.push("/soundspace")} className={styles.btn}>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
