"use client"
import Image from 'next/image';
import styles from './ProductSection.module.scss';
import { useRouter } from 'next/navigation';

export default function InkedVillaSection() {
    const router = useRouter()
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={`${styles.row} ${styles.mobileReverse}`}>
                    <div className={styles.content} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h2>Inked Villa</h2>
                        <p>At Mars Synergy, we cherish the power of the written word in all its forms. Inked Villa displays artistic stories, poems, and articles in tribute to the rich tapestry of human creativity and intellect, offering a space where narratives, verses, and insightful articles come to life.</p>
                        <p>Inked Villa collection of stories features a diverse range of genres and voices, each weaving unique tales that captivate and inspire. We invite you to explore, reflect, and immerse yourself in the written word as it continues to shape and enrich our world.</p>
                        <button onClick={() => router.push("/inkedvilla")} className={styles.btn}>Read More</button>
                    </div>
                    <div className={styles.imageWrapper} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <Image src="/img/writerspace.jpg" alt="Inked Villa" width={600} height={400} />
                    </div>
                </div>
            </div>
        </section>
    );
}
