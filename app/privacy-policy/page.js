import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../../styles/PrivacyPolicy.module.css";
import { privacyPolicyContent } from "@/constant/text";
import { numbering } from "@/utils/numbering";

const page = () => {
  return (
    <>
      <div className={styles.navbar__wrapper}>
        {" "}
        <Navbar scrollToSection={undefined} />
      </div>
      <div className={styles.page}>
        <div className={styles.topImg__container}>
          <p>PRIVACY POLICY</p>
        </div>
        <div className={styles.privacy_policy}>
          {privacyPolicyContent.map((section, index) => (
            <div className={styles.section} key={index}>
              <h2
                className={`${styles.section_title} ${
                  index === 0 && styles.hide_intro_title
                }`}
              >
                {index != 0 && <p>{index}.</p>} {section.title}
              </h2>
              {section.subsections.map((subsection, subIndex) => (
                <div className={styles.subsection} key={subIndex}>
                  <p>
                    {index != 0 && subsection?.title.length > 0 && (
                      <span className={styles.numbering}>
                        {" "}
                        <span>
                          {" "}
                          {numbering(subIndex + 1, "alphabets")}
                        </span>.{" "}
                      </span>
                    )}
                    {subsection.title}
                  </p>
                  <ul>
                    {subsection.points.map((point, pointIndex) => (
                      <li
                        className={`${index === 0 && styles.hide_intro_text}`}
                        key={pointIndex}
                      >
                        <p>
                          {index != 0 && subsection?.points?.length > 1 && (
                            <span className={styles.numbering}>
                              <span>
                                {" "}
                                {numbering(pointIndex + 1, "romanNumberals")}
                              </span>
                              .{" "}
                            </span>
                          )}
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
