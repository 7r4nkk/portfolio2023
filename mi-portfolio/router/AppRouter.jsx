import { Routes, Route} from 'react-router-dom'
import '../src/styles.css'
import Home from '../pages/Home'

export const AppRouter = () => {
  return (
      <Routes>
         <Route path='/home' element={<Home/>}/>
      </Routes>
       
      
      
      )
      
}

