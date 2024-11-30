import Header from "../common/Header"
import Footer from "../common/Footer"
import ProjectImg1 from '../../assets/images/project1.jpg'
import ProjectImg2 from '../../assets/images/project2.jpg'
import ProjectImg3 from '../../assets/images/project3.jpg'
import ProjectImg4 from '../../assets/images/project4.jpg'
import ProjectImg5 from '../../assets/images/project5.jpg'
import ProjectImg6 from '../../assets/images/project6.jpg'

function Projects() {
  return (
    <>
        <main>
            {/* Hero Section */}
            <section className="section-13">
                <div className="hero d-flex align-items-center">
                    <div className="container">
                    <div className="text-left">
                        <span>Excellence. Fiabilité. Expertise.</span>
                        <h1>Nos Réalisations</h1>
                        <p>De la conception à l'achèvement, découvrez comment nos <br/> projets innovants ont transformé des visions en réalités,de nos clients.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
              {/* Our Project */}
            <section className="section-14 p-4  bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span>Nos Projets</span>
                        <h2>Notre Large Gamme de Projets</h2>
                        <p>Nous offrons une gamme complète de services de construction.</p>
                    </div>
                    <div className="row p-4">
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg1} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Casablanca</h3>
                                    </div>
                                    <div className="project-content">
                                        <p>Le projet de Casablanca vise à moderniser le quartier des affaires avec des bureaux et commerces.</p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg2} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Marrakech</h3>
                                    </div>
                                    <div className="project-content">
                                        <p>Le projet de Marrakech se concentre sur la création d'un complexe touristique intégrant des hôtels, des restaurants.</p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg3} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Fès</h3>
                                </div>
                                <div className="project-content">
                                    <p>Le projet de Fès inclut la rénovation et préservation des bâtiments historiques dans la médina, valorisant le patrimoine culturel.</p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg4} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Tanger</h3>
                                </div>
                                <div className="project-content">
                                    <p>Le projet de Tanger développe une zone industrielle moderne, attirant de nouvelles entreprises et créant des emplois.</p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg5} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Laayoune</h3>
                                </div>
                                <div className="project-content">
                                    <p>Le projet de Laayoune développe un barrage d'eau moderne, assurant une gestion durable des ressources hydriques.
                                    </p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="item">
                                <div className="project-image">
                                    <img src={ProjectImg6} className='w-100' />
                                </div>
                                <div className="project-body">
                                    <div className="project-title">
                                    <h3>Projet de Rabat</h3>
                                </div>
                                <div className="project-content">
                                    <p>Le projet de Rabat développe un pont moderne, facilitant la circulation et les échanges.
                                    </p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
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

export default Projects