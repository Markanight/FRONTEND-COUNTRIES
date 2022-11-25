import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getNameCountry } from '../../actions'
import styles from './SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e)=>{
        setName(e.target.value)
        
    }

    const handleSubmit = (e)=>{
      if(name === ''){
        e.preventDefault()
        alert('Insert a country')
      } 
      else{
        e.preventDefault()
        dispatch(getNameCountry(name))
        setName('')
      }
    }

    


  return (
    <form className={styles.container}>
        <input onChange={handleChange} value={name} onSubmit={handleSubmit} className={styles.searchBar} type="text" placeholder='SEARCH...'/>
        <button  onClick={handleSubmit} className={styles.btn}></button>
    </form>
  )
}
