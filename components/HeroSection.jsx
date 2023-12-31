import React from "react";
import styles from "../styles/HeroSection.module.css";
import { appLinks, homeText } from "@/constant/text";
import Image from "next/image";
import { detectDeviceType } from "@/utils/detectDeviceType";

const HeroSection = ({ toggleWaitListModal }) => {
  const deviceType = detectDeviceType();
  const isDesktop = deviceType === 'Desktop';

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSec__left}>
        <p className={styles.heroSec__leftLargeTxt}>
          {homeText.heroLgTxt1}
          <span
            style={{ color: "#0095A8" }}
            className={styles.heroSec__leftLargeTxt}
          >
            {homeText.heroLgTxt2}
          </span>
        </p>
        <p style={{ color: "#0095A8", marginTop: "-20px" }}>
          <span>{homeText.heroSmTxt}</span>
        </p>

        <div className={styles.download}>
          <p>GET EARLY ACCESS</p>
          <div className={styles.download__bottons}>
            {(isDesktop || deviceType === 'iOS') && (
              <a href={appLinks.appstore} target="_blank" rel="noreferrer">
                <Image
                  src="/assets/appstore.svg"
                  width={200}
                  height={400}
                  alt=""
                  onClick={() => toggleWaitListModal("ios")}
                />
              </a>
            )}
            {(isDesktop || deviceType === 'Android') && (
              <a href={appLinks.playstore} target="_blank" rel="noreferrer">
                <Image
                  src="/assets/playstore.svg"
                  width={200}
                  height={400}
                  alt=""
                  onClick={() => toggleWaitListModal("android")}
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.heroSec__right}>
        <div className={`${styles.iPhones}`}>
          <div className={styles.iPhones__wrapper}>
            <Image
              src="/assets/phoneHeroLg.png"
              width={614}
              height={754}
              alt=""
            />
          </div>
        </div>
        <div className={styles.gradient__box}>
          <div className={styles.heroSec__rightGradient} />
        </div>
      </div>
      <div className={`${styles.download} ${styles.download__sm}`}>
        <p>GET EARLY ACCESS</p>
        <div className={styles.download__bottons}>
          {(isDesktop || deviceType === 'Android') && (
            <a href={appLinks.playstore} target="_blank" rel="noreferrer">
              <Image
                src="/assets/playstore.svg"
                width={200}
                height={400}
                alt=""
                onClick={() => toggleWaitListModal("android")}
              />
            </a>
          )}
          {(isDesktop || deviceType === 'iOS') && (
            <a href={appLinks.appstore} target="_blank" rel="noreferrer">
              <Image
                src="/assets/appstore.svg"
                width={200}
                height={400}
                alt=""
                onClick={() => toggleWaitListModal("ios")}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
