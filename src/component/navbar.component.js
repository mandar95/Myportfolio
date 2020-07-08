import React from 'react';

export default function Navbar() {

    return (
            <nav className="navbar navbar-expand-sm bg-white navbar-light fixed-top">
            <a className="navbar-brand" href="#"><span className="my-logo-m">MJ</span>&nbsp;Studio</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsibleNavbar" style={{}}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skill">Skill</a>
                </li>    
              </ul>
            </div>  
          </nav>



       
    )
}