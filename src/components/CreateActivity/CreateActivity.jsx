import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createActivity, getCountries } from '../../actions'
import './CreateActivity.css'

function validate(input){
        const errors = {}
    if(input.name === ''){
        errors.name = 'name must be completed'
    }
    else if(input.difficulty === '') {
        errors.difficulty = 'difficulty must be completed'
    }
    else if(input.season === '') {
        errors.season = 'season must be completed'
    }
    else if(input.duration === 0) {
        errors.duration = 'duration must be completed'
    }
    else if(input.countries.length === 0){
        errors.countries = 'select at least one country'
    }
    return errors
}


export default function CreateActivity() {
    const [error, setError] = useState({})
    const history = useHistory()
    const country = useSelector((state)=> state.countries)
    const dispatch = useDispatch() 
    const [input, setInput] = useState({
        name : '',
        season : '',
        difficulty : '',
        duration : '',
        countries : []
    })

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    const handleChange = (e) => {
        setInput({
            ...input, [e.target.name] : e.target.value
            
        })
        setError(validate(input))
        
    }
    
    


    const countries = country.sort((a, b)=>{
        if(a.name > b.name){
           return  1
        }
        if (b.name > a.name){
            return -1
        }
        return 0
    })


    const handleCountries = (e) =>{
        setInput({
            ...input,
            countries : [...input.countries, input.countries.includes(e.target.value) ? null : e.target.value]
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(Object.keys(error).length > 0){
           alert(Object.values(error))
        }
        else if(input.difficulty < 1 || input.difficulty > 5) {
            alert('Difficulty must be between 1 and 5')
        }
        else {
            dispatch(createActivity(input))
          setInput({
            name : '',
            season : '',
            difficulty : '',
            duration : '',
            countries : []
        })
        history.push('/home') 
        }
        
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        setInput({
            name : '',
            season : '',
            difficulty : '',
            duration : '',
            countries : []
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/home')
    }

    
    
    const countryList = countries.map((country)=>country.name)
    // const season = ['Winter', 'Spring', 'Autumn', 'Summer']
    // const difficulty = [1, 2, 3, 4 , 5]



  return (
    <div className='box'>
        <h1>Create your activity</h1>
        <div className='container1'>
            
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label>Activity: </label>
                <input placeholder='activity name' className='inputs' type="text" value={input.name} name='name' onChange={handleChange}/> 
            </div>
            <div>
                <label>Season: </label>
                <input placeholder='activity season' className='inputs' type="text" value={input.season} name='season' onChange={handleChange} />
            </div>
            <div>
                <label>Difficulty: </label>
                <input placeholder='between 1 to 5' className='inputs' type="text" value={input.difficulty} name='difficulty' onChange={handleChange}/>
            </div>
            <div>
                <label>Duration: </label>
                <input defaultValue={0} placeholder='activity duration (weeks)' className='inputs' type="text" value={input.duration} name='duration' onChange={handleChange} />
            </div>
            <div>
                <label>Countries: </label>
                <select className='inputs' onChange={handleCountries}>
                    <option value="" hidden>Select countries</option>
                    {
                        countryList.map((c)=>(
                            <option value={c} name='countries' key={c}>{c}</option>
                        ))
                    }
                </select>
                <p>{input.countries.join(', ')}</p>
            </div>
            <div className='buttons'>
                <button className='button' onClick={handleSubmit}>Create activity</button>
                <button className='button' onClick={handleCancel}>Cancel</button>
                <button className='button' onClick={handleClick}>Back</button>
            </div>
            
        </form>
        </div>       
    </div>
  )
}
