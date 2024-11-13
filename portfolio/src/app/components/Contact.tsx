import Link from 'next/link';
import { IoArrowBackCircle, IoArrowBackOutline } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";




const Contact = () => {

    return (
        <div className=' w-screen flex  justify-center '>
            <div className='w-[85%] md:w-[90%] flex flex-col  items-center justify-center gap-7'>
                <Link href={"/"} className='text-blue-300 hidden sm:block text-4xl place-self-start mt-7 rounded-full transition-colors duration-300 hover:bg-gray-900  ' ><IoArrowBackOutline className='_text-Shadow' /></Link>
                <Link href={"/"} className='text-blue-300 sm:hidden block text-3xl place-self-start mt-7' ><IoArrowBackCircle className='_text-Shadow ' /></Link>
                <div className='flex  w-full gap-10 items-center'>
                    <div className='hidden  w-full h-full md:flex items-center'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22256.319050419388!2d68.27247474465166!3d25.436705819425608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c79a40825e55f%3A0xe188191583f72a4e!2sJamshoro%20City%2C%20Jamshoro%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1731161688633!5m2!1sen!2s" className="border-none md:h-80 lg:h-full w-full h-full rounded-xl"  ></iframe></div>

                    <div className='w-full flex flex-col gap-4 h-fit'>
                        <div className='flex flex-col items-center'>
                            <SiGoogleforms className='text-center text-4xl text-orange-200' />
                            <h1 className='text-center _text-Shadow  text-3xl '>CONTACT ME</h1>

                        </div>
                        <h3 className='text-sm text-slate-200 text-center mb-4'>Please fill this form</h3>
                        <form className='w-full flex flex-col gap-5 text-sm' action="https://formspree.io/f/mgveyvda" method="POST">
                            <label htmlFor="name" className='hidden'></label>
                            <input type="text" required className='w-full py-3 px-2 bg-stone-900 rounded-lg border border-blue-500 outline-none focus:outline focus:outline-blue-500' placeholder='Enter Your Name' id='name' name='name' />
                            <label htmlFor="gmail" className='hidden'></label>
                            <input type="email" required className='w-full py-3 px-2 bg-stone-900 rounded-lg border border-blue-500 outline-none focus:outline focus:outline-blue-500' placeholder='Enter Your Email' id='gmail' name='gmail' />
                            <label htmlFor="message" className='hidden'></label>
                            <textarea name="message" id="message" className='w-full py-3 px-2 bg-stone-900 rounded-lg border border-blue-500 outline-none focus:outline focus:outline-blue-500' rows={5} placeholder='Message' required></textarea>
                            <button className='bg-blue-600 py-2 w-full rounded-lg hover:bg-blue-700 active:scale-[.98] transition-all'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact