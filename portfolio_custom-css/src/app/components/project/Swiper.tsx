"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import styles from './slider.module.css';

const Sliding = () => {
    return (
        <div className={styles.container}>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className={styles.slideContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image src={'/project-1.png'} alt='' width={100} height={250} className={styles.projectImage} />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={`_text-Shadow ${styles.projectTitle}`}>Restoran</h1>
                                <p className={styles.projectDescription}>I designed a modern and responsive restaurant website using HTML and CSS. The layout includes a visually appealing &apos;book a table&apos; call-to-action and highlights the restaurant’s atmosphere with engaging visuals and an easy-to-navigate menu. This design adapts smoothly to different screen sizes, ensuring a great user experience on all devices.</p>
                            </div>
                            <Link href="https://html-css-project-pi.vercel.app/" target='_blank' className={styles.projectLink}>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image src={'/project-3.png'} alt='' width={100} height={250} className={styles.projectImage} />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={`_text-Shadow ${styles.projectTitle}`}>RESUME</h1>
                                <p className={styles.projectDescription}>I am a self-motivated web developer with strong skills in front-end technologies. I built this resume from scratch using HTML for the structure and CSS for styling, demonstrating my ability to create clean, responsive, and visually appealing websites.</p>
                            </div>
                            <Link href="https://milestone-1-and-2-made-by-zain-shah.vercel.app" target='_blank' className={styles.projectLink}>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image src={'/project-2.png'} alt='' width={100} height={250} className={styles.projectImage} />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={`_text-Shadow ${styles.projectTitle}`}>Dynamic Resume</h1>
                                <p className={styles.projectDescription}>I developed a dynamic resume builder using HTML, CSS, and TypeScript. This tool allows users to input their personal information, education, experience, and skills, generating a visually appealing resume layout.</p>
                            </div>
                            <Link href="https://hackathon-milestone-3-4-and-5-by-zainshah.vercel.app" target='_blank' className={styles.projectLink}>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Sliding;
