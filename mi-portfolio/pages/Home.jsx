import React from 'react'
import '../src/styles.css'
import '../styles/Home.css'
const Home = () => {
  return (
    <div className='bodyHome'>
      <div className='card'>
        <img src="../public/img/profile.jpg" alt="" className='profile' />
        <div className='textContainer'>
          <h3 className='textHome'>Hola! Bienvenido a mi portfolio, mi nombre es Frank y soy desarrollador full-stack.</h3>
        </div>
      </div>
    </div>
  )
}

export default Home