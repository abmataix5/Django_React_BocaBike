# APP BocaBike 📋


Tercer proyecto del curso 2n Desarrollo de aplicaciones web.

Aplicacion web destinada a la adminnistración de alquileres de bicicletas electricas de una ciudad.


## Imagenes de la APP 🛠️

file:///home/abel/Im%C3%A1genes/APP/Captura%20de%20pantalla%20de%202022-02-21%2019-36-43.png

file:///home/abel/Im%C3%A1genes/APP/Captura%20de%20pantalla%20de%202022-02-21%2019-36-58.png


## Construido con 🛠️


 * SERVIDOR

     * [Django](https://www.djangoproject.com/)

    
        * Middleware JWT
        * Serializers
        * Permissions
        * Token JWT
        * Serializers
        * Routes
        * Models
        * Views
        * Foreign Keys
        * ...

       
 
 
* CLIENTE

    * [React](https://es.reactjs.org/)

        * Hooks
        * Routing 
        * Api Services 
        * UseContext / UseState / UseEffect / UseCallback
        * Components
        * React-boostrap
    


* BBDD

    * [MySQL](https://www.mysql.com/)



### Modulos de la app 🔩


* *Login/Register* 
* *Estaciones*
* *Details estaciones*
* *Pandel admin*


### Funcionalidad ⚙️

<table>
    <tr>
        <th>Página</th>
        <th>Características</th>
    </tr>
    <tr>
        <td>Login/Register</td>
        <td>
            <ul>
              Modulo de login/register, con validacion de errores con react-hook-forms y JWT.
            </ul>
        </td>
    </tr>
    <tr>
        <td>Estaciones</td>
        <td>
            <ul>
          Módulo que no permite ver un listado de todas las estaciones disponibles en la ciudad y si esta o no en servicio.
            </ul>
        </td>
    </tr>
     <tr>
        <td>Details estaciones</td>
        <td>
            <ul>
              Este módulo nos permite ver información mas detallada de una esatción, donde podemos crear incidencias sobre ella, alquilar bicicletas y dejar una bicicleta alquilada en un slot libre.
            </ul>
        </td>
    </tr>
    <tr>
        <td>Panel Admin</td>
        <td>
            <ul>
                <li>Estadicsticas>>Muestra estadisticas de la aplicación como: Top 5 esatciones más usadas, top 5 bicis más usadas, top 5 usuarios más activos</li>
                <li>Administrar bicis >> Permite administrar las bicis </li>
                <li>Administrar estaciones >> Permite habilitar o deshabitlitar estaciones </li>
                <li>Administrar incidencias >> Lista todas las incidencias creadas por los usuarios, y permite al administrador contestar las incidencias.</li>
            </ul>
        </td>
    </tr>
        
    
    
    
   
        
  
</table>



## Autores ✒️



* *Abel Mataix * - [abmataix5](https://github.com/abmataix5/)



