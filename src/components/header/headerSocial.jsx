import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const headerSocial = () => {
  return <div className="header__socials">
    <a href="https://linkedin.com" target= "_blank"><AiFillLinkedin /></a>
    <a href="https://github.com" target= "_blank"><AiFillGithub /></a>
    <a href="https://facebook.com" target= "_blank"><BsFacebook /></a>
  </div>;
};

export default headerSocial;
