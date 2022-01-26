import React from 'react'
import { Link } from 'react-router-dom';

export default function Header () {

  
  
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary py-4">
    <div class="container-fluid">
      <a class="navbar-brand" >BocaBike</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
          <Link to={'/home'} className="nav-link">Home</Link>
          </li>
          <li class="nav-item">
          <Link to={'/stations'} className="nav-link">Estaciones</Link>
          </li>
          <li class="nav-item ">
          <Link to={'/info'} className="nav-link">Como funciona?</Link>
          </li>
          <li class="nav-item">
          <Link to={'/login'} className="nav-link">Login</Link>
          </li>
          <li class="nav-item">
          <Link to={'/info'} className="nav-link">Register</Link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search"></input>
          <button class="btn btn-danger" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav> 
    )
  }