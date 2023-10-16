'use client'
import React, { useRef } from 'react';
import styles from '../styles/Feature.module.css'
import { CheckCircle } from '@mui/icons-material'
import Image from 'next/image'
import { homeText } from '@/constant/text';

const Feature = () => {


    const featureSection = useRef(null);

    return (
        <div ref={featureSection} id='feature_section' className={styles.feature}>
            <div className={styles.featureTop__wrapper}>
                <div className={styles.featureTop}>
                    <p>{homeText.feature_title}</p>
                    <span>{homeText.featureTop_text}</span>
                </div>
            </div>
            <div className={styles.featureContent__container}>
                <div className={styles.featureCard__list}>
                    {homeText.featureCardText.leftText.map((item, i) => (
                        <div key={i} className={styles.featureCard}>
                            <CheckCircle className={styles.checkIcon} />
                            <div className={styles.featureCard__text}>
                                <p>{item.title}</p>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.featurePhone__wrapper} >
                    <Image
                        src='/assets/iPhone13.svg'
                        width={347}
                        height={700}
                        alt=''
                        className={styles.featureIPhone13__img}
                    />
                </div>

                <div className={styles.featureCard__list}>
                    {homeText.featureCardText.rightText.map((item, i) => (
                        <div key={i} className={styles.featureCard}>
                            <CheckCircle className={styles.checkIcon} />
                            <div className={styles.featureCard__text}>
                                <p>{item.title}</p>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default Feature