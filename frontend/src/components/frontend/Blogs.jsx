import Header from "../common/Header"
import Footer from "../common/Footer"
import BlogImg1 from '../../assets/images/blog1.jpg'
import BlogImg2 from '../../assets/images/blog2.jpg'
import BlogImg3 from '../../assets/images/blog3.jpg'
import BlogImg4 from '../../assets/images/blog4.jpg'
import BlogImg5 from '../../assets/images/blog5.jpg'
import BlogImg6 from '../../assets/images/blog6.jpg'

function Blogs() {
  return (
    <>
        <main>
               {/* Hero Section */}
               <section className="section-15">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Compétence. Engagement. Savoir-faire.</span>
                                <h1>Notre Blog</h1>
                                <p>Découvrez nos dernières publications, conseils pratiques,<br/> et analyses d'experts sur les tendances et innovations en construction. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                 {/* Blog */}
            <section className="section section-16 py-5">
                <div className="container">
                    <div className="section-header text-center">
                        <span>Actualités & Publications</span>
                        <h2>Nos Articles</h2>
                        <p>Explorez les nouvelles tendances, les découvertes récentes et les perspectives d'experts dans le domaine de la construction.</p>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg1} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Sécurité et Régulations</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg2} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Construire Écologique</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg3} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Tech de Chantier</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg4} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Sécurité et Régulations</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg5} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Sécurité et Régulations</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg6} className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href='#' className='title'>Sécurité et Régulations</a>
                                    </div>
                                        <a href='#' className='btn btn-primary small'>Lire plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Blogs