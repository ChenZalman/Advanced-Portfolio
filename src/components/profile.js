import React from 'react'
import './profile.css'
import Links from './links'
import Header from './header'
import Footer from './footer'
import Projects from './projects'
import about from '../data/about'
import dataExperiences from '../data/experiences'
import Experience from './Experience'
import SecureCloudinaryImage from './cloudinary'

export default function Profile() {
  return (
    <div className='profile'>
      <div className='header'>
        <div className='img-container'>
          <div className='img-spinner'>
            <SecureCloudinaryImage id="profile-image" publicId={"my_picture_vrb9vt.jpg"}/>
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
          About
        </h1>
        <p>
          {about}
        </p>
      </div>
      <div className='projects-carousel'>
        <h1>
          Projects
        </h1>
        <Projects />
      </div>
      <div className='card'>
        <h1>
          Experience
        </h1>
        {dataExperiences.map((experience,i) => (
          <Experience props={experience} key={i} />
        ))}
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}