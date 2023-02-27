import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { MdOutlineContactMail } from 'react-icons/md'


function Nav() {
  // State for naviagtion bar
  const [actnav, setactnav] = React.useState('#')




  return (
    <nav>
      <a href="#" onClick={()=>setactnav('#')} className={actnav === '#' ? 'active' : ''}  ><AiOutlineHome /></a>
      
      <a href="#about" onClick={()=>setactnav('#about')} className={actnav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      
      <a href="#experience" onClick={()=>setactnav('#experience')} className={actnav === '#experience' ? 'active' : ''} ><BiBookBookmark /></a>
      
      <a href="#services" onClick={()=>setactnav('#services')} className={actnav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
      
      <a href="#contact" onClick={()=>setactnav('#contact')} className={actnav === '#contact' ? 'active' : ''}><MdOutlineContactMail /></a>
      
    </nav>
  )
}

export default Nav