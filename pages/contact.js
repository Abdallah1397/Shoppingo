import { useState } from "react";
import styles from "../styles/Contact.module.css";
import contactBanner from "../public/assets/banners/contactBanner.png";
import Banner from "../components/Banner/Banner";
import Title from "../components/Title/Title";

// Contact Component
const Contact = () => {
    // User Informations State
    const [userData, setUserData] = useState({
        name: "",
        mail: "",
        message: "",
    });
    // Alert State
    const [isEmptyName, setIsEmptyName] = useState(false);
    const [isEmptyMail, setIsEmptyMail] = useState(false);
    const [isEmptyMessage, setIsEmptyMessage] = useState(false);
    // Object State Destructuring
    const { name, mail, message } = userData;
    // Input Field Change
    const onFieldChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    };
    // onSubmit Function
    const onSubmit = (e) => {
        e.preventDefault();
        if (name === "" || mail === "" || message === "") {
            if (name === "") {
                setIsEmptyName(true);
            }
            if (mail === "") {
                setIsEmptyMail(true);
            }
            if (message === "") {
                setIsEmptyMessage(true);
            }
        } else {
            document.getElementById("connectionForm").reset();
        }
    };
    return (
        <div>
            {/* Contact Banner */}
            <Banner bannerBackground={contactBanner} />
            <div className="container">
                {/* Title */}
                <Title title="Contact US" />
                {/* Contact Wrapper Div */}
                <div className={styles.contactWrapper}>
                    {/* Contact Informations */}
                    <div className={styles.contactInformations}>
                        <h3 className={styles.contactInformations_mainTitle}>
                            Our Informations
                        </h3>
                        {/*HeadQuarters  */}
                        <h4 className={styles.contactInformations_subTitle}>
                            HeadQuarters
                        </h4>
                        <p className={styles.contactInformations_subTitleSpan}>
                            Cairo, Egypt
                        </p>
                        {/* PHONE */}
                        <h4 className={styles.contactInformations_subTitle}>PHONE</h4>
                        <p className={styles.contactInformations_subTitleSpan}>
                            123-456-7890
                        </p>
                        <h4 className={styles.contactInformations_subTitle}>SUPPORT</h4>
                        <p className={styles.contactInformations_subTitleSpan}>
                            support@shoppingo.com
                        </p>
                        <p className={styles.contactInformations_subTitleSpan}>
                            help@shoppingo.com
                        </p>
                    </div>
                    {/* Contact Form */}
                    <div className={styles.formWrapper}>
                        <form onSubmit={onSubmit} id="connectionForm">
                            <div className={styles.connectWrapper}>
                                <h4 className={styles.connectWrapper_title}>Let's Connect </h4>
                                <p className={styles.connectWrapper_subTitle}>
                                    Your email addres will not be published. Required fields are
                                    marked *
                                </p>
                            </div>
                            <div>
                                <div>
                                    <input
                                        id="name"
                                        className={styles.inputField}
                                        placeholder="your name"
                                        type="text"
                                        onChange={onFieldChange}
                                    />
                                    {isEmptyName ? <p>Your name is required!</p> : null}
                                </div>
                                <div>
                                    <input
                                        id="mail"
                                        className={styles.inputField}
                                        placeholder="your mail"
                                        type="email"
                                        onChange={onFieldChange}
                                    />
                                    {isEmptyMail ? <p>Your mail is required!</p> : null}
                                </div>
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    placeholder="your message"
                                    rows={10}
                                    className={styles.messageArea}
                                    onChange={onFieldChange}
                                />
                                {isEmptyMessage ? <p>Your message is required!</p> : null}
                            </div>
                            {/* Submit Button */}
                            <button type="submit" className={styles.submitButton}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
