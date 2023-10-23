import { Route, Routes } from 'react-router-dom'
import Questionnaire from './routes/Questionnaire'
import Home from './routes/Home'
import './App.css'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionnaire' element={<Questionnaire />} />
      </Routes>
    </>
  )
}

export default App
