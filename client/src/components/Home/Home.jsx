import React from 'react'
import inpt from '../../assets/inpt.png'
import './home.css'
import {Link} from "react-router-dom";
import Registre from '../../registrationPage/Registre';
const Home = () => {
  return (
    <>
    <header className='Container max-w-full h-9 items-center leading-8 bg-black text-white flex justify-between'>
        <div className="Contact flex gap-1 ">
            <span><i class='bx bxs-phone pr-1'></i>+212538002700</span>
            <span>|</span>
            <span><i class='bx bxs-envelope pr-1' ></i>contact@inpt.ac.ma</span>
        </div>
        <div className="social__contact flex gap-2 text-white">
        <a href="https://www.facebook.com/www.inpt.ac.ma" target="_blank"><i class='bx bxl-facebook-circle' ></i></a>
        <a href="https://www.linkedin.com/in/inpt-rabat-370378a6/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
        <a href="https://twitter.com/INPTRabat" target="_blank"><i class='bx bxl-twitter'></i></a>
        </div>
    </header>
    <nav className='Container max-w-full flex justify-between items-center bg-white text-black py-4'>
        <div className="nav__logo" ><img src={inpt} alt="inpt logo" /></div>
        <div className="nav__links">
            <ul className="nav__list flex gap-6 font-semibold">
                <li className="nav__link"><a href="/">Acceuil</a></li>
                <li className="nav__link">
                    <Link to='/Connexion'>
                        <a>Mon espace</a>
                    </Link>
                </li>
                <li className="nav__link">
                    <Link to='/Contact'>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="nav__buttons flex gap-2">
            <Link to='/Connexion'>
            <button className="nav__button">Connexion</button>
            </Link>
        </div>
    </nav>
    <main className="Container max-w-full backimage2 text-white">
        <section className="Container py-9 text-lg font-semibold">
            <div className="home__text">Réussir Ton</div>
            <div className="home__text text-end">Projet de Fin d’études</div>
        </section>
        <section className="Container main__buttons flex items-center py-9 ">
            <Link className='m-auto' to={'/Connexion'}>
            <button className="main__button m-auto ">Espace etudiant</button>
            </Link>
            <Link className='m-auto' to='/Connexion'>
            <button className="main__button ">Espace enseignant</button>
            </Link>
            <Link className='m-auto' to='/Connexion'>
            <button className="main__button ">Espace admin</button>
            </Link>
        </section>
    </main>
    <footer className='Container max-w-full'>
        <div className="footer__socials h-9 items-center leading-9 flex justify-between py-5">
            <div className="location">
                <a href="#" target="_blank"><i class='bx bxs-map'></i>l’Institut National des Postes et Télécommunications (INPT), avenue Allal Al Fassi – Madinat Al Irfane - Rabat.</a>
            </div>
            <div className="social__contact flex gap-2 text-black">
                <a href="https://www.facebook.com/www.inpt.ac.ma" target="_blank"><i class='bx bxl-facebook-circle' ></i></a>
                <a href="https://www.linkedin.com/in/inpt-rabat-370378a6/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
                <a href="https://twitter.com/INPTRabat" target="_blank"><i class='bx bxl-twitter'></i></a>
            </div>
        </div>
        <div className="footer__copy text-center py-4">&#169; 2023 Institut National des Postes et Télécommunications</div>
    </footer>
    </>
  )
}

export default Home