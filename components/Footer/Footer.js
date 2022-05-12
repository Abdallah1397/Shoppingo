import styles from "./Footer.module.css";

// Footer Compoent
const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* Footer-Logo */}
            <div>
                <h2>Shoppingo</h2>
            </div>
            {/* Subscribe Header */}
            <div className={styles.subscribeHeader}>
                <h5>
                    Subscribe to our newsletter
                </h5>
                <p>
                    Get all the latest information on Events, Sales and Offers.
                </p>
            </div>
            {/* Subscribe */}
            <div className={styles.subscribe}>
                <input type="email" placeholder="Enter your mail" />
                <button>Subscribe</button>
            </div>
            <div className={styles.footerInformatians}>
                {/* Instructions */}
                <div>
                    <h4>Instructions</h4>
                    <p>Shipping & Returns</p>
                    <p>Store Policy</p>
                    <p>Payment Method</p>
                </div>
                {/* Contact */}
                <div>
                    <h4>Contact</h4>
                    <p>Tel: 123-456-7890</p>
                </div>
                {/* Social Media */}
                <div>
                    <h4> Social Media</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
            </div>
            {/* Social Media Icons */}
            <div className={styles.socialMediaIcons}>
                <a href="#" className={styles.insta}>
                    <i className="fa fa-instagram" />
                </a>
                <a href="#" className={styles.facebook}>
                    <i className="fa fa-facebook" />
                </a>
                <a href="#" className={styles.pinterest}>
                    <i className="fa fa-pinterest" />
                </a>
            </div>
        </div>
    );
};
export default Footer;
