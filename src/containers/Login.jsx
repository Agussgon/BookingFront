import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

//
import { Link } from "react-router-dom";
import { useState } from "react";

//Login en proceso con jwt

export const Login = ()=>{

    // objeto usuario 

    const [user,setUser]= useState({
        email:'',
        password:''
    })

    const handleSubmit = (e)=> {
        e.preventDefault();
       
        const handleSubmit = (e) => {
            e.preventDefault()
            setUser({
                email: '',
                password: ''
            })
            localStorage.setItem('logged', JSON.stringify(user))
        }
    
    };


    return(
        <>
        <Navbar/>
        <div className="f-col f-center">
				

				<div className="f-row f-center">
					<form onSubmit={handleSubmit}>
           
          
						<div className="f-row">
							<div className="f-col">
							    <label>Email</label>
                                <input  />	
                            </div>
						</div>

						<div className="f-row">
							<div className="f-col">
								         
                            <label>Password</label>
                            <input  />
							</div>

			
						</div>

					

						<div className="f-row">
							<div className="f-col">
								<div style={{ marginTop: '30px' }}>
									<input type="submit" onClick={handleSubmit} className="btn btn-primary" value="ingresar" />
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
