import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/result' element={<ResultPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
