import { Nav } from "../Components/nav";
import logo from "./../images/Logo.png";
import { ContactForm } from "../Components/contactForm";
import { useState, useEffect } from "react";
import { HamburgerMenu } from "../Components/mobileView";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"

export const Contact = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mediaQuery = window.matchMedia('(min-width: 769px)');
            setIsWideScreen(mediaQuery.matches);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="contact-page">
                <div className="contact-hero">
                    {isWideScreen ? <Nav logo={logo} bg="#fff" color="#000" styleClass="contact-nav" /> : <HamburgerMenu logo={logo} bg="#fff" color="#000" />}
                    <div className="contact-details">
                        <div>
                            <div className="visit">
                                <h1>Pay A Visit</h1>
                                <div>
                                    <div className="address">
                                        <h4>Address</h4>
                                        <p>3rd Queen Elizabeth Street,</p>
                                        <p>London, England.</p>
                                    </div>
                                    <div className="address">
                                        <h4>Open Hours</h4>
                                        <p>Mon - Sat: 12pm - 10pm</p>
                                        <p>Sun: 2pm - 10pm</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="address">
                                        <h4>Phone</h4>
                                        <p>+44 1749 113567</p>
                                    </div>
                                    <div className="address">
                                        <h4>Mail</h4>
                                        <p>+info@cucinaraffinata.com</p>     
                                    </div>
                                </div>
                            </div>
                            <div className="socials">
                                <div className="social-icon"><a href="/"><FaFacebook /></a></div>
                                <div className="social-icon"><FaTwitter /></div>
                                <div className="social-icon"><FaYoutube /></div>
                                <div className="social-icon"><FaLinkedin /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservation">
                    <div className="reservation-spacing">
                        <div className="booking">
                            <div className="booking-title">
                                <h1>Questions or Comments?</h1>
                            </div>
                            <div className="booking-form">
                                <div className="booking-form-spacing">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer contact-footer">
                    <p>&copy; Cucina Raffinata 2024</p>
                </div>
            </div>
        </>
    )
}