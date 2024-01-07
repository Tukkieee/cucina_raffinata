import React, { useState, useEffect } from "react";
export const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


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
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        }
        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            setIsLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setIsSubmitted(true);
                alert("Message has been sent!")
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
                <div className="line1 line-sp">
                    <input type="email" name="email" value={formData.email}
                        onChange={handleChange}></input>
                    <h5>Email</h5>
                    {errors.email && <h6>{errors.email}</h6>}
                </div>
                <div className="line1">
                    <input type="text" name="message" value={formData.message}
                        onChange={handleChange}></input>
                    <h5>Message</h5>
                    {errors.message && <h6>{errors.message}</h6>}
                </div>
                <div >
                    <button className="btn" disabled={isSubmitted} style={{ backgroundColor: isSubmitted ? 'green' : 'black' }}>
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : isSubmitted ? (
                            <h5>SENT</h5>
                        ) : (
                            <h5>SEND MESSAGE</h5>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}