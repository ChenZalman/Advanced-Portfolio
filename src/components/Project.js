import React from 'react'
import SecureCloudinaryImage from './cloudinary'

export default function Project({props}) {
  return (
    <div className='project'>
      <h4>{props.title}</h4>
      <div className='project-image'>
      <SecureCloudinaryImage publicId={props.image}/>
      </div>
      <p>{props.description}</p>
    </div>
  )
}
