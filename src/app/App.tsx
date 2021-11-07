import React, { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [cards, setCards] = useState([
    {
      title: 'Star Wars: A new Hope',
      description: 'Pew pew in space',
      isWatched: true,
      priority: 5,
    },
  ]);

  console.log(cards);
  function handleSubmit(card: {
    title: string;
    description: string;
    isWatched: boolean;
    priority: number;
  }) {
    setCards([
      ...cards,
      {
        title: card.title,
        description: card.description,
        isWatched: card.isWatched,
        priority: card.priority,
      },
    ]);
  }

  return (
    <div className={styles.appContainer}>
      <Form onSubmit={handleSubmit} />
      <ul>
        {cards.map((entry) => {
          return (
            <Card
              title={entry.title}
              description={entry.description}
              isWatched={entry.isWatched}
              priority={entry.priority}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
