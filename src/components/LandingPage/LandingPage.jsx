import React from 'react'
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 >Welcome to the Globe</h1>
        <Link className={styles.btn} to={'/home'}>
            <button className={styles.btn}>Enter</button>
        </Link>
      </div>
    </div>
  )
}
