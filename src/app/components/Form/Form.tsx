import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';

type FormProps = {
  //check how and why it works
  onSubmit: (card: {
    title: string;
    description: string;
    isWatched: boolean;
    priority: any;
  }) => void;
};

export default function Form({ onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description, isWatched: false, priority });
    setTitle('');
    setDescription('');
    setPriority('');
  }

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.lable_title}>
        Title
        <br />
        <input
          type="text"
          className={styles.input}
          name={title}
          placeholder="Title here"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label className={styles.lable_description}>
        Description
        <br />
        <br />
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
        <label className={styles.lable_priority}>
          Movie Rating
          <input
            type="number"
            defaultValue={1}
            min={1}
            max={5}
            onChange={(event) => setPriority(event.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" className={styles.button} />
      </div>
    </form>
  );
}
