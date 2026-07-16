import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className=''>
        <p>Copyright © CARNEIRO-MOREIRA Steven</p>
        <div className='link-footer'>
            <a href="https://www.instagram.com/codemeta.solutions/" target='blanck'><img src="./instagram.svg" alt="" /></a>
            <a href="https://github.com/CARNEIRO-MOREIRA-Steven" target='blanck'><img src="./github.svg" alt="" /></a>
            <a href="https://wa.me/message/MOMMITNW4ZU2H1" target='blanck'><img src="./whatsapp.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/" target='blanck'><img src="./linkedin.svg" alt="" /></a>
            <a href="https://www.malt.fr/profile/codemetasolutions" target='blanck'><img className='malt-img' src="./malt.png" alt="" /></a>
          <script src="https://www.lafabriquedunet.fr/agences/badge/codemeta-solutions/badge.js?color=dark" defer></script>
        </div>
    </footer>
  )
}

export default Footer
