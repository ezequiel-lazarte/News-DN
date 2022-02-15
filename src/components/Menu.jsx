import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../FirebaseConfig';

const Menu = () => {
    const historial = useNavigate();
    const [usuario, setUsuario] = useState(null);
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUsuario(user.email);
            }
        });
    }, []);

    const CerrarSesion = () => {
        auth.signOut();
        setUsuario(null);
        historial.push('/acceso');
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                <ul className="navbar-nav mr-auto">
                    {
                        usuario ? 
                        (
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                        )
                        :
                        (
                            <span></span>
                        )
                    }
                    
                    <li className="nav-item">
                        {
                            
                            !usuario ? 
                            (
                               <Link className="nav-link" to="/acceso">Acceso</Link>
                            )
                            :
                            (
                                <span></span>
                            )
                        }
                    </li>
                    <li className="nav-item">
                        {
                            usuario === 'admin@admin.com' ? 
                            (
                                <Link className="nav-link" to="/admin">Admin</Link>
                            )
                            :
                            (
                                <span></span>
                            )
                        }
                    </li>
                </ul>
                {
                    usuario != null ? 
                    (
                        <button 
                            onClick={CerrarSesion}
                            className="btn btn-danger mx-2"
                        >Cerrar Sesión</button>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    );
}

export default Menu;
