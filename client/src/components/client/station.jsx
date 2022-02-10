import React from 'react'
import { Link } from 'react-router-dom';
import Loading from 'react-simple-loading';

export default function Station ({ station}) {
   
console.log(station.state_station)
  return (

    
    station.state_station === 'OFF' 

    ?   

      <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href="./out.jpg" width={400}></image></svg>

        <div className="card-body">
          <p className="card-text">{station.name}</p>
          <p className="card-text">Direccion: {station.location}</p>
        </div>
      </div>
      </div>

    :
      <div className="col">
        <div className="card shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href={station.image_url} width={420}></image></svg>

          <div className="card-body">
            <p className="card-text">{station.name}</p>
            <p className="card-text">Direccion: {station.location}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/stationDetail/${station.name}`} className="btn btn-sm btn-primary">Mas información</Link>
                <button type="button" className="btn btn-sm btn-danger">Reportar incidencia</button>
              </div>
              <small className="text-muted text">Bicis disponibles: <strong>{station.available_bikes}</strong></small>
            </div>
          </div>
        </div>
      </div>

  )
}