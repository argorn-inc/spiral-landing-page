import React from 'react'

const DownloadApp = () => {
    return (
        <div>

            <div className={styles.downloadApp__left}>
                <div className={styles.download}>
                    <p>DOWNLOAD APP NOW</p>
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
        </div>
    )
}

export default DownloadApp