import React from 'react'
import loader from '../../assets/earth.png'
import styles from './Loader.module.css'

export default function Loader() {
  return (
        <img className={styles.img} src={loader} alt="Loading..." width={100} height={100}/>
  )
}
