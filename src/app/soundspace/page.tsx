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
                            { img: '/img/artist1.jpg', name: 'Burna Boy', album: 'I Told Them', cover: '/img/cover1.jfif' },
                            { img: '/img/artist2.jfif', name: 'Wizkid', album: 'Sound Man 2', cover: '/img/cover2.jfif' },
                            { img: '/img/artist3.jfif', name: 'Davido', album: 'Timeless', cover: '/img/cover3.jfif' },
                            { img: '/img/artist4.jfif', name: 'Rema', album: 'HeIs', cover: '/img/cover4.jfif' },
                            { img: '/img/artist5.jfif', name: 'Tekno', album: 'The More the Better', cover: '/img/cover5.jfif' },
                            { img: '/img/artist6.jfif', name: 'Tems', album: 'Born in the Wild', cover: '/img/cover6.jfif' },
                            { img: '/img/artist7.jfif', name: 'Arya Star', album: 'When I Turn 21', cover: '/img/cover7.jfif' },
                            { img: '/img/artist8.jfif', name: 'Tiwa Savage', album: 'Water & Garri', cover: '/img/cover8.jfif' },
                            { img: '/img/artist9.jfif', name: 'Omah Lay', album: 'Boy Alone', cover: '/img/cover9.jfif' },
                            { img: '/img/artist10.jfif', name: 'Asake', album: 'Lungu Boy', cover: '/img/cover10.jfif' },
                            { img: '/img/artist11.jfif', name: 'Fire Boy', album: 'Adedamola', cover: '/img/cover11.jfif' },
                            { img: '/img/artist12.jfif', name: 'Falz', album: 'Before the Feast', cover: '/img/cover12.jfif' },
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
                            { img: '/img/artist13.jfif', name: 'Drake', album: 'Nothing was the Same', cover: '/img/cover13.webp' },
                            { img: '/img/artist14.jfif', name: 'Eminem', album: 'Death of Slim Shady', cover: '/img/cover14.jfif' },
                            { img: '/img/artist15.jfif', name: 'Rihanna', album: 'Loud', cover: '/img/cover15.jfif' },
                            { img: '/img/artist16.jfif', name: 'Beyonce', album: 'Cowboy Carter', cover: '/img/cover16.jfif' },
                            { img: '/img/artist17.jfif', name: 'Labrinth', album: 'Euphoria', cover: '/img/cover17.jfif' },
                            { img: '/img/artist18.webp', name: 'Khalid', album: 'Free Spirit', cover: '/img/cover18.jfif' },
                            { img: '/img/artist19.jfif', name: 'DJ Khaled', album: 'God Did', cover: '/img/cover19.jfif' },
                            { img: '/img/artist20.jfif', name: 'Billie Eilish', album: 'Hit me Hard and Soft', cover: '/img/cover20.jfif' },
                            { img: '/img/artist21.jfif', name: 'Justin Bieber', album: 'Justice', cover: '/img/cover21.jfif' },
                            { img: '/img/artist22.jfif', name: 'Lil Wayne', album: 'Welcome 2 Collegrove', cover: '/img/cover22.jfif' },
                            { img: '/img/artist23.jfif', name: 'Nicki Minaj', album: 'Pink Friday 2', cover: '/img/cover23.jfif' },
                            { img: '/img/artist24.jfif', name: 'Roddy Rich', album: 'Feed Tha Streets III', cover: '/img/cover24.jfif' },
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
