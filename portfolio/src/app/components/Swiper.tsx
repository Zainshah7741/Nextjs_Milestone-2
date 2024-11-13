"use client"
import Image from 'next/image';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Sliding = () => {
    return (
        <div className=''>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='pb-10 '>
                    <div className='flex justify-center w-full items-center   mt-7 '>
                        <div className='w-60 bg-zinc-900 flex justify-center items-center py-5 flex-col rounded-lg'>
                            <div className='bg-zinc-950 w-[92%] px-2 py-5 rounded-xl'>
                                <Image src={'/project-1.png'} alt='' width={100} height={250} className='rounded-md h-32 m-auto'></Image>
                            </div>
                            <div className='bg-zinc-950 w-[92%] mt-3 rounded-xl p-3 flex flex-col items-center gap-1'>
                                <h1 className='_text-Shadow text-2xl font-medium font-serif'>Restoran</h1>
                                <p className='text-[8px]'>I designed a modern and responsive restaurant website using HTML and CSS. The layout includes a visually appealing &apos;book a table&apos; call-to-action and highlights the restaurant’s atmosphere with engaging visuals and an easy-to-navigate menu. This design adapts smoothly to different screen sizes, ensuring a great user experience on all devices.</p>
                            </div>
                            <Link href="https://html-css-project-pi.vercel.app/" target='_blank' className='bg-zinc-950 py-2 w-[92%] rounded-lg mt-3 text-xs text-center font-semibold'>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 '>
                    <div className='flex justify-center w-full items-center   mt-7 '>
                        <div className='w-60 bg-zinc-900 flex justify-center items-center py-5 flex-col rounded-lg'>
                            <div className='bg-zinc-950 w-[92%] px-2 py-5 rounded-xl'>
                                <Image src={'/project-3.png'} alt='' width={100} height={250} className='rounded-md h-32 m-auto'></Image>
                            </div>
                            <div className='bg-zinc-950 w-[92%] mt-3 rounded-xl p-3 flex flex-col items-center gap-1'>
                                <h1 className='_text-Shadow text-2xl'>RESUME</h1>
                                <p className='text-[8px]'>I am a self-motivated web developer with strong skills in front-end technologies. I built this resume from scratch using HTML for the structure and CSS for styling, demonstrating my ability to create clean, responsive, and visually appealing websites. My expertise includes designing user-friendly layouts, utilizing CSS for styling, and ensuring compatibility across various screen sizes and devices.</p>
                            </div>
                            <Link href="https://milestone-1-and-2-made-by-zain-shah.vercel.app/" target='_blank' className='bg-zinc-950 py-2 w-[92%] rounded-lg mt-3 text-xs text-center font-semibold'>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-10 '>
                    <div className='flex justify-center w-full items-center   mt-7 '>
                        <div className='w-60 bg-zinc-900 flex justify-center items-center py-5 flex-col rounded-lg'>
                            <div className='bg-zinc-950 w-[92%] px-2 py-5 rounded-xl'>
                                <Image src={'/project-2.png'} alt='' width={100} height={250} className='rounded-md h-32 m-auto'></Image>
                            </div>
                            <div className='bg-zinc-950 w-[92%] mt-3 rounded-xl p-3 flex flex-col items-center gap-1'>
                                <h1 className='_text-Shadow text-xl'>Dynamic Resume</h1>
                                <p className='text-[8px]'>I developed a dynamic resume builder using HTML, CSS, and TypeScript. This tool allows users to input their personal information, education, experience, and skills, generating a visually appealing resume layout. With a clean, organized structure and visually engaging design,This resume builder enables users to easily create a well-structured and polished resume.</p>
                            </div>
                            <Link href="https://hackathon-milestone-3-4-and-5-by-zainshah.vercel.app/" target='_blank' className='bg-zinc-950 py-2 w-[92%] rounded-lg mt-3 text-xs text-center font-semibold'>VIEW PROJECT</Link>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Sliding