import React, { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [Cards, setCards] = useState([
    {
      title: 'Star Wars: A new Hope',
      description: 'Pew pew in space',
      prio: 5,
      isWatched: true,
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <Title />
      <Form />
      <ul>
        <Card
          title={entry.title}
          description={entry.description}
          prio={entry.prio}
          isWatched={entry.isWatched}
        />
      </ul>
    </div>
  );
}

export default App;
