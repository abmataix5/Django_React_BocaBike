




# APP MyPadel 📋


Segundo proyecto del curso 2n Desarrollo de aplicaciones web.

Aplicacion web destinada a la adminnistración de un club de padel






## Construido con 🛠️


 * SERVIDOR

     * [Go](https://es.wikipedia.org/wiki/Go_(lenguaje_de_programaci%C3%B3n))

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

 * [Laravel](https://es.wikipedia.org/wiki/Go_(lenguaje_de_programaci%C3%B3n))
        
        * Resources
        * Requests
        * Repositories
        * Token JWT
        * Routes
        * Traits
        * Helper (FileUpload)
       
 
 
* CLIENTE

    * [Vue3](https://vue.io/)

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


* *Login* 
* *Workers List*
* *Courts List*
* *Courts List*


### Funcionalidad ⚙️

<table>
    <tr>
        <th>Página</th>
        <th>Características</th>
    </tr>
    <tr>
        <td>Login</td>
        <td>
            <ul>
              Modulo de login, valida si el usuario que incia sesión es un administrador o un trabajador, dependiendo el servidor se encarga de conceder permisos para relizar diferentes acciones dentro de la app.
            </ul>
        </td>
    </tr>
    <tr>
        <td>Worker List</td>
        <td>
            <ul>
                <li>WorkerItem>> Componente que nos muestran el listado de trabajadores con su información correspondiente, tembien permite al administrador editar o borrar trabajadores</li>
                <li>Añadir trabajador >> Permite al administrador añadir trabajadores, concederles permisos de admin, cuenta con validacion mediante Vuelidate, al dar de alta a un trabajador, se le notifica automatiamente con un correo mendiane SendGrid</li>
            </ul>
        </td>
    </tr>
     <tr>
        <td>Courts List</td>
        <td>
            <ul>
                <li>CourtItem>> Componente que nos muestran el listado de las pistas creadas, con su información correspondiente, tembien permite al administrador editar o borrar pistas</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Partners List</td>
        <td>
            <ul>
                <li>PartnerItem>> Componente que nos muestran el listado de socios con su información correspondiente, tembien permite al administrador editar o borrar socios</li>
                <li>Añadir Socio >> Ademas de agregar los datos del usuario, nos permite asociar a su perfil, una imagen seleccionada. </li>
            </ul>
        </td>
    </tr>
        
    
    
    
   
        
  
</table>



## Autores ✒️



* *Abel Mataix * - [abmataix5](https://github.com/abmataix5/)

* *Hugo Micó  * - [hachemico](https://github.com/hachemico/)

