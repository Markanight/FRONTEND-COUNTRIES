import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

export default function Card({country}) {
  return (
    // <div classNameName='countryCard'>
      
    //     <Link to={'/home/' + country.id}>
    //       <img classNameName='img' src={country.flag} alt={country.name} width={230} height={145} />
    //       <div>
    //         <h3>{country.name}</h3>
    //       </div>
    //       <h5>{country.continent}</h5>
    //     </Link>
      
    // </div>
    <div className="container">
      <Link to={'/home/' + country.id}>
      <div className="card">
          <div className="slide slide1">
              <div className="content">
                  <div className="icon">
                      <img  src={country.flag} alt={country.name} width={221} height={140} />
                  </div>
              </div>
          </div>
          <div className="slide slide2">
              <div className="content">
                  <h3>
                  {country.name}
                  </h3>
                  <p>{country.continent}</p>
              </div>
          </div>
      </div>
      </Link>
    </div>
  )
}
