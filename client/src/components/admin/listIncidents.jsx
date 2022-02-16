import React,{useState} from 'react'
import { Button ,Modal} from 'react-bootstrap';

export default function Listincidents ({incident}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [textIncident, setTextIncident] = useState("");

  
       return(
        

        <>
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
                <button type="button" className="btn btn-sm btn-success" onClick={handleShow}>Responder</button>
              </p>
            </div>
            <p className="mb-0">
              {incident.text}
            </p>
          
          </div>
       </div>
    


       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Responder a {incident.user.username}  
           <img
            className="rounded-circle shadow-1-strong m-2"
            src={"https://i.pravatar.cc/150?u=" + incident.user.username}
            alt="avatar"
            width="60"
            height="60"
          /></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form>
       
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Escribe aquí tu respuesta</label>
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
          <Button variant="primary" onClick={handleClose}>
            Responder incidencia
          </Button>
        </Modal.Footer>
      </Modal>

       </>
     
      ) 
  }
