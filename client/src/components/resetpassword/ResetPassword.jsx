import React from 'react'
import image from '../../assets/inpt.png'
import {Link} from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] flex flex-col justify-between '>
            <div className="inpt__logo">
                <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            </div>
            <div className='flex flex-col justify-center items-center h-[70vh] py-5'>
                <div className='text-center w-[60%]'>
                    <h2 className='text-2xl text-sky-600 font-semibold'>Mot de passe oublié ?</h2>
                    <p className='py-3'>veuillez saisir votre email de connexion afin de recevoir le lien de réinitialisation de votre mot de passe</p>
                </div>
                <form className='flex flex-col justify-center items-center gap-y-3  text-start w-[40%] py-5'>
                    <input type="email" placeholder='Email' className=' border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                    <button className='bg-sky-600 text-white p-2 rounded-xl mt-3 px-5'>Recevoir le lien</button>
                    <div className='w-[100%] text-center'>
                        <Link to='/Connexion'>
                            <a>Retour à la page de connexion</a>
                        </Link>                        
                    </div>
                </form>
            </div>
            <div className="log__copy font-small my-1 px-1">&#169; 2023 Institut National des Postes et Télécommunications</div>
        </div>
        <div className='backimage lg:w-[50%] w-full bg-cover mix-blend-overlay flex justify-center text-center items-center'>
            <div className='w-[70%] h-[80%] flex justify-center text-center items-center'>
                <div className='font-semibold text-white text-[50px] '>
                    Un pas plus prés de votre PFE ...Un pas vers votre Graduation   
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword