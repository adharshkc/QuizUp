import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/quiz' element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
