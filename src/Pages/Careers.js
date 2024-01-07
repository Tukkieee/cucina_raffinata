import { Nav } from "../Components/nav";
import logo_black from "./../images/Logo‎1.png";
import waiter from "./../images/dahiana-waszaj-XQWfro4LrVs-unsplash.png"
import { Questions } from "../Components/questions";
import { Footer } from "./../Components/footer"
import { useState, useEffect } from "react";
import { HamburgerMenu } from "../Components/mobileView";


export const Careers = () => {
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
            <div className="about-page">
                <div className="about-hero">
                    {isWideScreen ? <Nav logo={logo_black} styleClass="nav-link"/> : <HamburgerMenu logo={logo_black} />}
                    <div className="hero-spacing career-hero">
                        <div className="hero-sp">
                            <div className="hero-contentA">
                                <div className="heaven-kitchen">
                                    <div>
                                        <h1>Build Your</h1>
                                        <h1>Career Here</h1>
                                        <p>We always welcome new members to the Cusine Raffinata family. Our job board is updated regularly so feel free to check it out for openings that might suit you.</p>
                                    </div>
                                </div>
                                <div className="heaven-kitchen-img img-hide">
                                    <div className='kitchen-img waiter-img'>
                                        <img src={waiter} alt="food platter"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heaven-kitchen-img img-show">
                        <div className='kitchen-img waiter-img'>
                            <img src={waiter} alt="food platter"></img>
                        </div>
                    </div>
                </div>
                <div className="reservation questions">
                    <div className="reservation-spacing ">
                        <div className="booking quest">
                            <div className="booking-title">
                                <h1>Jobs &</h1>
                                <h1>Opportunities</h1>
                            </div>
                            <div className="booking-form questionnaire">
                                <div className="booking-form-spacing questionnaire-spacing">
                                    <Questions q1="Restuarant Manager" h1="4+ years experience" q2="Junior Chef" h2="2+ years experience" q3="Marketing Intern" h3="No Experience" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}