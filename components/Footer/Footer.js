import styles from "./Footer.module.css";

// Footer Compoent
const Footer = () => {
    return (
        <div className={styles.footer}>
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
            <div>
                <h2>
                    Shoppingo
                </h2>
            </div>
            {/* Social Media Icons */}
            <div className={styles.socialMediaIcons}>
                <a href="#" className={styles.insta}>
                    <i className="fa fa-instagram" />
                </a>
                <a href="#" className={styles.insta}>
                    <i className="fa fa-facebook" />
                </a>
                <a href="#" className={styles.insta}>
                    <i className="fa fa-pinterest" />
                </a>
            </div>
        </div>
    );
};
export default Footer;
