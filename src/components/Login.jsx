import React, {useState} from 'react';
import {auth} from '../FirebaseConfig';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const historial = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);

    const RegistrarUsuario = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => {
                historial.push('/');
            })
            .catch(err => {
                if(err.code === "auth/weak-password") {
                    setMsgError('La contraseña debe tener 6 caracteres o mas');
                }
                if(err.code === "auth/invalid-email") {
                    setMsgError('Formato de e-mail incorrecto');
                }
                if(!pass.trim()) {
                    setMsgError('La contraseña no puede estar vacia');
                }
                if(!email.trim()) {
                    setMsgError('El campo Email no puede estar vacio');
                }
            })
    }

    const IniciarSesion = (e) => {
        auth.signInWithEmailAndPassword(email, pass)
        .then(r => {
            historial.push('/');
        })
        .catch(err => {
            if(err.code === 'auth/wrong-password') {
                setMsgError('Contraseña incorrecta');
            }
            if(err.code === 'auth/user-not-found') {
                setMsgError('e-mail incorrecto');
            }
            if(!pass.trim()) {
                setMsgError('La contraseña no puede estar vacia');
            }
            if(!email.trim()) {
                setMsgError('El campo Email no puede estar vacio');
            }
        });
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <h4 className="title-h4 mb-3">Registrarse o iniciar sesión</h4>
                <form className="form-group" onSubmit={RegistrarUsuario}>
                    <input 
                        onChange={(e) => {setEmail(e.target.value)}}
                        className="form-control mt-4 mb-4"
                        placeholder="Correo electrónico"
                        type="email" 
                    />
                    <input 
                        onChange={(e) => {setPass(e.target.value)}}
                        className="form-control mt-4 mb-4"
                        placeholder="Introduce tu contraseña"
                        type="password" 
                    />
                    <input 
                        className="btn btn-dark w-100 mt-4 mb-4"
                        value="Registrar usuario"
                        type="submit" 
                    />
                </form>
                <button 
                    onClick={IniciarSesion}
                    className="btn btn-success w-100"
                >Iniciar sesión</button>
                {
                    msgError != null ? 
                    (
                        <div className="alert alert-danger mt-4 mb-4 align-midle">{msgError}</div>
                    ) 
                    : 
                    (
                        <span></span>
                    )
                }
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Login;
