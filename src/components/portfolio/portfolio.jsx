import React from 'react'
import './portfolio.css'

import IMG1 from './../../images/portfolio1.jpg'
import IMG2 from './../../images/portfolio2.jpg'
import IMG3 from './../../images/portfolio3.jpg'
import IMG4 from './../../images/portfolio4.jpg'
import IMG5 from './../../images/portfolio5.png'
import IMG6 from './../../images/portfolio6.jpg'

const data =[
  {
    id:1,
    image :IMG1,
    title : 'Crypto currency Dashboard & Financial Visualization',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'

  },
  {
    id:2,
    image :IMG2,
    title : 'Charts templates  & Infographics In Figma',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'


  },
  {
    id:3,
    image :IMG3,
    title : 'Crypto currency Dashboard & Financial Visualization',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'


  },
  {
    id:4,
    image :IMG4,
    title : 'Crypto currency Dashboard & Financial Visualization',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'


  },
  {
    id:5,
    image :IMG5,
    title : 'Crypto currency Dashboard & Financial Visualization',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'


  },
  {
    id:6,
    image :IMG6,
    title : 'Crypto currency Dashboard & Financial Visualization',
    github :'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'


  }
]
const portfolio = () => {
 
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
     {
      data.map(({id, image, title, github, demo })=>{
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        )
      }) 
     }
      
    </div>
      </section>
  )
}

export default portfolio