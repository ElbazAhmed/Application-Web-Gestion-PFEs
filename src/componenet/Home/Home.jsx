import React from 'react'
import inpt from '../../assets/inpt.png'
import './home.css'
const Home = () => {
  return (
    <>
    <header className='Container max-w-full h-9 items-center leading-9 bg-black text-white flex justify-between'>
        <div className="Contact flex gap-1">
            <span><i class='bx bxs-phone'></i>+212000000000</span>
            <span>|</span>
            <span><i class='bx bxs-envelope' ></i>inpt@inpt.ac.ma</span>
        </div>
        <div className="social__contact flex gap-2 text-white">
        <a href="#"><i class='bx bxl-facebook-circle' ></i></a>
        <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        </div>
    </header>
    <nav className='Container max-w-full flex justify-between items-center bg-white text-black py-4'>
        <div className="nav__logo" ><img src={inpt} alt="inpt logo" /></div>
        <div className="nav__link">
            <ul className="nav__list flex gap-4">
                <li className="nav__link"><a href="#">Acceuil</a></li>
                <li className="nav__link"><a href="#">Mon espace</a></li>
                <li className="nav__link"><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="nav__buttons flex gap-2">
            <button className="nav__button">Connexion</button>
            <button className="nav__button insc">Créer un compte</button>
        </div>
    </nav>
    <main className="Container max-w-full backimage2 text-white">
        <section className="Container py-9 text-lg font-bold">
            <div className="home__text">Réussir Ton</div>
            <div className="home__text text-end">Projet de Fin d’études</div>
        </section>
        <section className="Container main__buttons flex items-center py-9 ">
            <button className="main__button m-auto ">Espace etudiant</button>
            <button className="main__button m-auto">Espace enseignant</button>
            <button className="main__button m-auto">Espace admin</button>
        </section>
    </main>
    </>
  )
}

export default Home