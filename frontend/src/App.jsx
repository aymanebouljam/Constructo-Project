import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/frontend/Home.jsx'
import About from './components/frontend/About.jsx'
import Services from './components/frontend/Services.jsx'
import Projects from './components/frontend/Projects.jsx'
import Blogs from './components/frontend/Blogs.jsx'
import ContactUs from './components/frontend/ContactUs.jsx'
import Login from './components/backend/Login.jsx'
import Dashboard from './components/backend/Dashboard.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.scss'
import Layout from './components/common/Layout.jsx'
import RequireAuth from './components/common/RequireAuth.jsx'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/admin/login' element={<Login/>}/>
            <Route path='/admin/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}/>
          </Route>
        </Routes>
     </BrowserRouter>
     <ToastContainer position='top-center' />
    </>
  )
}

export default App
