import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
