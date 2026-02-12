import styles from "./slider.module.scss";
import beforeM from "../../assets/images/slider/before-m.png";
import afterM from "../../assets/images/slider/after-m.png"
import { useState } from "react";
import beforeT from "../../assets/images/slider/before-t.png";
import afterT from "../../assets/images/slider/after-t.png"

const SliderStatus = {
    START: 0,
    BEFORE: 1,
    AFTER: 2
}

export default function Slider() {

    const [status, updateStatus] = useState(SliderStatus.START);

    const handleToggle = () => {
        if (status === SliderStatus.START) {
            updateStatus(SliderStatus.AFTER)
        } else {
            updateStatus((current) => {
                if (current === SliderStatus.BEFORE) {
                    return SliderStatus.AFTER
                } else {
                    return SliderStatus.BEFORE
                }
            })
        }
    }

    return (
        <div className={`
        ${styles.slider}
        ${(status === SliderStatus.BEFORE) ? styles.before : ""}
        ${(status === SliderStatus.AFTER) ? styles.after : ""}
        `}>

            <ul className={styles.list}>
                <li className={`${styles.screen} ${styles.screenBefore}`}>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={beforeT} /> 
                        
                        <img className={styles.image} src={beforeM} alt="" />
                    </picture>
                </li>
                <li className={styles.screen}>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={afterT} />
                        <img className={styles.image} src={afterM} alt="" />
                    </picture>
                </li>
            </ul>
            <button
                onClick={handleToggle}
                className={styles.control}
            >
                <span className="visually-hidden">toggle slider</span>
            </button>
        </div>
    )
}