import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import Sidebar from '../common/Sidebar.jsx'

function Dashboard() {
  return (
    <>
        <main>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        {<Sidebar />}
                    </div>
                    <div className="col-md-9 dashboard">
                        <div className="card shadow border-0">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <h4>Bienvenue dans l'espace d'Admin</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Dashboard