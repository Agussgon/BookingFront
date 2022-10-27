import React, { useState } from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import iconver from "../assets/icons/iconver.png";
import { ValidateFormHelper } from '../helpers/ValidateForms';
import { Link } from 'react-router-dom';

//import flexCSS from '../styles/module.flex.css';

/*Consulta en el contenedor SignIn tengo entendido que es una buena practica usar
setState en lugar de modificar las propiedades del objeto model directamente en el input
onChange={(e) => model.lastName = e.target.value} 

ejemplo agregar al objeto setModel y usarlo en una función aparte 

const handleChange= (e,e.value)=>{
setModel({...model, e.value: e.target.value });
y en el form algo asi: 
<input onChange={handleChange} value=model.name type="text"/>
}; 

No se si funcionara  o si esta del todo bien la sintaxis
 pero tendria que ser algo asi para poder reutilizar esa función y no crear un estado por 
cada propiedad del usuario  */

export const SignIn = () => {

	const [model] = useState({
		firstName: '',
		lastName: '',
		email: '',
		pass: '',
		confirmPass: ''
	});

	const [stateInputPassModel, setInputPassModel] = useState('password');

	function handleInputType() {
		setInputPassModel(stateInputPassModel === 'password' ? 'text' : 'password');
	}

	function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
	}

	function createAccount() {
		if (!ValidateFormHelper(model)) {
			alert("Llene el formulario");
			return;
		}

		if (model.pass !== model.confirmPass) {
			alert("Los passwords no coinciden");
			return;
		}

		console.log(model);
		alert("Cuenta creada");
	}

	return (
		<>
			<Navbar />

			<div className="f-col f-center">
				<div className="f-row f-center">
					<div>Crear cuenta</div>
				</div>

				<div className="f-row f-center">
					<form onSubmit={handleSubmit}>
						<div className="f-row">
							<div className="f-col">
								<label htmlFor="firstName" className="form-label">Nombre</label>
								<input type="text" placeholder="Nombre" name="firstName"
									id="firstName"
									defaultValue={model.firstName}
									onChange={(e) => model.firstName = e.target.value}
									className="form-control" required />
							</div>

							<div className="f-col">
								<label htmlFor="lastName" className="form-label">Apellido</label>
								<input type="text" placeholder="Apellido" name="lastName"
									id="lastName"
									defaultValue={model.lastName}
									onChange={(e) => model.lastName = e.target.value}
									className="form-control" required />
							</div>
						</div>

						<div className="f-row">
							<div className="f-col">
								<label htmlFor="email" className="form-label">Correo electrónico</label>
								<input type="email" placeholder="Correo electrónico" name="email"
									id="email"
									defaultValue={model.email}
									onChange={(e) => model.email = e.target.value}
									className="form-control" required />
							</div>
						</div>

						<div className="f-row">
							<div className="f-col">
								<label htmlFor="pass" className="form-label">Contraseña</label>
								<input type={stateInputPassModel} placeholder="Contraseña" name="pass"
									id="pass"
									defaultValue={model.pass}
									onChange={(e) => model.pass = e.target.value}
									className="form-control" required />
									<img src={iconver} className={"icons_input"} alt="ver" onClick={() => handleInputType()} />
							</div>
							
						</div>

						<div className="f-row">
							<div className="f-col">
								<label htmlFor="confirmPass" className="form-label">Confirmar contraseña</label>
								<input type="password" placeholder="Confirmar contraseña" name="confirmPass"
									id="confirmPass"
									defaultValue={model.confirmPass}
									onChange={(e) => model.confirmPass = e.target.value}
									className="form-control" required />
							</div>
						</div>

						<div className="f-row">
							<div className="f-col">
								<div style={{ marginTop: '30px' }}>
									<input type="submit" onClick={createAccount} className="btn btn-primary" value="Crear cuenta" />
								</div>
								<Link to='/login'>¿Ya tienes una cuenta? <span>Iniciar sesión</span></Link>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}
