import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllActivities, getFilterActivity } from '../../actions'
import style from './Filters.module.css'


export default function Filters({handleFilterAlphabetic, handleFilterPopulation, handleFilterContinent}) {
    const dispatch = useDispatch()
    const activity = useSelector((state) => state.activities)

    

    useEffect(()=>{
        dispatch(getAllActivities())
    }, [dispatch])
    
    const handleFilterActivity = (e) =>{
        e.preventDefault()
        dispatch(getFilterActivity(e.target.value))
    }



  return (
    <div className={style.filters}>

                    <select className={style.filter} onChange={handleFilterPopulation}>
                        <option value='Max' key='Max'>Max population</option>
                        <option value='Min' key='Min'>Min population</option>
                    </select>


                    <select className={style.filter} onChange={handleFilterContinent}>
                        <option value='All' key='All'>All continents</option>
                        <option value='Africa' key='Africa'>Africa</option>
                        <option value='Antarctica' key='Antarctica'>Antarctica</option>
                        <option value='Asia' key='Asia'>Asia</option>
                        <option value='Europe' key='Europe'>Europe</option>
                        <option value='North America' key='NorthAmerica'>North America</option>
                        <option value='Oceania' key='Oceania'>Oceania</option>
                        <option value='South America' key='SouthAmerica'>South America</option>
                    </select>


                    <select className={style.filter} onChange={handleFilterActivity}>
                        <option value='All'>All activities</option>
                        {activity.map(e => (
                            <option value={e} key={e}>{e}</option>
                        ))}
                    </select>


                    <select className={style.filter} onChange={handleFilterAlphabetic}>
                        <option value='Asc' key='Asc'>A-Z</option>
                        <option value='Desc' key='Desc'>Z-A</option>
                    </select>

            </div>
  )
}
