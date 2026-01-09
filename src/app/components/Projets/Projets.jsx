import React from 'react'
import './projets.css'
import { link } from 'fs'

export default function Projets (){

    const myProjets=[
        {
            title : "Le Rucher Responsable de Picardie",
            mission : "Développement d'un site vitrine & e-commerce pour un apiculteur",
            image : './lerucherresponsable.png',
            tech : [
                './WordPress-logo.png',
                './WooCommerce-logo.png',
                './css3-logo.png',
                './php-logo.png'
            ],
            link :'https://lerucherresponsabledepicardie.fr/'
        },
        {
            title : "AURA",
            mission : "Développement d'un site internet pour de la souscription d'abonnement d'entretien",
            image : './Aura-image.png'
        },
        {
            title : "Le Moulin de Binard",
            mission : "Intégration d'un site de location de gîte",
            image : './lemoulindebinard.png'
        },
        {
            title : "L'espace d'un Instant",
            mission : "Création d'un site de réservation pour une maison d'hôtes",
            image : './lespaced1instant.png'
        }
    ]
  return (
    <section id='projets'>
        <h2>Une sélection de <span>projets récents</span></h2>
        <div>
            <div className='container-projets-grid'>
              {myProjets.map((projet, index) => (
                <span key={index} className="projet">
                    <div className='background-projet'>
                        <img className='image-projet' src={projet.image} alt="" />
                    </div>
                    <div className='details-projets'>
                    <h3>{projet.title}</h3>
                    <p>{projet.mission}</p>
                    <div>
                        <div className='tech-projet'>
                        {projet.tech?.map((tech , index)=>(
                            <img key={index} src={tech} alt="" />
                        ))}
                        </div>
                        <a href={projet.link} target='blank' className='link-projet'>Vérifier le site en direct</a>
                        </div>
                    </div>
                </span>
              ))}
              </div>
        </div>
    </section>
  )
}
