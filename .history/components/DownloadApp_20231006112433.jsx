import React from 'react';
import { homeText } from '@/constant/text';
import styles from '../styles/DownloadApp.module.css'
import Image from 'next/image';

const DownloadApp = () => {
    return (
        <div className={styles.downloadApp}>

            <div className={styles.downloadApp__left}>
                <div className={styles.left__text}>
                    <p>{homeText.downloadAPP_lgTxt}</p>
                    <span>{homeText.downloadAPP_smTxt}</span>
                </div>
                <div className={styles.download__bottons}>
                    <Image
                        src='/assets/playstore.svg'
                        width={200}
                        height={400}
                        alt=''
                    />
                    <Image
                        src='/assets/appstore.svg'
                        width={200}
                        height={400}
                        alt=''
                    />

                </div>

            </div>

            <div className={styles.downloadApp__right}>
                <Image
                    src='/assets/playstore.svg'
                    width={200}
                    height={400}
                    alt=''
                />
            </div>
        </div>
    )
}

export default DownloadApp