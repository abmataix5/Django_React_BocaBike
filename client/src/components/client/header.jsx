import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { useUser } from "../../hooks/useUser" 
import  IncidentsContext  from '../../context/IncidentsContext';
import { Button ,Modal} from 'react-bootstrap';
import ListNotification from './listNotification';
import { useIncidents } from '../../hooks/useIncidents';
import Loading from 'react-simple-loading';
export default function Header () {


  const {isLogged,logout,user,isAdminLogged} = useUser();


  const {notifications} = useContext(IncidentsContext)
  const headerAdmin = localStorage.getItem('isAdmin') 


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 

    return (


      <nav className="navbar navbar-expand-sm navbar-dark bg-primary py-4">
        
        <div className="container">
        
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
 
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
        
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {
                headerAdmin === 'true' 
                ? 
                <>
                  <li className="nav-item">
                  <Link to={'/'} className="nav-link px-3 me-2 text-white">Home</Link>
                  </li>
                  <li className="nav-item ">
                  <Link to={'/dashboard'} className="nav-link px-3 me-2 text-white">Panel de administración</Link>
                  </li>
                </>
                :
                <>
                
                <li className="nav-item">
                <Link to={'/'} className="nav-link px-3 me-2 text-white">Home</Link>
                </li>
                <li className="nav-item">
                <Link to={'/stations'} className="nav-link px-3 me-2 text-white">Estaciones</Link>
                </li>
                <li className="nav-item ">
                <Link to={'/info'} className="nav-link px-3 me-2 text-white">Como funciona?</Link>
                </li>

                </>
                
                
              }
            
          
              
          
          
            </ul>
      

            <div className="d-flex align-items-center">

              {
                isLogged === true
                ?
                <>

                      <button type="button" className="btn btn-warning" onClick={handleShow}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-bell" viewBox="0 0 16 16">
                              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg> 
                        <span className="badge badge-success">{notifications.length}</span>
                        
                      </button>

                              
                      <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Tus notificaciones</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>

                            {notifications.map((notification,index) =>
                                          
                              <ListNotification key={index} notification= {notification}/>

                            )}

                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Cerrar
                            </Button>
                          </Modal.Footer>
                      </Modal>

                      {

                          user === null 
                          
                          ? <Loading></Loading>
                          
                          :

                            <ul className="navbar-nav">

                              <li className="nav-item dropdown text-white">
                                
                                <img
                                  src={"https://i.pravatar.cc/150?u=" + user.username}
                                  className="rounded-circle m-3"
                                  height="42"
                                  alt="Portrait of a Woman"
                                  loading="lazy"
                                />
                                 {user.username} 
                              </li>
                                
                           </ul>
                      }

                    <button  className="btn btn-danger px-3 me-2 m-3" onClick={logout}>CheckOut</button>
                    
                  
                </>


                : /* Si no esta loggued, muestra lo siguiente: */
                <>

                  <Link to={'/login'} className="btn btn-success px-3 me-2">Login</Link>
                  <Link to={'/register'} className="btn btn-danger me-3">Registrate gratis</Link>
              
                </>
              }
              
            
          
            
            </div>
          </div>

        </div>

      </nav>


    )
  }