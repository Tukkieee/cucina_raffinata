import React, { useState } from "react";
import lasagna from "./../images/Clip path group2.png";
import risotto from "./../images/Clip path group3.png";
import pizza from "./../images/Mask Group 6.png";
import ziti from "./../images/Clip path group4.png";
import spaghetti from "./../images/Clip path group.png";
import tortelloni from "./../images/Mask Group 2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const MenuImages = () => {
    AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Easing type
        once: true, // Only trigger the animation once
      });
    const images = [
        { id: '1', imageName: lasagna, name: 'Lasagna', price: 34.99 },
        { id: '2', imageName: risotto, name: 'Risotto Alla Milanese', price: 19.99 },
        { id: '3', imageName: pizza, name: 'Pizza', price: 24.99 },
        { id: '4', imageName: ziti, name: 'Ziti', price: 14.99 },
        { id: '5', imageName: spaghetti, name: 'Spaghetti', price: 19.99 },
        { id: '6', imageName: tortelloni, name: 'Tortelloni', price: 9.99 },

    ];
    const [Images, setImages] = useState(images);
    return (
        <>
            {Images.map((image) => <div key={image.id} className="box" data-aos="zoom-in">
                <h5>{image.name}</h5>
                <div className="box-1">
                    <img src={image.imageName} alt={image.name}></img>
                </div>
                <h6>&euro;{image.price}</h6>
            </div>)}
        </>
    )
}