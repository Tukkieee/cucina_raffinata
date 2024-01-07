import React, { useState, useEffect } from "react";
import { Reservation } from "../Components/reservation";
import { MenuImages } from "../Components/menuImages";
import { Footer } from "../Components/footer";
import { Hero } from "../Components/hero";
import { HeroSmallScreen } from "../Components/heroSm";

export const Home = () => {
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
            <div>
                {isWideScreen ? <Hero/> : <HeroSmallScreen/>}
            </div>
            <div className="menu">
                <div className="menu-spacing">
                    <div className="menu-title ">
                        <h1>Menu</h1>
                    </div>
                    <div className="menu-content">
                        <MenuImages />
                    </div>
                </div>
            </div>
            <div className="reservation" id="Reservation">
                <div className="reservation-spacing">
                    <div className="booking">
                        <div className="booking-title">
                            <h1>Bookings & Reservations</h1>
                        </div>
                        <div className="booking-form">
                            <div className="booking-form-spacing">
                                <Reservation />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}