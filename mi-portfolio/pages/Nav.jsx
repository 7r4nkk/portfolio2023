import React from 'react'
import '../src/styles.css'
const Nav = () => {
  return (
    <header>
        <nav>
            <h2>Frank</h2>
        </nav>
        <div className="menu-options-mobile">
            <button><img src="./img/home.png" alt="" className="icon"/></button>
            <button className="aboutMe"><img src="./img/user.png" alt="" className="icon"/></button>
            <button className="exp"><img src="./img/support.png" alt="" className="icon"/></button>
            <button><img src="./img/linkedin.png" alt="" className="icon"/></button>
        </div>
    </header>
  )
}

export default Nav