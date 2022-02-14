import React ,{useState}from "react";
import StationInfoDetails from "../../components/client/stationDetails";
import { useParams } from 'react-router-dom';
import { useSingleStation } from "../../hooks/useSingleStation" 
import Loading from 'react-simple-loading';
import { Link} from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { Button ,Modal} from 'react-bootstrap';

export default function StationDetail() {

  const { name } = useParams(); /* ID de la estación seleccionada */

  const {station} = useSingleStation({name:name})

  const {  isLogged } = useUser(); 
  
     
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
                                <div className="white-box text-center"><img src="../descarga.jpeg" width="100%"  className="img-responsive"/></div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <h4 className="box-title mt-5">Información sobre la estación</h4>
                                <p>Estación : {station.name}</p>
                                <p>Localización : {station.location} </p>
                                <p>Bicis disponibles en este momento : {station.available_bikes}</p>
                            
                                <button className="btn btn-primary btn-rounded">Seguir estación</button>
                            
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





        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Crear incidencia para la estación : {station.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <form>
        
                <div class="form-group">
                    <label for="incidentText">Escribe aquí la incidencia</label>
                    <textarea type="textfield" class="form-control" id="incidentText" placeholder="..."/>
                </div>
        </form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Enviar incidencia
            </Button>
            </Modal.Footer>
        </Modal>


        </>

    );
  }