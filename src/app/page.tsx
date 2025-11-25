import Link from 'next/link';
import styles from './page.module.scss';
import HomeCarousel from './components/HomeCarousel';
import TestimonialCarousel from './components/TestimonialCarousel';
import ArtGalaxySection from './components/ArtGalaxySection';
import InkedVillaSection from './components/InkedVillaSection';
import SoundSpaceSection from './components/SoundSpaceSection';
import AnimatedText from './components/AnimatedText';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline className={styles.videoBackground}>
          <source src="/img/marsvid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
        <div className="container">
          <div style={{ minHeight: '100vh' }}>
            <div>
              <div className={styles.glassContainer}>
                <div className="row">
                  <div>
                    <div className={styles.welcomeText}>
                      <p data-aos="fade-down" data-aos-delay="0">WELCOME TO</p>
                      <AnimatedText
                        text="MARSYNERGY"
                        tag="h1"
                        animation="fade-up"
                        baseDelay={200}
                        delayStep={100}
                      />
                      <p data-aos="fade-up" data-aos-delay="1000">Here, we celebrate the vibrant world of artistic creativity by showcasing a diverse range of works from talented creators across various disciplines. Our platform is dedicated to providing a space where artists can share their innovative projects and where audiences can discover and apperciate unique and inspiring content.</p>
                      <div data-aos="fade-up" data-aos-delay="1200">
                        <Link href="/aboutus" className={styles.readMoreBtn}>Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <HomeCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtGalaxySection isLandingPage={true} />
      <InkedVillaSection isLandingPage={true} />
      <SoundSpaceSection isLandingPage={true} />

      <section className={styles.contactSection} id="contact">
        <div className="container">
          <div>
            <div>
              <div className={styles.contactForm}>
                <h2>Contact Us!</h2>
                <form>
                  <input type="text" placeholder="Enter name" name="name" />
                  <input type="email" placeholder="Enter email" name="email" />
                  <input type="tel" placeholder="Enter phone no" name="phone no" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                  <textarea name="message" placeholder="type message here..." rows={5}></textarea>
                  <button type="submit">SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.testimonialRow}>
            <div>
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
