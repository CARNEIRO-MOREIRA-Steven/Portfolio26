import React from 'react';
import './contact.css';
import '../../../../src/app/general.css'

const Contact = () => {
  return (
    <section className='container contact'>
        <h2>Prêt à faire passer <span>votre présence</span> numérique <br /> à la vitesse supérieure ?</h2>
        <p>Contactez-moi dès aujourd'hui et discutons de la manière <br /> dont je peux vous aider à atteindre vos objectifs.</p>
        <a className='button' href="mailto:codemetasolutions@gmail.com">Contactez-moi maintenant <img src="./Arrow.png" alt="image copier coller" /></a>
    </section>
  )
}

export default Contact