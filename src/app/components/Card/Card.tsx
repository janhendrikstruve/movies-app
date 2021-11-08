import React, { useState } from 'react';
import styles from './Card.module.css';

type cardProps = {
  title: string;
  description: string;
  isWatched: boolean;
  priority: number;
};

function Card({
  title,
  description,
  priority,
  isWatched,
}: cardProps): JSX.Element {
  const [prio, setPrio] = useState(priority);
  return (
    <section className={styles.card}>
      <h2 className={styles.title_Element}>{title}</h2>
      <p className={styles.text_Element}>{description}</p>
      <label className={styles.lable_priority} />
      Movie Rating &nbsp;
      <input
        type="number"
        value={prio}
        min={1}
        max={5}
        onChange={(event) => setPrio(parseInt(event.target.value))}
      />
      &nbsp; &nbsp; &nbsp;
      <label className={styles.lable_checkbox} />
      Movie Watched &nbsp;
      <input
        checked={isWatched}
        type="checkbox"
        className={styles.checkbox_button}
        defaultValue=""
      />
    </section>
  );
}
export default Card;
