import React from 'react'
import image from '../../assets/inpt.png'

const Connexion = () => {
  return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] '>
            <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            <div className='flex flex-col justify-center items-center h-[70vh] py-5'>
                <div className='text-center'>
                    <h2 className='text-2xl text-sky-600'>CONNEXION AU COMPTE</h2>
                    <p className='py-3 text-xl font-medium'>Content de te revoir! veuillez saisir vos <br /> coordonnées</p>
                </div>
                <form className='flex flex-col justify-center items-center gap-y-3  text-start w-[40%]'>
                    <div className='w-[100%] font-semibold'><h3>Adresse email :</h3></div>
                    <input type="email" placeholder='Email' className=' border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                    <div className='w-[100%] font-semibold'><h3>Mot de passe :</h3></div>
                    <input type='password' placeholder='Mot de passe' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                    <div className='w-[100%] text-end'><a href="#" >Mot de passe oublié ?</a></div>
                    <button className='bg-sky-600 text-white p-2 rounded-xl mt-3 px-5'>Connexion</button>
                    <div className='w-[100%] text-center'><a href="#" >Vous n'avez pas de compte ?</a></div>
                </form>
            </div>
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

export default Connexion