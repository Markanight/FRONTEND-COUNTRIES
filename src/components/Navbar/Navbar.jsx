import React from 'react'
import { Link } from 'react-router-dom'
import { getCountries } from '../../actions';
import { useDispatch } from 'react-redux';
import styles from './Navbar.module.css'

export default function Navbar() {
    const dispatch = useDispatch()
    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(getCountries())
    }
  return (
    <div className={styles.container}>
        <Link className={styles.btn} to={'/activities'}>
            <button className={styles.btn}>Create activity</button>
        </Link>
        <h1>Countries</h1>
        <button className={styles.btn1} onClick={handleClick}>Load countries</button>
    </div>
  )
}
