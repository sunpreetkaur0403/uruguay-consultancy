import React from 'react';
import styles from './Card.module.scss';

const Card = ({ heading, content, hasButton }) => {
  let title = 'This is a Title';
  let subtitle = 'This is a Subtitle';
  let desc = 'This a short description';

  return (
    <article className={styles.card}>
      <img className={styles.image} src='src/assets/react-intro-challenge__1_.png'></img>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.para}>{desc}</p>
      <div className={styles.center}>
        <button className={styles.btn}>Click me</button>
      </div>
     
    </article>
  );
};

export default Card;