import Image from 'next/image';
import styles from './page.module.scss';

export default function InkedVilla() {
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
                                        <Image src="/img/writerspace.jpg" alt="Inked Villa" width={500} height={500} />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <h1 style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold', marginBottom: '1.5rem' }}>INKED VILLA</h1>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Inked Villa collection of stories features a diverse range of genres and voices, each weaving unique tales that captivate and inspire. Inked Villa poetry collection with its ability to evoke deep emotions and paint vivid imagery with just a few words, holds a special place in our display. Inked Villa article collection provides thought-provoking insights on a variety of topics, from cultural trends to technological advancements.</p>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Through Inked Villa, Marssynergy goal is to create a dynamic and inclusive platform where stories, poems, and articles come together to inspire and connect. We invite you to explore, reflect, and immerse yourself in the written word as it continues to shape and enrich our world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Discover Your Ink.</p>
                    <div className={styles.filterButtons}>
                        <button>Comics</button>
                        <button>Novels</button>
                        <button>Poems</button>
                        <button>Story-Dramas</button>
                        <button>Articles</button>
                        <button>Biography</button>
                    </div>

                    <p className={styles.sectionTitle}>New Arrivals.</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Books" />
                    </div>

                    <div className={styles.rowTitle}>
                        {[
                            { img: '/img/book.jpg', title: 'Happiness Killers', price: "₦ 4,000" },
                            { img: '/img/book13.png', title: 'Nearly All Men in Lagos...', price: "₦ 4,500" },
                            { img: '/img/book2.png', title: 'Saving Mungo Park', price: "₦ 3,000" },
                            { img: '/img/book3.png', title: 'Harmattan by Ivan Srsen', price: "₦ 2,000" },
                            { img: '/img/book4.png', title: 'De-Nigerianization', price: "₦ 5,000" },
                            { img: '/img/book5.png', title: 'Pickled Moments', price: "₦ 1,000" },
                            { img: '/img/book6.png', title: 'Ivory Night', price: "₦ 5,000" },
                            { img: '/img/book7.png', title: 'And It came to Pass', price: "₦ 2,000" },
                            { img: '/img/book8.png', title: 'Unleash by Gbadamosi', price: "₦ 1,500" },
                            { img: '/img/book9.png', title: 'Unleash by Foluso', price: "₦ 5,000" },
                            { img: '/img/book10.png', title: 'A Trip To Kano', price: "₦ 3,000" },
                            { img: '/img/book11.png', title: 'Entangled by Oluwakemi', price: "₦ 3,500" },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className={styles.itemCard} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <Image src={item.img} alt={item.title} width={200} height={300} />
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner}>
                <Image src="/img/book12.jpeg" alt="Banner" width={1920} height={200} />
            </div>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Best Selling Books.</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Books" />
                    </div>

                    <div className={styles.rowTitle}>
                        {[
                            { img: '/img/book14.jpg', title: 'This Lie Will Kill You', price: "₦ 5,000" },
                            { img: '/img/book1.png', title: 'The Power of Du’a', price: "₦ 3,000" },
                            { img: '/img/book15.jpg', title: 'The Chanel Style Principle', price: "₦ 4,000" },
                            { img: '/img/book16.png', title: 'Haaland: The incredible', price: "₦ 5,000" },
                            { img: '/img/book17.png', title: 'An Ordinary Wonder', price: "₦ 1,500" },
                            { img: '/img/book18.png', title: 'The Escapades of...', price: "₦ 2,000" },
                            { img: '/img/book19.jpg', title: 'The 5 Reset', price: "₦ 5,000" },
                            { img: '/img/book20.png', title: 'Vantage', price: "₦ 2,000" },
                            { img: '/img/book21.png', title: 'The Secret Lives', price: "₦ 1,000" },
                            { img: '/img/book22.jpg', title: 'Small Business, Big...', price: "₦ 5,000" },
                            { img: '/img/book23.png', title: 'A Spell of good things', price: "₦ 5,000" },
                            { img: '/img/book25.gif', title: 'Stay With Me', price: "₦ 3,000" },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className={styles.itemCard} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <Image src={item.img} alt={item.title} width={200} height={300} />
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner}>
                <Image src="/img/book12.jpeg" alt="Banner" width={1920} height={200} />
            </div>
        </>
    );
}
