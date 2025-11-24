import Image from 'next/image';
import styles from '../page.module.scss';
import ArtGalaxySection from '../components/ArtGalaxySection';
import InkedVillaSection from '../components/InkedVillaSection';
import SoundSpaceSection from '../components/SoundSpaceSection';

export default function AboutUs() {
    return (
        <>
            <section className={styles.aboutHero}>
                <div className={styles.overlay}></div>
                <div className="container">
                    <div style={{ minHeight: '100vh' }}>
                        <div>
                            <div className={styles.glassContainer}>
                                <div className={styles.aboutRow}>
                                    <div data-aos="fade-right" data-aos-delay="200" className={styles.aboutImage}>
                                        <Image src="/img/marslogo1.png" alt="Mars Logo" width={500} height={500} />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <h1 style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold', marginBottom: '1.5rem' }}>About Us...</h1>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Welcome to Marsynergy! We are a vibrant platform dedicated to showcasing the diverse expressions of creativity through art, music, and literature. Our mission is to connect artists and audiences, celebrating the beauty of human imagination in all its forms. Whether you’re an artist looking to share your work or a lover of art seeking inspiration, Marsynergy is your space to explore, enjoy, and engage with exceptional talents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ArtGalaxySection />
            <InkedVillaSection />
            <SoundSpaceSection />
        </>
    );
}
