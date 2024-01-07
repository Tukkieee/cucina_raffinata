import { Nav } from "../Components/nav";
import logo_black from "./../images/Logo‎1.png";
import food_platter from "./../images/platter-2009590_1920.png"
import pizza from "./../images/pizza-5179939.png"
import spag from "./../images/spaghetti-2931846.png"
import meat from "./../images/pexels-pixabay-53148.png"
import { Questions } from "../Components/questions";
import { Footer } from "./../Components/footer"
import { useState, useEffect } from "react";
import { HamburgerMenu } from "../Components/mobileView";
import { useToggleContent } from "./../Components/useToggleContent"



export const About = () => {
    const [showContent3, toggleContent3] = useToggleContent(false);
    const [showContent1, toggleContent1] = useToggleContent(false);
    const [showContent2, toggleContent2] = useToggleContent(false);
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
                    <div className="hero-spacing">
                        <div className="hero-sp">
                            <div className="hero-contentA">
                                <div className="heaven-kitchen">
                                    <div>
                                        <h1>Heaven's </h1>
                                        <h1>kitchen</h1>
                                        <p>We have a world-class kitchen dedicated to carefully crafting meals for you. Our fantastic team is always hard at work to provide the best quality of food, because we wouldn’t have it any other way.</p>
                                    </div>
                                </div>
                                <div className="heaven-kitchen-img img-hide">
                                    <div className='kitchen-img'>
                                        <img src={food_platter} alt="food platter"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heaven-kitchen-img img-show">
                        <div className='kitchen-img'>
                            <img src={food_platter} alt="food platter"></img>
                        </div>
                    </div>
                    <div className="hero-spacing">
                        <div className="hero-sp">
                            <div className="hero-contentB">
                                <div>
                                    <h1>Heavenly Food</h1>
                                    <p>We serve food for the gods, and you are no exception. We offer the best food to our amazing customers, always sure to come back for one more bite. From pizzas to pastas, Cucina Raffinata is always sure to come up with the best sensation your tastebuds have ever experienced.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-gallery">
                    <div className="img1">
                        <img src={pizza} alt="pizza"></img>
                    </div>
                    <div className="img1 img2">
                        <img src={spag} alt="spaghetti"></img>
                    </div>
                    <div className="img1 img3">
                        <img src={meat} alt="meat"></img>
                    </div>
                </div>
                <div className="story hero-spacing">
                    <div className="hero-sp">
                        <div className="hero-contentA">
                            <div className="heaven-kitchen story-content">
                                <div>
                                    <h1>Our Story</h1>
                                    <p>Starting in 1897 as a small shop on a corner street in London, we have a deep history and have played a massive role in our surrounding community. Our staff has changed over the years (obviously), but we have always remained true to our values of providing the best Italian food from our corner shop in London.</p>
                                </div>
                            </div>
                            <div className="heaven-kitchen vision ">
                                <div >
                                    <h1>Our Vision</h1>
                                    <p>Our vision is to grow Cucina Raffinata into one of the world’s most recognisable Italian food restaurants. We aim to achieve this by expanding by opening more restaurants in the coming years. First in the United Kingdom, then the rest of Europe and North America.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reservation questions">
                    <div className="reservation-spacing ">
                        <div className="booking quest">
                            <div className="booking-title">
                                <h1>Frequently</h1>
                                <h1>Asked</h1>
                                <h1>Questions</h1>
                            </div>
                            <div className="booking-form questionnaire">
                                <div className="booking-form-spacing questionnaire-spacing">
                                    <Questions showContent1={showContent1} showContent2={showContent2} showContent3={showContent3} toggleContent1={toggleContent1} toggleContent2={toggleContent2} toggleContent3={toggleContent3} q1="Are you open on Sundays?" p1="We are open every day of the week from 10am - 10 pm. However, our Sunday hours are 2pm - 10 pm." q2="Do you have restaurants in the US?" p2="We currently do not have any branches open in the United States. But fear not, we have plans for opening in the US and other countries in the works." q3="How can I get a job at your restaurant?" p3="Kindly visit our Careers page for information on available opportunities or our Contact page to connect with us." />
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