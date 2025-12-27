'use client';

import { useState } from 'react';
import { capitalize } from '@tapestry/shared';
import styles from './page.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{capitalize('welcome to Tapestry!')}</h1>
        <div className={styles.card}>
          <h2>Counter Example</h2>
          <p className={styles.count}>Count: {count}</p>
          <button className={styles.button} onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
