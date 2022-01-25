import React from 'react'


export default function Station ({ station}) {
   
console.log(station)
  return (

      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href={station.image_url} width={420}></image></svg>

          <div class="card-body">
            <p class="card-text">{station.name}</p>
            <p class="card-text">Direccion: {station.location}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-primary">Mas Información</button>
                <button type="button" class="btn btn-sm btn-danger">Reportar incidencia</button>
              </div>
              <small class="text-muted text">Bicis disponibles: <strong>{station.available_bikes}</strong></small>
            </div>
          </div>
        </div>
      </div>

  )
}