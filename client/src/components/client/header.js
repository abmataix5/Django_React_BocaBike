import React from 'react'
import { Link } from 'react-router-dom';

export default function Header () {

  
  
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary py-4">
    <div className="container-fluid">
      <a className="navbar-brand" >BocaBike</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <Link to={'/home'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to={'/stations'} className="nav-link">Estaciones</Link>
          </li>
          <li className="nav-item ">
          <Link to={'/info'} className="nav-link">Como funciona?</Link>
          </li>
          <li className="nav-item">
          <Link to={'/login'} className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
          <Link to={'/register'} className="nav-link">Register</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search"></input>
          <button className="btn btn-danger" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav> 
    )
  }