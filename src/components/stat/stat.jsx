import styles from './stat.module.scss';


export default function Stats() {
    return (
        <div className={styles.stats}>
            <div className={styles.statsContainer}>
                <div className={styles.item}>
                    <div className={styles.value}>5 KG</div>
                    <div className={styles.title}>weight loss</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.value}>60 DAYS</div>
                    <div className={styles.title}>time spent</div>
                </div>
            </div>
            <div className={styles.text}>
                <span>Nutrition Costs: </span>
                <span>500 DOLLARS</span>
            </div>
        </div>
    );
}

