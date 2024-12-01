import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import ServiceImg1 from '../../assets/images/service1.jpg'
import ServiceImg2 from '../../assets/images/service2.jpg'
import ServiceImg3 from '../../assets/images/service3.jpg'
import ServiceImg4 from '../../assets/images/service4.jpg'
import ServiceImg5 from '../../assets/images/service5.jpg'
import ServiceImg6 from '../../assets/images/service6.jpg'

function Services() {
  return (
    <>
        <Header/>
        <main>
            {/* Hero Section */}
            <section className="section-11">
                <div className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="text-left">
                            <span>Excellence. Fiabilité. Innovation.</span>
                            <h1>Nos Services</h1>
                            <p>Nous fournissons une variété étendue de services de construction,<br/> couvrant des projets résidentiels, commerciaux et industriels.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Services */}
            <section className="section-12 p-4 bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <span>Nos Services</span>
                    <h2>Nos services de construction</h2>
                    <p>Nous assurons des solutions complètes en construction, intégrant des projets résidentiels, commerciaux et industriels avec expertise et innovation.</p>
                </div>
                <div className="row p-4">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg1} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Spécialisée</h3>
                                </div>
                                <div className="service-content">
                                    <p>Un secteur de niche axé sur les projets nécessitant des compétences, des matériaux innovants.
                                    </p>
                                </div>
                                <a href="" className="btn btn-primary small">Lire Plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg2} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Civile</h3>
                                </div>
                                <div className="service-content">
                                    <p>La construction civile englobe des projets d'infrastructure tels que les routes, ponts, tunnels et systèmes d'eau.</p>
                                </div>
                                <a href="" className="btn btn-primary small">Lire Plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg3} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Résidentielle</h3>
                                </div>
                                <div className="service-content">
                                    <p>La construction résidentielle se concentre sur la création de maisons et d'immeubles d'habitation.
                                    </p>
                                </div>
                                <a href="" className="btn btn-primary small">Lire Plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg4} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Corporative</h3>
                            </div>
                            <div className="service-content">
                                <p>La construction corporative concerne les projets de bureaux et de sièges sociaux.
                                </p>
                            </div>
                            <a href="" className="btn btn-primary small">Lire Plus</a>

                            </div>
                        </div>
                    </div>
                     <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg5} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Industrielle</h3>
                                </div>
                                <div className="service-content">
                                    <p>La construction industrielle est un secteur clé de l'industrie, axé sur les projets nécessitant des compétences avancées.</p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire Plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                        <div className="item">
                            <div className="service-image">
                                <img src={ServiceImg6} className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                <h3>Construction Écologique</h3>
                                </div>
                                <div className="service-content">
                                    <p>La construction écologique vise à minimiser l'impact environnemental des projets de construction.</p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    
  )
}

export default Services