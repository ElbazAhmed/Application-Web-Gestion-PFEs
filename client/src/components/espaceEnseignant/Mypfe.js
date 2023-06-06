import React from 'react'

import { useLocation } from 'react-router-dom';


function Mypfe() {
    const location=useLocation();
    const data=location.state;
    console.log(data);
  return (
    <>
        <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Titre :</h2>
                <p className='pl-6'>{data.titre}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Problématique :</h2>
                <p className='pl-6'>{data.problematique}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Entreprise :</h2>
                <p className='pl-6'>{data.entreprise} </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Description :</h2>
                <p className='pl-6'>{data.description}</p>
            </div>
        </div>
        <div className='pt-10'>
                <h2 className='text-xl font-bold'>auteur :</h2>
                <p>
                   <span >Nom </span>: {data.author.nom || ''} {data.author.prenom || ''} <br/>
                   <span>Poste </span>: {data.author.role || ''}
                </p>
                <h2 className='text-xl font-bold'>etudiant :</h2>
                <p>
                   <span >Nom </span>: {data.inscrire ? data.inscrire.nom : ''} { data.inscrire ? data.inscrire.prenom : '' } <br/>
                   <span>Poste </span>: {data.inscrire ? data.inscrire.role : ''}
                   
                </p>
        </div>
    </>
  )
}

export default Mypfe