import React from 'react'
import './profile.css'
import Links from './links'
import Header from './header'
import Footer from './footer'
import Projects from './projects'


export default function Profile() {
  return (
    <div>
      <div className='header'>
        <div className='img-container'>
          <div className='img-spinner'>
            <img src='images/my_picture.jpg' alt='no' />
          </div>
        </div>
        <div className='name-and-title'>
          <Header />
        </div>
        <div className='links'>
          <Links />
        </div>
      </div>

      <div className='card'>
        <h1>
          Summary
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ea soluta vero nam quos accusantium quae fugiat numquam, reprehenderit ipsum porro pariatur at quod ipsam autem inventore exercitationem eligendi similique.
        </p>
      </div>
      <div className='projects-carousel'>
        <h1>
          Projects
        </h1>
        <Projects/>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ea soluta vero nam quos accusantium quae fugiat numquam, reprehenderit ipsum porro pariatur at quod ipsam autem inventore exercitationem eligendi similique.
        </p>
      </div>
            <div className='card'>
        <h1>
          Experience
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ea soluta vero nam quos accusantium quae fugiat numquam, reprehenderit ipsum porro pariatur at quod ipsam autem inventore exercitationem eligendi similique.
        </p>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}