import React from 'react'
import inpt from '../../assets/inpt.png'

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
        <i class='bx bxl-facebook-circle' ></i>
        <i class='bx bxl-linkedin-square' ></i>
        <i class='bx bxl-twitter'></i>
        </div>
    </header>
    <nav className='Container max-w-full flex justify-between bg-white text-black h-14'>
        <div className="nav__logo" className='w-24'><img src={inpt} alt="inpt logo" /></div>
        <div className="nav__link">
            <ul className="nav__list flex gap-4">
                <li className="nav__link"><a href="#">Acceuil</a></li>
                <li className="nav__link"><a href="#">Mon espace</a></li>
                <li className="nav__link"><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="nav__button">
            <button className="nav__button">Connexion</button>
            <button className="nav__button">Créer un compte</button>
        </div>
    </nav>
    </>
  )
}

export default Home