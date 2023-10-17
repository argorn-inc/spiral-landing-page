"use client";
import { useState } from 'react';
import axios from 'axios';
import styles from "../styles/WaitListModal.module.css";
import { IconButton } from '@mui/material';
import { CheckCircle, Close } from '@mui/icons-material';

const initialState = {
    name: '',
    email: '',
    devotionalChoice: '',
}

export default function WaitListModal({ toggleWaitListModal, isModalOpen, deviceType, success, setSuccess }) {
    const [formData, setFormData] = useState(initialState);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        setIsLoading(true)
        setIsError(false)
        e.preventDefault();
        try {
            const response = await axios.post('https://spiral.onrender.com/waitlist', { ...formData, deviceType });

            if (response.status === 201) {
                setFormData(initialState);
                setSuccess(true);
                setIsError(false)
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccess(false);
            setIsError(true);
        }

        setIsLoading(false)
    };


    return (
        <div>
            <div className={`${styles.modalOverlay} ${isModalOpen && styles.show}    ${!isModalOpen && styles.slideOut} `} >
                <div className={styles.modalContent}>
                    {success ? <div className={styles.successModal}>
                        <div className={styles.successModal__top} >
                            <p><CheckCircle className={styles.checkIcon} /> Thank you!</p>
                            <span>Information successfully submitted.</span>
                        </div>
                        <div className={styles.successModal__btm}>
                            <button onClick={() => toggleWaitListModal(null)} type="button">Close</button>
                        </div>
                    </div> : (<form onSubmit={handleSubmit} className={styles.form}>

                        <IconButton onClick={() => toggleWaitListModal(null)} className={styles.closeModal__wrapper}>
                            <Close className={styles.closeIcon} />
                        </IconButton>
                        <br />
                        <div>
                            <p className={styles.title}>Woo-Hoo! You got here early</p>
                            <span className={styles.desc}>Be the first to know when we go live</span>
                        </div>
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="What's your name ?"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            name="devotionalChoice"
                            placeholder="Devotional Choice"
                            value={formData.devotionalChoice}
                            onChange={handleChange}
                            className={styles.input}
                        />

                        {isError && <p style={{ color: '#d15944' }}>Something went wrong</p>}
                        <button type="submit" className={styles.button}>
                            {isLoading ? 'Please wait...' : 'Submit'}
                        </button>
                    </form>)}
                </div>
            </div>
        </div>
    );
}
