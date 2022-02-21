import React ,{useState,useContext}from "react";
import StationInfoDetails from "../../components/client/stationDetails";
import { useParams } from 'react-router-dom';
import { useSingleStation } from "../../hooks/useSingleStation" 
import Loading from 'react-simple-loading';
import { Link} from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { Button ,Modal} from 'react-bootstrap';
import { useIncidents } from '../../hooks/useIncidents';
import  RentContext  from "../../context/RentsContext";


export default function StationDetail() {

  const { name } = useParams(); /* ID de la estación seleccionada */

  const {station} = useSingleStation({name:name})

  const {  isLogged } = useUser(); 
  
  const {createIncident} = useIncidents();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 /*  console.log(station) */

  const [textIncident, setTextIncident] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(textIncident);
    createIncident(textIncident,station.id);
    setShow(false)
  };


  const{rentActive} = useContext(RentContext)
  console.log(rentActive)

    return (

        station === undefined 
        
        ? 
        <Loading></Loading> 
        
        :

        <>

          <div className="container mt-5">

                <div className="card mt-5">
                    <div className="card-body">
                    
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center"><img src={"." + station.image_url} width="100%"  className="img-responsive"/></div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <h4 className="box-title mt-5">Información sobre la estación</h4>
                                <p>Estación : {station.name}</p>
                                <p>Localización : {station.location} </p>
                                <p>Slots en funcionamineto : {station.slots.length}</p>
                            
                          
                                <button className="btn btn-danger btn-rounded" onClick={handleShow}>Reportar incidencia</button>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <h3 className="box-title mt-5">Bicis disponibles para reservar</h3>
                                <div className="table-responsive mt-5">
                                

                                        {station.slots.length === 0 || isLogged === false
                                            
                                            ? 
                                            <div>Inicia sesión para poder reservar nuestras bicis<Loading></Loading> </div>
                                            
                                            
                                            :

                                                <table className="table table-striped table-product">
                                                    <tbody>

                                                        {station.slots.map((slot,index) =>
                                        
                                                            <StationInfoDetails key={index}  slot={slot} />

                                                        )}
                                                
                                                    </tbody>
                                                </table>
                                        } 
                                        

                                </div>
                            </div>
                        </div>

                        <Link to={`/stations`} className="btn btn-sm btn-danger mt-5">Volver a todas las estaciones</Link>

                    </div>
                </div>

        </div>



      {/* Ventana modal para crear incidencias */}

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

    );
  }