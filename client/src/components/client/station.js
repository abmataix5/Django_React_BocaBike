import React from 'react'


export default function Station ({ station}) {
   
console.log(station)
  return (

      <div className="col">
        <div className="card shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href={station.image_url} width={420}></image></svg>

          <div className="card-body">
            <p className="card-text">{station.name}</p>
            <p className="card-text">Direccion: {station.location}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-primary">Mas Información</button>
                <button type="button" className="btn btn-sm btn-danger">Reportar incidencia</button>
              </div>
              <small className="text-muted text">Bicis disponibles: <strong>{station.available_bikes}</strong></small>
            </div>
          </div>
        </div>
      </div>

  )
}