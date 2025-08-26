import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './links.css'
import { SiGmail } from 'react-icons/si';

export default function Links() {

    const openLink = (url) => {
        console.log("opening new window")
        window.open(url, '_blank')
    }
    const handleClick = () =>{
        navigator.clipboard.writeText(process.env.REACT_APP_EMAIL)
        alert("Email copied to your clipboard!\nSend email now!")
    }

    return (
        <div>
            <FaLinkedin className='icon' size={40} onClick={() => openLink(process.env.REACT_APP_LINKEDINURL)} />
            <FaGithub className='icon' size={40} onClick={() => openLink(process.env.REACT_APP_GITHUBURL)} />
            <SiGmail className='icon' size={40} onClick={() => handleClick()}/>
        </div>
    )
}
