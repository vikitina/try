import React from "react";
import styles from './welcome.module.scss'
import { Link } from "react-router-dom";

export default function Welcome() {

  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.wrapper}>
          <p className={styles.title}>Functional nutrition&nbsp;for&nbsp;cats</p>
          <p className={styles.slogan}>Taking care of yourself? Take care of your cat!</p>
        </div>
      </div>
      <Link
        to="/program"
        className={styles.link}
      >Select a Program</Link>
      </div>
    </section>
  )
}