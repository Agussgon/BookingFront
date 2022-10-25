import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

//
import { Link } from "react-router-dom";
import { useState } from "react";

//Login en proceso con jwt

// importamos el hook useInput para crear el objeto input 
import useInput from '../hooks/useInput'

export const Login = () => {

	// objeto usuario 

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState(false)

	// ya le pasamos el tipo por parametro , en el form asignamos las propiedades de este objeto 
	const email = useInput('text');
	const password = useInput('password');

	/* hook que modifica a la propeidad email del objet usuario, esto no es necesario porque reutilizamos
useInput 
		const handleEmail= (e)=>{
				setUser({...user, email:e.target.value})
		}*/

	// hook para guardar la sesión si esta todo ok 
	/*  const handleSubmit = (e)=> {
			 e.preventDefault();
			 if(user.email == '' || user.password == ''){
				 alert('complete correctamente los campos');
			 }else{
					 setUser({
							 email: e.target.value,
							 password: ''
					 })
					 localStorage.setItem('logged', JSON.stringify(user))
			 }
	 } */

	// hook para guardar la sesión si esta todo ok , ahora si guardamos los valores dentro del objeto usuario
	// x ahora estan las validaciones de ejemplo aca 

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.value == '' || password.value == '') {
			setError(true);
			window.location.reload();
			setUser({
				email: '',
				password: ''
			})
		} else {
			setUser({
				email: email.value,
				password: password.value
			})
			localStorage.setItem('logged', JSON.stringify(user))
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

								<input value={email.value} onChange={email.onChange} />
							</div>
						</div>

						<div className="f-row">
							<div className="f-col">

								<label>Password</label>
								<input value={password.value} onChange={password.onChange} />
							</div>
						</div>
						<div className="f-row">
							<div className="f-col">
								<div style={{ marginTop: '30px' }}>
									{error && <p>campos requeridos</p>}
									<input type="submit" onClick={handleSubmit} className="btn btn-primary" value="ingresar" />
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