import React from 'react'
import SecureCloudinaryImage from './cloudinary'

export default function Project({props}) {
  return (
    <div style={{outline:'1px salmon solid', justifyItems:'center'}}>
      <h4>{props.title}</h4>
      <div style={{height:'300px', width:'300px', outline:'1px white solid'}}>
      <SecureCloudinaryImage publicId={props.image}/>
      </div>
      <p>{props.description}</p>
    </div>
  )
}
