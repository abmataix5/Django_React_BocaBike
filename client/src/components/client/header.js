import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from "../../hooks/useUser" 

export default function Header () {


  const {isLogged,logout} = useUser();

  console.log(isLogged);
  
  
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
            
            <li className="nav-item">
                <Link to={'/home'} className="nav-link px-3 me-2 text-white">Home</Link>
                </li>
                <li className="nav-item">
                <Link to={'/stations'} className="nav-link px-3 me-2 text-white">Estaciones</Link>
                </li>
                <li className="nav-item ">
                <Link to={'/info'} className="nav-link px-3 me-2 text-white">Como funciona?</Link>
                </li>
          
            </ul>
      

            <div className="d-flex align-items-center">

              {
                isLogged === true
                ?
                <>


                      <ul className="navbar-nav">
                        
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                              className="rounded-circle"
                              height="22"
                              alt="Portrait of a Woman"
                              loading="lazy"
                            />
                          </a>
                          
                        </li>
                      </ul>

                    <button  className="btn btn-danger px-3 me-2" onClick={logout}>CheckOut</button>

                  
                </>


                : /* Si esta loggued, muestra lo siguiente: */
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