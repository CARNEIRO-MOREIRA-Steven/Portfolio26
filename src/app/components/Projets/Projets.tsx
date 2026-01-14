import React from 'react'
import './projets.css'

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
            ],
            link :'https://lerucherresponsabledepicardie.fr/'
        },
        {
            title : "AURA",
            mission : "Développement d'un site internet pour de la souscription d'abonnement d'entretien",
            image : './Aura-image.png',
            tech : [
                './typescript-logo.png',
                './react-logo.png',
            ],
        },
        {
            title : "Le Moulin de Binard",
            mission : "Intégration d'un site de location de gîte",
            image : './lemoulindebinard.png',
            tech : [
                './WordPress-logo.png',
                './WooCommerce-logo.png',
                './javascript-logo.png',
                './php-logo.png',
                './css3-logo.png',
            ],
            link : 'https://moulin-de-binard.fr/',
        },
        {
            title : "L'espace d'un Instant",
            mission : "Création d'un site de réservation pour une maison d'hôtes",
            image : './lespaced1instant.png',
            tech : [
                './WordPress-logo.png',
                './WooCommerce-logo.png',
                './php-logo.png',
                './css3-logo.png',
            ],
            link :'https://lespaced1instant.com/',
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
                        <div className='link'>
                            <a href={projet.link} target='blank' className='link-projet'>Voir le site en direct</a>
                            <img src="./arrow-up-right.svg"></img>
                        </div> 
                        </div>
                    </div>
                </span>
              ))}
              </div>
        </div>
    </section>
  )
}
