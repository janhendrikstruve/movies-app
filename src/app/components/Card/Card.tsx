import React from 'react';
import styles from './Card.module.css';

type cardProps = {
  title: string;
  description: string;
  prio: number;
  isWatched: boolean;
};

export default function Card({
  title,
  description,
  prio,
  isWatched,
}: cardProps): JSX.Element {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <input type="number" value={prio} />
      <input type="checkbox" value="" />
    </section>
  );
}
