import React from 'react'
import '../src/styles.css'
const Nav = () => {
  return (
    <header>
        <nav>
            <h2>Frank</h2>
        </nav>
        <div className="menu-options-mobile">
            <button><img src="./img/home.png" alt="" class="icon"/></button>
            <button class="aboutMe"><img src="./img/user.png" alt="" class="icon"/></button>
            <button class="exp"><img src="./img/support.png" alt="" class="icon"/></button>
            <button><img src="./img/linkedin.png" alt="" class="icon"/></button>
        </div>
    </header>
  )
}

export default Nav