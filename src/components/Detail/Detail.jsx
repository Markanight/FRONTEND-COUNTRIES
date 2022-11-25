import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import {useDispatch, useSelector} from 'react-redux';
import { getCountryData } from '../../actions';
import './Detail.css'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';


export default function Detail() {
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()
    const dispatch = useDispatch()
    const country = useSelector((state)=> state.countryDetail)

    useEffect(()=>{
      setIsLoading(true)
        dispatch(getCountryData(id))
        setTimeout(() => {
          setIsLoading(false)
        }, 2200);
    }, [dispatch, id])

    if(isLoading){
      return <Loader/>
    }


    const name = country.map((e)=>e.name)
    const continent = country.map((e)=>e.continent)
    const population = country.map((e)=>e.population)
    const area = country.map((e)=>e.area)
    const subregion = country.map((e)=>e.subregion)
    const capital = country.map((e)=>e.capital)
    const flag = country.map((e)=>e.flag)
    const languages = country.map((e)=>e.languages)

    const activities = country.length > 0 ? country[0].activities?.map(e=>{
      return {
        id : e.id,
        name : e.name,
        difficulty : e.difficulty,
        season : e.season,
        duration : e.duration
      }
    }) : null
 
    
  return (
    <div className='box'>
        <div className='topbar'>
           <div className='country'>
           <img className='img' src={flag} alt={name + 'flag'}  width={100}/>
            <h1>{name}</h1>
           </div>           
        </div>
        <div className='boxes'>

        <div className='details'>
          <img className='img2' src={flag} alt="" />
          <h3 className='title'>General Information</h3>
          <div className='box-detail'>
            <div className='text'>
              <div className='detail'><strong>Continent</strong>: </div>
              <div className='data'>{continent}</div>
            </div>
            <div className='text'>
              <div className='detail'><strong>Subregion</strong>: </div>
              <div className='data'>{subregion}</div>
            </div>
            <div className='text'>
              <div className='detail'><strong>Capital</strong>: </div>
              <div className='data'>{capital}</div>
            </div >
            <div className='text'>
              <div className='detail'><strong>Area</strong>:</div>
              <div className='data'>{area.toLocaleString()} km2</div>
            </div>
            <div className='text'>
              <div className='detail'><strong>Pupulation</strong>:{' '} </div>
              <div className='data'>{population.toLocaleString()} persons </div>
            </div>
            <div className='text'>
              <div className='detail'><strong>Languages</strong>:{' '} </div>
              <div className='data'>{languages} </div>
            </div>
          </div>
          
          
          
        </div>
        <div>
            <h3 className='last'>Activities</h3>
           { 
                activities?.length > 0 ? activities?.map((activity) => {
                 
                  return (
                    <div className='boxy' key={activity.id}>
                      <p>Name: {activity.name.charAt(0).toUpperCase() + activity.name.slice(1)}</p>
                      <p>Difficulty: {activity.diffiulty}</p>
                      <p>Season: {activity.season}</p>
                      <p>Duration: {activity.duration}</p>
                    </div>
                  )
                }) : <p className='boxy'>without activities</p>
              }
            <Link to={'/home'}><button className='btn'>Back</button></Link> 
        </div>
        </div>
             
           
    </div>
  )
}

