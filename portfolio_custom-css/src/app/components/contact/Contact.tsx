import Link from 'next/link';
import { IoArrowBackCircle, IoArrowBackOutline } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import styles from './page.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Link href="/" className={styles.backLinkDesktop}>
                    <IoArrowBackOutline className={styles._textShadow} />
                </Link>
                <Link href="/" className={styles.backLinkMobile}>
                    <IoArrowBackCircle className={styles._textShadow} />
                </Link>
                <div className={styles.contact}>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22256.319050419388!2d68.27247474465166!3d25.436705819425608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c79a40825e55f%3A0xe188191583f72a4e!2sJamshoro%20City%2C%20Jamshoro%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1731161688633!5m2!1sen!2s"
                            className={styles.mapIframe}
                        ></iframe>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.formTitleContainer}>
                            <SiGoogleforms className={styles.formIcon} />
                            <h1 className={styles.formTitle}>CONTACT ME</h1>
                        </div>
                        <h3 className={styles.formDescription}>Please fill this form</h3>
                        <form className={styles.form} action="https://formspree.io/f/mgveyvda" method="POST">
                            <label htmlFor="name" className="hidden"></label>
                            <input type="text" required className={styles.input} placeholder="Enter Your Name" id="name" name="name" />
                            <label htmlFor="gmail" className="hidden"></label>
                            <input type="email" required className={styles.input} placeholder="Enter Your Email" id="gmail" name="gmail" />
                            <label htmlFor="message" className="hidden"></label>
                            <textarea name="message" id="message" className={styles.textarea} rows={5} placeholder="Message" required></textarea>
                            <button className={styles.button}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
