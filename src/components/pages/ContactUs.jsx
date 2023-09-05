import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ContactUs = () => {

    const form = useRef();

    const submitClick = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zc9zskf', 'template_yjz1o8h', form.current, 'JFh8LG7oyrOhORayk')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success("Message Send Sussessfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div>
                {/* contact banner */}
                <section className="w3l-about-breadcrumb text-center">
                    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                        <div className="container py-lg-5 mt-5">
                            <div className="banner-info-grid mt-5">
                                <h2 className="w3l-title-breadcrumb">Contact Us</h2>
                            </div>
                            <ul className="breadcrumbs-custom-path">
                                <li><Link to="/">Home</Link></li>
                                <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true" />Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* //contact banner */}
                {/* contact */}
                <section className="w3l-contacts-12">
                    <div className="contact-top pt-5">
                        <div className="container py-lg-5 py-2">
                            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                                <h3 className="w3l-title-main">Want to get in touch?</h3>
                            </div>
                            <div className="d-grid cont-main-top">
                                {/* contact form */}
                                <div className="contacts12-main">
                                    <form className="main-input" ref={form} onSubmit={submitClick}>
                                        <div className="top-inputs d-grid">
                                            <input type="text" placeholder="Name" name="to_name" id="w3lName" required />
                                            <input type="email" name="from_name" placeholder="Email" id="w3lSender" required />
                                        </div>
                                        <input type="number" placeholder="Phone Number" name="phone_number" id="w3lName" required />
                                        <textarea placeholder="Message" name="message" id="w3lMessage" required defaultValue={""} />
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary btn-style" >Submit Now</button>
                                            <ToastContainer />
                                        </div>
                                    </form>
                                </div>
                                {/* //contact form */}
                            </div>
                        </div>
                        {/* map */}
                        <div className="map mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28030.57247039879!2d77.25948383390393!3d28.575120582922303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce391b053aeef%3A0x3c66da6bc8fccdde!2sNew%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1693935359412!5m2!1sen!2sin" frameBorder={0} style={{ border: 0 }} allowFullScreen ></iframe>
                        </div>
                        {/* //map */}
                    </div>
                </section>
                {/* //contact */}
            </div>

        </>
    )
}

export default ContactUs