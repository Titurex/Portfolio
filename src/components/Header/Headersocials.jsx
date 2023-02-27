import React, { Component } from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'

export class Headersocials extends Component {
  render() {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com" target="_blank"><AiFillGithub /></a>
            <a href="https://dribbble.com" target="_blank"><AiFillDribbbleCircle /></a>
      </div>
    )
  }
}

export default Headersocials