import React from 'react'
import './experience.css'

const Experience = () => {
    const Experiences = [
        {
            image : './developpeur.png',
            title :'Développeur Frontend',
            details :'Développement d’interfaces web en React et Next.js, avec une attention particulière à la qualité du code. Intégration de maquettes et mise en place de fonctionnalités frontend.',
        },
        {
            image : './mobile-app.png',
            title :'Intégrateur Frontend / Développeur UI',
            details :'Intégration d’interfaces utilisateur à partir de maquettes, optimisation de l’affichage sur tous les supports et amélioration de l’ergonomie des pages.',
        },
        {
            image : './ampoule.png',
            title :'Développeur Web Freelance',
            details :'Réalisation de sites web et d’interfaces sur mesure pour des clients, de l’intégration frontend à la mise en ligne. Travail en autonomie, échanges directs avec les clients et adaptation aux besoins métier.',
        },
        {
            image : './dev2.png',
            title :'Applications Web',
            details :'Développement de fonctionnalités frontend pour des applications web : pages dynamiques, formulaires, gestion des données',
        },

    ]
  return (
    <section className='experience-container'>
        <h2>Mon <span>expérience professionnelle</span></h2>
        <div className='experience-grid'>
            {Experiences.map((experience, index)=>(
                <div key={index} className='experience-content'>
                <img src={experience.image} alt={'image ' + experience.title} />
                <div className='experience-content-details'>
                    <h3>{experience.title}</h3>
                    <p>{experience.details}</p>
                </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience