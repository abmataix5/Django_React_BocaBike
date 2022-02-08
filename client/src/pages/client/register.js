import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form"
import { useUser } from "../../hooks/useUser" 


export default function Register() {

const { register, handleSubmit, formState:{errors},} = useForm();

  let history = useNavigate(); 
  
  const { register_f,isLogged } = useUser(); 


  useEffect(() => {
    console.log(isLogged);
    if (isLogged) {
      history("/stations");
  
    }
  }, [isLogged]);



  const sendData = (data) => { 
 
    register_f(data.inputEmail, data.inputPassword,data.inputUsername);

   }; 

    return (
       
    
     
      <form className="form-signin mt-5" onSubmit={handleSubmit(sendData)}>

        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Nueva cuenta en BocaBike</h1>

        <div className="form-group mx-sm-5 mb-5 col-xs-4">

   {/* Validación Username */}


          <label htmlFor="inputUsername" className="sr-only mt-4 "><strong>Username</strong></label>

          <input 
            type="text"
            className="form-control mt-4" 
            placeholder="Username" 
            {...register('inputUsername',{
                required: '*Campo requerido',
                maxLength :{
                    value: 20,
                    message:'El tamaño maximo es de 20 letras'
                },
                minLength: {
                    value: 4,
                    message: 'El tamaño minimo es de 4 letras',
                  }
            })} />

            <br />
              <p className="text-danger">{errors.inputUsername && errors.inputUsername.message}</p> 
            <br />

   {/* Validación Email */}

          <label htmlFor="inputEmail" className="sr-only mt-4 "><strong>Email</strong></label>

          <input 
            type="email" 
            className="form-control mt-4" 
            placeholder="Email"
            {...register('inputEmail',{
                required: '*Campo requerido',
                pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'El formato del email no es válido',
                  },
            })} />

            <br />
              <p className="text-danger">{errors.inputEmail && errors.inputEmail.message}</p> 
            <br />

   {/* Validación Password */}

          <label htmlFor="inputPassword" className="sr-only mt-4"><strong>Contraseña</strong></label>

          <input 
            type="password"  
            name="password"
            className="form-control mt-4 small" 
            placeholder="Contraseña"
            {...register('inputPassword',{
                required: '*Campo requerido',
                minLength: {
                    value: 8,
                    message: 'El tamaño mínimo es de 8 letras',
                  }
            })} />

            <br />
              <p className="text-danger">{errors.inputPassword && errors.inputPassword.message}</p> 
            <br />


        </div>

 
        <button className="btn btn-lg btn-primary btn-block" type="submit">Registrar-se</button>

        <p className="mt-5 mb-3 text-muted">&copy; 2022-2022</p>

      </form>
  
     
        
            
        
    );
  }