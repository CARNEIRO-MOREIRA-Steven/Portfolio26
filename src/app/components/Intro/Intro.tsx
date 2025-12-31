"use client"
import React from 'react'
import './intro.css'

import { useState } from "react";

const Intro = () => {
  const myStack = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Figma",
    "Redux"
  ];

  const [copied, setCopied] = useState(false);
  const email = "codemetasolutions@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // remet à false après 2s
      })
      .catch(err => console.error("Erreur copie :", err));
  };

  return (
    <section className='container-grid' id='about'>
        <div className='div1'>
          <img src="./Button.png" alt="" className='intro-button'/>
          <h2>Passionné par la création d’interfaces modernes.
          J’aime transformer des idées en expériences web.</h2>
          <img src="./Button2.png" alt="" className='intro-button2'/>
        </div>
        <div className='div2'>
          <h2>Disponible pour collaborer dans le monde entier.</h2>
        </div>
        <div className='div3'>
            <div>
            <h2>Ma stack tech</h2>
            <h3>En constante amélioration</h3>
            <aside className='container-stack'>
              <div className='container-stack-grid'>
              {myStack.map((tech, index) => (
                <span key={index} className="stack-item">
                  {tech}
                </span>
              ))}
              </div>
            </aside>
            </div>
        </div>

        <div className='div4'>
            <h2>Passionné de technologie et de développement.</h2>
            <img src="./input.png" alt="" />
        </div>
        <div className='div5'>
            <h2>Souhaitez-vous démarrer un projet ensemble ?</h2>
            <a className='button-mail' onClick={handleCopy}>{copied ? "Copié !" : "Copier mon email"}<img src="./Card.png" alt="" /></a>
        </div>
        <div className='div6'>
            <h2>Création de sites web <br></br> animés et dynamiques</h2>
            <h3>Ce qui se passe</h3>
            <img src="./AnimeJS.png" alt="" className='image-code'/>
        </div>
    </section>
  )
}

export default Intro