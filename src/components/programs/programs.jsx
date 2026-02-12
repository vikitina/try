import { Link } from 'react-router-dom';
import styles from './programs.module.scss';
import catpro from '../../assets/images/catpro.svg';
import tiger from '../../assets/images/tiger.svg';

const data = [
  {
    title: "weight loss",
    text: "Does your cat weigh more than a dog and almost lose the ability to climb trees? Time for a diet! Cat Energy Slim will help your pet lose excess weight.",
    link: "slim catalog",
    href: "/",
    image: tiger
  },
  {
    title: "muscle gain",
    text: "Want to earn authority among neighborhood cats and even dogs? The Cat Energy Pro series will help your cat build the necessary muscles!",
    link: "pro catalog",
    href: "/",
    image: tiger
  },

]

export default function Programs() {

  return (
    <section className={styles.programs}>
      <h2 className="visually-hidden">Programs</h2>
      <ul className={styles.list}>
        {
          data.map((item, index) => <li className={styles.card} key={index}>
            <span
              className={styles.image}
              style={{ backgroundImage: `url(../../../public/images/programs_tablet/i-${index + 1}.svg)` }}
            >
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <Link className={styles.link} to={item.href}>{item.link}</Link>
          </li>)}
      </ul>
    </section>
  )
}

