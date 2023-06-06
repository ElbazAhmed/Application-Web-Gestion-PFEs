
import image from '../../assets/inpt.png'
import emailjs from '@emailjs/browser';
import {Link} from "react-router-dom";
import React, { useRef } from 'react'

const Contact = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p9dfulq','template_pmsi3nq', form.current, 'SWrUWkHSXzaxla2oW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };
  return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] flex flex-col justify-between'>
            <div className="inpt__logo">
                <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            </div>
            <div className='flex justify-center items-center text-center'>
                <div className="contact__container grid w-[70%] ">
                    <div className="contact__info">
                        <h2 className="contact__title text-2xl text-sky-600 font-semibold py-3">Contacter nous</h2>
                    </div>
                    <form action="" className="contact__form " ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-group">
                            <div className="contact__form-div py-1">
                                <input type="text" className="contact__form-input border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]" name='name' placeholder='Votre nom' 
                                  required/>
                            </div>

                            <div className="contact__form-div py-1">
                                <input type="email" className="contact__form-input border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]" name='email' placeholder='Votre email' 
                                 required/>
                            </div>
                        </div>
                        <div className="contact__form-div py-1">
                                <input type="text" className="contact__form-input border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]" name='subject' placeholder='Sujet' 
                                 required/>
                        </div>
                        <div className="contact__form-div contact__form-area py-1">
                            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input border-sky-600 border-2 rounded-lg pl-2 w-[100%] h-[90px] resize-none' placeholder='Votre message.....'
                              required></textarea>
                        </div>
                        <button type='submit' className="bg-sky-600 text-white p-2 rounded-xl mt-3 px-5">Envoyer</button>
                    </form>
                </div>
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

export default Contact