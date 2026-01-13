import React from 'react'
import './logo-skills.css'

const LogoSkills = () => {
    const Skills = [
      {
        img : './logo_o2switch.png',
        name : 'o2Switch'
      },
      {
        img : './vercel.jpg',
        name : 'Vercel'
      },
      {
        img : './git.png',
        name : 'Git'
      },
      {
        img : './figma.png',
        name : 'Figma'
      },
  ]
  return (
    <section className='logo-container'>
        {Skills.map((skill, index) => (
          <div key={index} className='logo-and-name'>
            <img src={skill.img} className='logo' alt={'logo ' + skill.name} />
            <h2>{skill.name}</h2>
          </div>
        ))
        }
    </section>
  )
}

export default LogoSkills
