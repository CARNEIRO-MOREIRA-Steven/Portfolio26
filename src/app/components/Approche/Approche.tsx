import React from 'react'
import './approche.css'

const Approche = () => {
    const Phases = [
{
    surtitle: 'Phase 1',
    title: 'Compréhension & cadrage du besoin',
    details: 'Échange autour de votre projet afin de comprendre vos objectifs, vos contraintes et vos attentes. Cette phase permet de poser une base claire avant de démarrer le développement.'
},
{
    surtitle: 'Phase 2',
    title: 'Développement du projet',
    details: 'Une fois le plan validé, je lance ma playlist lofi et je me plonge dans le code. Des premiers écrans au code final, je développe votre projet étape par étape en vous tenant informé de l’avancement.'
},
{
    surtitle: 'Phase 3',
    title: 'Mise en ligne & accompagnement',
    details: 'Après validation finale, je mets le projet en ligne et m’assure de son bon fonctionnement. Je reste disponible pour les ajustements, corrections et évolutions futures.'
}
]
  return (
    <section className='approche container'>
        <h2>Mon <span>approche</span></h2>
        <div className='approche-grid'>
            {Phases.map((phase, index) =>(
                <div key={index} className={`approche-card ${index === 0 || index === 2 ? 'with-cross' : ''}`}>
                {index === 0 || index === 2 ? <span></span> : null}
                    <h3 className='surtitle'>{phase.surtitle}</h3>
                    <h3 className='title'>{phase.title}</h3>
                    <p className='approche-detail'>{phase.details}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Approche