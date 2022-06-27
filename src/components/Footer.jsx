import React from 'react';
import img_linkedin from '../img/img_linkedin.png';
import img_github from '../img/img_github.png';

const Footer = () => {
    return (
        <div className="bg-dark p-5 border-top">
            <footer>
                <div className="row">
                    <div className="col">
                        <p className="mx-4 my-2 text-center text-white">Derechos reservados Ezequiel Lazarte © 2022</p>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/ezequiel-lazarte">
                            <img className="logo-linkedin mx-2" src={img_linkedin} alt="imagen del logo de linkedin" />
                        </a>
                        <a href="https://github.com/ezequiel-lazarte">
                            <img className="logo-github mx-2" src={img_github} alt="imagen del logo de github" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
