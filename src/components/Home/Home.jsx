import React, { useState } from 'react'
import Card from '../Card/Card.jsx'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getCountries, getFilterAlphabet, getFilterContinent, getFilterPopulation } from '../../actions'
import './Home.css'
import Navbar from '../Navbar/Navbar.jsx'
import Paginado from '../Paginado.jsx/Paginado.jsx'
import Loader from '../Loader/Loader.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Filters from '../Filters/Filters.jsx'

export default function Home() {
    const [, setOrder] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage
    const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    useEffect( ()=>{
        setIsLoading(true);        
             dispatch(getCountries())       
        setTimeout(() => {
           setIsLoading(false) 
        }, 2200);
        
    }, [dispatch])
    
    const handleNextClick = (e) => {
        e.preventDefault();
        if(currentCountries.length === 0) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage+1)
        }
        
    }

    // const handleNext = (e) => {
    //     e.preventDefault()
    //     while (currentCountries.length > 0) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }

    const handlePrevClick = (e) => {
        e.preventDefault();
        if(currentPage === 1){
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage-1)
        }
        
    }
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    if(isLoading){
        return <Loader/>
    }
    
    
    const handleFilterAlphabetic = (e)=>{
        e.preventDefault()
        dispatch(getFilterAlphabet(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
    }
    const handleFilterPopulation = (e) => {
        dispatch(getFilterPopulation(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
    }  
    const handleFilterContinent = (e) => {
        dispatch(getFilterContinent(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
    }
    
    
 

  return (
    <div>
            <Navbar/>
        <div className='seanav'>
            <Filters handleFilterAlphabetic={handleFilterAlphabetic} handleFilterPopulation={handleFilterPopulation} handleFilterContinent={handleFilterContinent}/>
            <SearchBar/>  
        </div>
       {
        <ul className='countriesGrid'>
            {
                currentCountries?.map((country)=>{
                    return (
                        <Card country={country} key={country.id}/>
                    );
                })
            }
        </ul>}
        <Paginado
            currentPage = {currentPage}
            handlePrevClick = {handlePrevClick}
            handleNextClick = {handleNextClick}
            countriesPerPage = {countriesPerPage}
            allCountries = {allCountries.length}
            paginado = {paginado}
            />
    </div>
  )
}
