import React from 'react'
import './intro.css'

const Intro = () => {
  const myStack = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Figma",
    "Redux"
  ];

  return (
    <section className='container-grid '>
        <div className='div1'></div>
        <div className='div2'></div>
        <div className='div3'>
            <div>
            <h2>Ma stack technologique</h2>
            <h3>Je m'efforce constamment de m'améliorer</h3>
        <aside className='container-stack'>
          {myStack.map((tech, index) => (
            <span key={index} className="stack-item">
              {tech}
            </span>
          ))}
        </aside>
        </div>
        </div>

        <div className='div4'>
            <h2>Passionné de technologie et de développement.</h2>
            <img src="./input.png" alt="" />
        </div>
        <div className='div5'>
            Souhaitez-vous démarrer un projet ensemble ?
            <button><img src="./Card.png" alt="" />Copier mon mail</button>
        </div>
        <div className='div6'>
            <h2>J'aime développer avec des <br></br>
            bibliothèque d'animations JS</h2>
        </div>
    </section>
  )
}

export default Intro