import styles from "./how.module.scss";

const data = [
  {
    text: "Functional nutrition contains only beneficial nutrients.",
  },
  {
    text: "Available in powder form— just add boiling water and it’s ready.",
  },
  {
    text: "Replace one or two mealsof regular food with our functional nutrition.",
  },
  {
    text: "In just one month, enjoy positive changes in your pet!",
  },
]

export default function How(props) {
  return (
    <section className={styles.how}>
      <h2 className={styles.title}>How it works</h2>
      <ul className={styles.list}>
        {
          data.map((item, index) => <li className={styles.item} key={index}>
            <span
              className={styles.image}
              style={{ backgroundImage: `url(/images/how/i-${index + 1}.svg)` }}
            >
            </span>
            <p className={styles.text}>{item.text}</p>
          </li>)
        }

      </ul>
    </section>
  )
}


