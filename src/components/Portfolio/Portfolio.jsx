import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  const data = [
    {
      id: 1,
      image: img1,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
    {
      id: 2,
      image: img2,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
    {
      id: 3,
      image: img3,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
    {
      id: 4,
      image: img4,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
    {
      id: 5,
      image: img5,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
    {
      id: 6,
      image: img6,
      title: 'some Project to develop',
      github: 'github link',
      demo: 'demolink'

    },
  ]


  const portfolio = data.map(project =>

    <article key={project.id} className='portfolio__item'>
      <div className='porfolio__item-image'>
        <img src={project.image} alt={project.title} />
      </div>

      <h3>{project.title}</h3>

      <div className='portfolio__item-cta'>
        <a href={project.github} className='btn' target="_blank">Github</a>
        <a href={project.demo} className='btn btn-primary' target="_blank">live Demo</a>

      </div>

    </article>
  
  )






  return (
    <section id="portfolio">
      <h5>
        My Recent Work
      </h5>

      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolio
        }

      </div>
    </section>
  )
}

export default Portfolio