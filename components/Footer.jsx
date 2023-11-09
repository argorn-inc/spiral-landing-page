"use client";
import React, { useRef } from "react";
import styles from "../styles/Footer.module.css";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Call,
  Copyright,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef(null);
  return (
    <div id="footer_section" ref={footerRef} className={styles.footer}>
      <div className={styles.contact__us}>
        <div className={styles.contact__usLeft}>
          <a href="mailto:hello@readspiral.com" aria-label="Email">
            <p>
              {" "}
              <Mail className={styles.contact__usIcon} />
            </p>
            <p>hello@readspiral.com</p>
          </a>
        </div>
        <hr className={styles.contact__usDivider} />
        <div className={styles.contact__usRight}>
          <a href="tel:+233546353625" aria-label="Phone">
            <p>
              <Call className={styles.contact__usIcon} />{" "}
            </p>
            <p>+233 54 635 3625</p>
          </a>
        </div>
      </div>
      <div className={styles.footer__content}>
        <Image
          src="/assets/spiralLogo.svg"
          width={227}
          height={74}
          alt="Spiral Logo"
        />

        <p>Spiral - Nurturing Your Soul, One Devotion at a Time.</p>

        <div className={styles.media__handles}>
          <Facebook className={styles.mediaIcons} /> <hr />
          <Instagram className={styles.mediaIcons} /> <hr />
          <Twitter className={styles.mediaIcons} /> <hr />
        </div>

        <div className={styles.condtions}>
          <Link className={styles.links} href="/privacy-policy/">Privacy Policy</Link>
          <Link className={styles.links}  href="/terms-of-use/">Terms of Use</Link>
        </div>
        <hr className={styles.bottom__divider} />
      </div>

      <div className={styles.footer__bottom}>
        <Copyright className={styles.copyrightIcon} />
        <p>Copyright 2023 Spiral Inc. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
