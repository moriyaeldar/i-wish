import React from "react";
import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import Logo2 from "../imgs/logo2.jpeg"
import Logo from "../imgs/logo.jpeg"

export const AppHeader=()=> {
    return (
      <header>
          <div className="nav"> 
          <div className="links">
          <a href="/" className="logo">
          <img className="img-1" src={Logo2} alt="" />
           <img className="img-2" src={Logo} alt="" /> 
              </a>
           
            </div>
          </div> 
      </header>
    );
  }


