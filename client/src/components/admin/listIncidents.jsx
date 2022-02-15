import React from 'react'


export default function Listincidents ({incident}) {


  
       return(
        

        <div className="d-flex flex-start mt-5">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src={"https://i.pravatar.cc/150?u=" + incident.user.username}
            alt="avatar"
            width="60"
            height="60"
          />
          <div>
            <h6 className="fw-bold mb-1">{incident.user.username}</h6>
            <div className="d-flex align-items-center mb-3">
              <p className="mb-0">
                {incident.created_at}
                <span className="badge bg-danger m-2">Estación : {incident.station.name}</span>
                <button type="button" className="btn btn-sm btn-success">Marcar como leida</button>
              </p>
            </div>
            <p className="mb-0">
              {incident.text}
            </p>
          
          </div>
       </div>
    
     
      ) 
  }
