import React, { useState, useEffect } from "react";
import { FaRegCalendar, FaMinus, FaPlus } from "react-icons/fa6";
import { useNumberState } from "../Components/useNumberState";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export const Reservation = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);

    const [number1, increment1, decrement1] = useNumberState(null, 'No_of_seats');
    const [number2, increment2, decrement2] = useNumberState(null, 'order');

    const [formData, setFormData] = useState({
        name: '',
        No_of_seats: number1,
        date_time: selectedDateTime ? selectedDateTime.toLocaleString() : '',
        order: number2,
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleDateTimePicker = () => {
        setShowDateTimePicker(!showDateTimePicker);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (formData.date_time.trim() === '') {
            newErrors.date_time = 'Date and Time is required';
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }
    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
        setFormData({
            ...formData,
            date_time: date ? date.toLocaleString() : '',
        });
        toggleDateTimePicker();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            setIsLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setIsSubmitted(true);
                console.log('Form submitted:', formData);

                
            } catch (error) {
                console.error('Error occurred while submitting form:', error);
            } finally {
                setIsLoading(false);
                
                
            }
        } else {
            console.log('Form has errors');
        }
    };
    useEffect(() => {
        if (isSubmitted) {
            // Reload the page when isSubmitted is true
            window.location.reload();
        }
    }, [isSubmitted]);  

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="line1">
                    <input type="text" name="name" value={formData.name}
                        onChange={handleChange}></input>
                    <h5>Name</h5>
                    {errors.name && <h6>{errors.name}</h6>}
                </div>
                <div className="line2">
                    <div className="line3">
                        <input type="number" value={number1} readOnly />
                        <div className="btn-position">
                            <FaMinus className="btn1 btn2" onClick={decrement1} disabled={number1 === 1} />
                            <FaPlus className="btn1" onClick={increment1} />
                        </div>
                        <h5>No of Seats</h5>
                    </div>
                    <div className="date-input-container">

                        <div className="date-input Picker">
                            <input
                                type="text"
                                value={selectedDateTime ? selectedDateTime.toLocaleString() : ''}
                                onClick={toggleDateTimePicker}
                                readOnly
                            />
                            <div className="btn-position">
                                <FaRegCalendar onClick={toggleDateTimePicker} className="calendar-icon" />
                            </div>
                        </div>
                        {showDateTimePicker && (<div className="datePicker" >
                            <DatePicker
                                selected={selectedDateTime}
                                onChange={handleDateTimeChange}
                                onClickOutside={toggleDateTimePicker}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={5}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                inline
                                className="datePicker"
                            /></div>
                        )}
                        <h5>Date & Time</h5>
                        {errors.date_time && <h6>{errors.date_time}</h6>}
                    </div>
                </div>
                <div className="line1 line3" >
                    <input type="number" value={number2} readOnly />
                    <div className="btn-position" >
                        <FaMinus className="btn1 btn2" onClick={decrement2} disabled={number2 === 1} />
                        <FaPlus className="btn1" onClick={increment2} />
                    </div>
                    <h5>Order</h5>
                </div>
                <div >
                    <button className="btn" disabled={isSubmitted} style={{ backgroundColor: isSubmitted ? 'green' : 'black' }}>
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : isSubmitted ? (
                            <h5>BOOKING CONFIRMED &#10003;</h5>
                        ) : (
                            <h5>CONFIRM BOOKING</h5>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}