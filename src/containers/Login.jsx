import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

//
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 



// importamos el hook useInput para crear el objeto input 
import useInput from '../hooks/useInput'
import { validateEmail , validatePass} from "../helpers/ValidateForms";

export const Login = ()=>{


    const navigate = useNavigate();

    //sesión guardada
    const sesion={
        email:"juan20@gmail.com",
        password:"hola123@"
    }
    // objeto usuario 

    const [user,setUser]= useState({
        email:'',
        password:''
    });

    const [error,setError]=useState(false)

 // ya le pasamos el tipo por parametro , en el form asignamos las propiedades de este objeto 
    const mail= useInput('text');
    const pass= useInput('password');

 

     // hook para guardar la sesión si esta todo ok , ahora si guardamos los valores dentro del objeto usuario
     // x ahora estan las validaciones de ejemplo aca 
     // las validaciones deberían hacerse en una función aparte pero por falta de tiempo...
     const handleSubmit = (e)=> {
       
        e.preventDefault();
      // localStorage.clear();
        if(validateEmail(mail)===false || validatePass(pass)===false || sesion.email !== mail.value ||
         sesion.password !== pass.value)  {
          setError(true);
       //  window.location.reload();
        // document.form.reset() ;
         
          setUser({
            email: '',
            password:'' 
        })
        }else{
        
            setUser({
                email: mail.value,
                password: pass.value
            })
            localStorage.setItem('user', JSON.stringify(user));
        
           navigate("/");
          //  window.location.replace('./')
          // faltaría que guarde la sesión para poder modificar el header
       }
    }

    


    return(
        <>
        <Navbar/>
        <div className="f-col f-center">
				
				<div className="f-row f-center">
					<form onSubmit={handleSubmit}>
						<div className="f-row">
							<div className="f-col">
							    <label>Email</label>

                                <input value={mail.value} onChange={mail.onChange} required />	
                            </div>
						</div>

						<div className="f-row">
							<div className="f-col">
								         
                            <label>Password</label>
                            <input value={pass.value} onChange={pass.onChange} required/>
							</div>			
						</div>
						<div className="f-row">
							<div className="f-col">
								<div style={{ marginTop: '30px' }}>
                                    { error && <p> Por favor vuelva a intentarlo, sus credenciales son inválidas.</p>}
									<input type="button" onClick={handleSubmit} className="btn btn-primary" value="ingresar" />
								</div>
								<Link to='/signin'>¿No tienes una cuenta? <span>Registrarme</span></Link>
							</div>
						</div>
					</form>
				</div>
			</div>

        <Footer/>

        </>
        )


}