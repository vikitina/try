import styles from "./footer.module.scss";
import { Academy, Logo, Tg, Vk, Yt } from "../icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <a href="#" className={styles.logoLink}>
                <Logo />
            </a>

            <ul className={styles.socialList}>
                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className="visually-hidden">VKontakte</span>
                        <Vk />
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className="visually-hidden">YouTube</span>
                        <Yt />
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className="visually-hidden">Telegram</span>
                        <Tg />
                    </a>
                </li>
            </ul>
            <div className={styles.academyFooter}>
                <p className={styles.text}>HTML Academy</p>
                <div className={styles.logotype}>
                    <a href="#" className={styles.logo}>
                        <Academy />
                    </a>
                </div>
            </div>
</div>
        </footer>
    )
}