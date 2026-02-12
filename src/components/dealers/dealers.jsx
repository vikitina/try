import styles from './dealers.module.scss';

export default function Dealers(props) {
    const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.37576903949!2d10.620313766645438!3d59.8939243203238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4sINCd0L7RgNCy0LXQs9GW0Y8!5e0!3m2!1suk!2sua!4v1770638368735!5m2!1suk!2sua"
    return (
        <div className={styles.dealers}>
            <div className={styles.text}>
                <div className={styles.content}>We Invite Dealers to Cooperate!</div>
                <div className={styles.address}>
                    <span>Karl Johans gt. 30</span>
                    <span>Oslo</span>
                </div>
            </div>
            <div className={styles.map}>
                <iframe 
                src={src} 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}
