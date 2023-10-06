import React from 'react';
import { homeText } from '@/constant/text';

const DownloadApp = () => {
    return (
        <div>

            <div className={styles.downloadApp__left}>
                <div className={styles.}>
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
        </div>
    )
}

export default DownloadApp