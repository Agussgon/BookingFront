import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

//
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



// importamos el hook useInput para crear el objeto input 
import useInput from '../hooks/useInput'
import { validateEmail, validatePass } from "../helpers/ValidateForms";
import { AppContext } from "../components/context/AppContext";

export const Login = () => {
	const navigate = useNavigate();
	// Creacion del objeto usuario  (Pasar a estado initialState)
	const [user, setUser] = useState({
		email: '',
		password: ''
	});
	const datos = useContext(AppContext);
	console.log(datos)

	// Verifica si existe un error
	const [error, setError] = useState(false)

	//sesión guardada
	const sesion = {
		email: "juan20@gmail.com",
		password: "hola123@"
	}
	const mail = useInput('text');
	const pass = useInput('password');

	const handleSubmit = (e) => {

		// e.preventDefault();
		// localStorage.clear();
		if (validateEmail(mail) === false || validatePass(pass) === false || sesion.email !== mail.value ||
			sesion.password !== pass.value) {
			setError(true);
			//  window.location.reload();
			// document.form.reset() ;

			setUser({
				email: '',
				password: ''
			})
			console.log("entre 1")
		} 
		else {

			localStorage.setItem('user', JSON.stringify(user))
			setUser({
				...datos.usuario,
				[datos.usuario.email]: mail.value,
				[datos.usuario.password]: pass.value
			})
			console.log(user)
			
			console.log("entre 2")
			// navigate("/")
			//  window.location.replace('./')
			// faltaría que guarde la sesión para poder modificar el header
		}
	}




	return (
		<>
			<Navbar />
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
								<input value={pass.value} onChange={pass.onChange} required />
							</div>
						</div>
						<div className="f-row">
							<div className="f-col">
								<div style={{ marginTop: '30px' }}>
									{error && <p> Por favor vuelva a intentarlo, sus credenciales son inválidas.</p>}
									<input type="button" onClick={()=>handleSubmit()} className="btn btn-primary" value="ingresar" />
								</div>
								<Link to='/signin'>¿No tienes una cuenta? <span>Registrarme</span></Link>
							</div>
						</div>
					</form>
				</div>
			</div>

			<Footer />

		</>
	)


}
