import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useIncidents } from '../../hooks/useIncidents';

import { Button ,Modal} from 'react-bootstrap';
export default function Station ({ station}) {
   
  const [show, setShow] = useState(false);
  const {createIncident} = useIncidents();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [textIncident, setTextIncident] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(textIncident);
    createIncident(textIncident,station.id);

  };


  return (

    station.state_station === 'OFF'   ?   
<>
    


  

      <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href="./out.jpg" width={400}></image></svg>

        <div className="card-body">
          <p className="card-text">{station.name}</p>
          <p className="card-text">Direccion: {station.location}</p>
        </div>
      </div>
      </div>

</>
    :
    
    <>
      <div className="col">
        <div className="card shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><image href={station.image_url} width={420}></image></svg>

          <div className="card-body">
            <p className="card-text">{station.name}</p>
            <p className="card-text">Direccion: {station.location}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/stationDetail/${station.name}`} className="btn btn-sm btn-primary">Mas información</Link>
                <button type="button" className="btn btn-sm btn-danger" onClick={handleShow}>Reportar incidencia</button>
              </div>
              <small className="text-muted text">Bicis disponibles: <strong>{station.available_bikes}</strong></small>
            </div>
          </div>
        </div>
      </div>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear incidencia para la estación : {station.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form>
       
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Escribe aquí la incidencia</label>
                <textarea type="textfield" 
                className="form-control" 
                id="formGroupExampleInput2" 
                placeholder="..."  
                onChange={(e) => setTextIncident(e.target.value)}
                value={textIncident}/>
            </div>
       </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} onClick={handleSubmit}>
            Enviar incidencia
          </Button>
        </Modal.Footer>
      </Modal>
  </>
    
  )
}