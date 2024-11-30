import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout