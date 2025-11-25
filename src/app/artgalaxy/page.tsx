'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

const featuredCollections = [
    { img: '/img/IMG-20240920-WA0052.jpg', title: 'Red Dawn', type: 'Photography', price: '₦ 28,000' },
    { img: '/img/IMG-20240915-WA0008.jpg', title: 'Holy Captivation', type: 'Drawings', price: '₦ 150,000' },
    { img: '/img/IMG-20240915-WA0007~2.jpg', title: 'Feast of the First Men', type: 'Prints', price: '₦ 90,000' },
    { img: '/img/art3.jpg', title: 'Remnants', type: 'Abstract Art', price: '₦ 280,000' },
    { img: '/img/art1.jpg', title: 'For me Not', type: 'Paintings', price: '₦ 50,000' },
    { img: '/img/art7.jpeg', title: 'Abudance', type: 'Sculptures', price: '₦ 380,000' },
    { img: '/img/IMG-20240926-WA0049.jpg', title: 'War Machine', type: 'Photography', price: '₦ 28,000' },
    { img: '/img/IMG-20240812-WA0028.jpg', title: 'Paper_heart', type: 'Drawings', price: '₦ 78,000' },
];

const beyondCanvas = [
    { img: '/img/art6.jpg', title: 'Life in Green', type: 'Prints', price: '₦ 45,000' },
    { img: '/img/IMG-20240926-WA0050.jpg', title: 'Juicy Ken', type: 'Photography', price: '₦ 55,000' },
    { img: '/img/art4.jpg', title: 'Fierce to Friendly', type: 'Abstract Art', price: '₦ 290,000' },
    { img: '/img/IMG-20240926-WA0051.jpg', title: 'Volatile', type: 'Photography', price: '₦ 30,000' },
    { img: '/img/art8.jpeg', title: 'Set me Free', type: 'Sculptures', price: '₦ 850,000' },
    { img: '/img/art5.jpg', title: 'Unkown Love', type: 'Paintings', price: '₦ 240,000' },
    { img: '/img/art9.jpeg', title: 'Eden\'s View', type: 'Drawings', price: '₦ 238,000' },
    { img: '/img/art10.jpeg', title: 'Nature Expression', type: 'Prints', price: '₦ 178,000' },
];

export default function ArtGalaxy() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filterItems = (items: typeof featuredCollections) => {
        if (!activeFilter) return items;
        return items.filter(item => item.type === activeFilter);
    };

    const handleFilterClick = (filterType: string) => {
        setActiveFilter(activeFilter === filterType ? null : filterType);
    };

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
                                        <Image src="/img/art gallery.jpg" alt="Art Galaxy" width={500} height={500} style={{ borderRadius: '10px' }} />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <h1 style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold', marginBottom: '1.5rem' }}>ART GALAXY</h1>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Art Galaxy serves as a vibrant platform for artistic innovation and cultural dialogue. We are committed to fostering an environment where creativity thrives and where visitors can experience the transformative power of art. Whether you&apos;re an art enthusiast, a casual observer, or someone seeking inspiration, our exhibits are designed to engage, provoke thought, and celebrate the beauty and complexity of the human experience.</p>
                                        <p style={{ color: '#f0f0f0', lineHeight: '1.8', fontSize: '1.1rem' }}>Through Art Galaxy, Marssynergy aims to bridge the gap between artists and the community, offering a space where art can be appreciated, discussed, and enjoyed. Join us in exploring the dynamic world of art and discover the stories and visions that shape our shared cultural landscape.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Discover Your Art.</p>
                    <div className={styles.filterButtons}>
                        <button
                            className={activeFilter === 'Paintings' ? styles.active : ''}
                            onClick={() => handleFilterClick('Paintings')}
                        >
                            Paintings
                        </button>
                        <button
                            className={activeFilter === 'Sculptures' ? styles.active : ''}
                            onClick={() => handleFilterClick('Sculptures')}
                        >
                            Sculptures
                        </button>
                        <button
                            className={activeFilter === 'Drawings' ? styles.active : ''}
                            onClick={() => handleFilterClick('Drawings')}
                        >
                            Drawings
                        </button>
                        <button
                            className={activeFilter === 'Photography' ? styles.active : ''}
                            onClick={() => handleFilterClick('Photography')}
                        >
                            Photography
                        </button>
                        <button
                            className={activeFilter === 'Prints' ? styles.active : ''}
                            onClick={() => handleFilterClick('Prints')}
                        >
                            Prints
                        </button>
                        <button
                            className={activeFilter === 'Abstract Art' ? styles.active : ''}
                            onClick={() => handleFilterClick('Abstract Art')}
                        >
                            Abstract Art
                        </button>
                    </div>

                    <p className={styles.sectionTitle}>Featured Collections</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Artwork" />
                    </div>
                    <div className={styles.rowTitle}>
                        {filterItems(featuredCollections).map((item, index) => (
                            <div key={index}>
                                <div className={styles.itemCard} data-aos="zoom-out-up">
                                    <Image src={item.img} alt={item.title} width={300} height={300} />
                                    <h4>{item.title}</h4>
                                    <h5>{item.type}</h5>
                                    <p>{item.price}</p>
                                    <button>Perspective</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner}>
                <Image src="/img/coverra.png" alt="Banner" width={1920} height={200} />
            </div>

            <section>
                <div className="container">
                    <p className={styles.sectionTitle}>Beyond the Canvas</p>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search for your Favourite Artwork" />
                    </div>
                    <div className={styles.rowTitle}>
                        {filterItems(beyondCanvas).map((item, index) => (
                            <div key={index}>
                                <div className={styles.itemCard} data-aos="zoom-out-up">
                                    <Image src={item.img} alt={item.title} width={300} height={300} />
                                    <h4>{item.title}</h4>
                                    <h5>{item.type}</h5>
                                    <p>{item.price}</p>
                                    <button>Perspective</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.banner} >
                <Image src="/img/coverra1.png" alt="Banner" width={1920} height={200} />
            </div>
        </>
    );
}
