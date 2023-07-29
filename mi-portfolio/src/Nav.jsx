import React from 'react'
import '../src/styles.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
            <h2>Frank</h2>
        </nav>
        <div className="menu-options-mobile">
            <button><Link to='/home'><img src="./img/home.png" alt="" className="icon"/></Link></button>
            <button className="aboutMe"><Link to='/about'><img src="./img/user.png" alt="" className="icon"/></Link></button>
            <button className="exp"><Link to='/experience'><img src="./img/support.png" alt="" className="icon"/></Link></button>
            <button><Link to='/contact'><img src="./img/linkedin.png" alt="" className="icon"/></Link></button>
        </div>
    </div>
  )
}

export default Nav