import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Contact.module.css";
import contactBanner from "../public/assets/banners/contactBanner.png";
import Banner from "../components/Banner/Banner";
import Title from "../components/Title/Title";

// Create Validation Schema with Yup
const ConnectSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Too Short!")
        .max(10, "Too Long!")
        .required("Required!"),
    mail: Yup.string().email("Invalid mail").required("Required!"),
    message: Yup.string().required("Required!"),
});
// Contact Component
const Contact = () => {
    // OnSubmit Function
    const handleSubmit = async (values, actions) => {
        // to control request time
        const controller = new AbortController();
        // get TimeOut by using TimeOutFunction
        const TimeOut = setTimeout(() => controller.abort(), 10000);
        await fetch("http://localhost:3000/api/contactDetails", {
            method: "POST",
            body: JSON.stringify({ values }),
            headers: {
                "Content-Type": "application/json",
            },
            signal: controller.signal,
        })
            .then((res) => {
                if (res.ok) {
                    // clearTimeout(TimeOut);
                    return res.json();
                }
                toast.error("Something went wrong!");
                throw new Error("Something went wrong");
            })
            .then((data) => {
                // setSubmitting False
                actions.setSubmitting(false);
                // Success Alert
                toast.success(
                    `Hello ${data.userName}, we will contact you as soon as possible.`
                );
                // Reset Form
                actions.resetForm({
                    values: "",
                });
            })
            .catch((err) => {
                if (controller.signal.reason.name === "AbortError") {
                    toast.error("Time out exceeded!");
                } else {
                    toast.error(`${err}`);
                }
            });
    };
    return (
        <div>
            {/* Toast Container */}
            <ToastContainer
                autoClose={3000}
                position="bottom-right"
                theme="dark"
                className="Toast-Container"
            />
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
                        {/* Let's Connect title and its subtitle */}
                        <div className={styles.connectWrapper}>
                            <h4 className={styles.connectWrapper_title}>Connect now </h4>
                            <p className={styles.connectWrapper_subTitle}>
                                Your email addres will not be published. Required fields are
                                marked *
                            </p>
                        </div>
                        {/* Connection Form with Formik */}
                        <Formik
                            initialValues={{ userName: "", mail: "", message: "" }}
                            validationSchema={ConnectSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    {/* Name & Mail */}
                                    <div className={styles.inputFields_Wrapper}>
                                        <div className={styles.mainInput_div}>
                                            <Field
                                                name="userName"
                                                placeholder="your name"
                                                className={styles.inputField}
                                            />
                                            {errors.userName && touched.userName ? (
                                                <div className={styles.errors}>{errors.userName}</div>
                                            ) : null}
                                        </div>
                                        <div className={styles.mainInput_div}>
                                            <Field
                                                name="mail"
                                                placeholder="your mail"
                                                type="email"
                                                className={styles.inputField}
                                            />
                                            {errors.mail && touched.mail ? (
                                                <div className={styles.errors}>{errors.mail}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <Field
                                        name="message"
                                        as="textarea"
                                        rows={10}
                                        placeholder="your message"
                                        className={styles.messageArea}
                                    />
                                    {errors.message && touched.message ? (
                                        <div className={styles.errors}>{errors.message}</div>
                                    ) : null}
                                    {/* Submit Button */}
                                    <button type="submit" className={styles.submitButton}>
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
