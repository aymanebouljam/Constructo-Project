import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/frontend/Home.jsx'
import './assets/css/style.scss'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
