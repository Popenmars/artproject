import Image from 'next/image';
import styles from './page.module.scss';

export default function SoundSpace() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className="container">
                    <div style={{ minHeight: '100vh' }}>
                        <div>
                            <div className={styles.glassContainer}>
                                <div className={styles.gaRow}>
                                    <div data-aos="fade-right" data-aos-delay="200" className={styles.gaImg}>
                                        <Image src="/img/music space.jpg" alt="Sound Space" width={500} height={500} />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <h1 style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold', marginBottom: '1.5rem' }}>SOUND SPACE</h1>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Sound Space is designed to evoke emotion, create atmosphere, and transport you to different realms. Our music display features a wide array of genres, from classical masterpieces to contemporary hits, showcasing the talents of both renowned artists and emerging voices. In addition to traditional music and sound, we also highlight innovative projects that push the boundaries of auditory art.</p>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Through Sound space, music and sound is more than just an auditory experience, it&apos;s an invitation to engage with the rhythm of life and the harmony of creativity. Join us in exploring the profound impact of sound and music on our emotions, thoughts, and connections.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Discover Your Sound.</p>
                    <div className={styles.filterButtons}>
                        <button>Beats</button>
                        <button>Genres</button>
                        <button>DJ Mix</button>
                        <button>Merch</button>
                        <button>Tours</button>
                        <button>Motivations</button>
                    </div>

                    <p className={styles.sectionTitle}>Top Nigerian Musicians.</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Artist" />
                    </div>

                    <div className={styles.rowTitle}>
                        {[
                            { img: '/img/artist1.jpg', name: 'Burna Boy', album: 'I Told Them', cover: '/img/cover1.jpeg' },
                            { img: '/img/artist2.webp', name: 'Wizkid', album: 'Sound Man 2', cover: '/img/cover2.jpeg' },
                            { img: '/img/artist3.jpg', name: 'Davido', album: 'Timeless', cover: '/img/cover3.jpeg' },
                            { img: '/img/artist4.webp', name: 'Rema', album: 'HeIs', cover: '/img/cover4.jpeg' },
                            { img: '/img/artist5.webp', name: 'Tekno', album: 'The More the Better', cover: '/img/cover5.jpeg' },
                            { img: '/img/artist6.webp', name: 'Tems', album: 'Born in the Wild', cover: '/img/cover6.jpeg' },
                            { img: '/img/artist7.jpeg', name: 'Arya Star', album: 'When I Turn 21', cover: '/img/cover7.jpeg' },
                            { img: '/img/artist8.jpeg', name: 'Tiwa Savage', album: 'Water & Garri', cover: '/img/cover8.jpeg' },
                            { img: '/img/artist9.jpeg', name: 'Omah Lay', album: 'Boy Alone', cover: '/img/cover9.jpeg' },
                            { img: '/img/artist10.jpeg', name: 'Asake', album: 'Lungu Boy', cover: '/img/cover10.jpeg' },
                            { img: '/img/artist11.jpeg', name: 'Fire Boy', album: 'Adedamola', cover: '/img/cover11.jpeg' },
                            { img: '/img/artist12.jpeg', name: 'Falz', album: 'Before the Feast', cover: '/img/cover12.jpeg' },
                        ].map((item, index) => (
                            <div key={index} >
                                <div className={styles.itemCard} data-aos="fade-up">
                                    <Image src={item.img} alt={item.name} width={200} height={200} />
                                    <h4>{item.name}</h4>
                                    <div className={styles.albumInfo}>
                                        <Image src={item.cover} alt={item.album} width={50} height={50} />
                                        <h5>{item.album}</h5>
                                    </div>
                                    <button>Listen Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner}>
                <Image src="/img/cover.png" alt="Banner" width={1920} height={200} className="img-fluid" />
            </div>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Top Global Musicians.</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Artist" />
                    </div>

                    <div className={styles.rowTitle}>
                        {[
                            { img: '/img/artist13.jpeg', name: 'Drake', album: 'Nothing was the Same', cover: '/img/cover13.webp' },
                            { img: '/img/artist14.jpeg', name: 'Eminem', album: 'Death of Slim Shady', cover: '/img/cover14.jpeg' },
                            { img: '/img/artist15.jpeg', name: 'Rihanna', album: 'Loud', cover: '/img/cover15.jpeg' },
                            { img: '/img/artist16.jpeg', name: 'Beyonce', album: 'Cowboy Carter', cover: '/img/cover16.jpeg' },
                            { img: '/img/artist17.jpeg', name: 'Labrinth', album: 'Euphoria', cover: '/img/cover17.jpeg' },
                            { img: '/img/artist18.webp', name: 'Khalid', album: 'Free Spirit', cover: '/img/cover18.jpeg' },
                            { img: '/img/artist19.jpeg', name: 'DJ Khaled', album: 'God Did', cover: '/img/cover19.jpeg' },
                            { img: '/img/artist20.jpeg', name: 'Billie Eilish', album: 'Hit me Hard and Soft', cover: '/img/cover20.jpeg' },
                            { img: '/img/artist21.jpeg', name: 'Justin Bieber', album: 'Justice', cover: '/img/cover21.jpeg' },
                            { img: '/img/artist22.jpeg', name: 'Lil Wayne', album: 'Welcome 2 Collegrove', cover: '/img/cover22.jpeg' },
                            { img: '/img/artist23.jpeg', name: 'Nicki Minaj', album: 'Pink Friday 2', cover: '/img/cover23.jpeg' },
                            { img: '/img/artist24.jpeg', name: 'Roddy Rich', album: 'Feed Tha Streets III', cover: '/img/cover24.jpeg' },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className={styles.itemCard} data-aos="fade-up">
                                    <Image src={item.img} alt={item.name} width={200} height={200} />
                                    <h4>{item.name}</h4>
                                    <div className={styles.albumInfo}>
                                        <Image src={item.cover} alt={item.album} width={50} height={50} />
                                        <h5>{item.album}</h5>
                                    </div>
                                    <button>Listen Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner}>
                <Image src="/img/coverr.png" alt="Banner" width={1920} height={200} className="img-fluid" />
            </div>
        </>
    );
}
