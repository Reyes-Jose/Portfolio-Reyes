import React from "react";
import "./NavBarStyle.css"



function NavBar( { currentPage, handlePageChange }){
  return (
    <nav className = "nav">
      <a href="/" className="myName">Jose Reyes</a>
      <ul>
        <li>
          <a href="/About" 
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          
          >About</a>
        </li>
        <li>          
          <a href="/Portfolio" 
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}

          >Portfolio</a>
        </li>
        <li>
          <a href="/Contact" 
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}

          >Contact</a>
        </li>
        <li>          
          <a href="/Resume" 
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}

          >Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;