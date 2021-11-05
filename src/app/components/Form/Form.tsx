import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';

type FormProps = {
  //check how and why it works
  onSubmit: (card: {
    title: string;
    description: string;
    isDone: boolean;
  }) => void;
};

export default function Form({ onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description, isDone: false });
    setTitle('');
    setDescription('');
  }

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          className={styles.input}
          name={title}
          placeholder="Title here"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description
        <textarea
          rows={5}
          className={styles.textarea}
          name="description" //Check difference row 12 (why string instead of object)
          placeholder="Description here"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </label>
      <div className={styles.sort_and_submit}>
        <input type="number" />
        <input type="submit" value="Submit" className={styles.button} />
      </div>
    </form>
  );
}
