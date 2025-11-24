"use client"
import Image from 'next/image';
import styles from './ProductSection.module.scss';
import { useRouter } from 'next/navigation';

export default function ArtGalaxySection() {
    const router = useRouter()
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.imageWrapper} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <Image src="/img/art gallery.jpg" alt="Art Galaxy" width={600} height={400} />
                    </div>
                    <div className={styles.content} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h2>Art Galaxy</h2>
                        <p>At Mars Synergy, we believe that art is not just a form of expression but a powerful medium that connects us all. Our Art Galaxy display showcases a curated selection of contemporary and classic artworks, reflecting the diverse talents and perspectives of artists from around the world.</p>
                        <p>Art Galaxy serves as a vibrant platform for artistic innovation and cultural dialogue. We are committed to fostering an environment where creativity thrives and where visitors can experience the transformative power of art.</p>
                        <button onClick={() => router.push("/artgalaxy")} className={styles.btn}>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
