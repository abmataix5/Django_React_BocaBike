# APP BocaBike 📋


Tercer proyecto del curso 2n Desarrollo de aplicaciones web.

Aplicacion web destinada a la adminnistración de alquileres de bicicletas electricas de una ciudad.






## Construido con 🛠️


 * SERVIDOR

     * [Django](https://www.djangoproject.com/)

        * Midedlewares Admin
        * Midedlewares Auth
        * Middleware JWT
        * UUID
        * Serializers
        * Validators
        * Token JWT
        * Routes
        * Module
        * SendGrid GO

       
 
 
* CLIENTE

    * [React](https://es.reactjs.org/)

        * Store modularizado 
        * Componentes 
        * Api Services Go/Laravel 
        * AuthGUard
        * Headers Authentication -> Token , Admin
        * Reactive
        * Computed
        * Setup()
    


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



