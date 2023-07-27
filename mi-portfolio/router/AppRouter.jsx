import { Routes, Route} from 'react-router-dom'
import '../src/styles.css'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'

export const AppRouter = () => {
  return (
      <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<AboutMe/>}/>
         <Route path='/experience' element={<Experience/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
       
      
      
      )
      
}

