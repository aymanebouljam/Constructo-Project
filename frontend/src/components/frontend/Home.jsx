import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import AboutImg from '../../assets/images/aboutUs.jpg'
import HeroVideo from '../../assets/images/hero.mp4';
import ProjectImg1 from '../../assets/images/project1.jpg'
import ProjectImg2 from '../../assets/images/project2.jpg'
import ProjectImg3 from '../../assets/images/project3.jpg'
import Icon1 from '../../assets/images/icon1.svg'
import Icon2 from '../../assets/images/icon2.svg'
import AvatarImg1 from '../../assets/images/avatar1.jpg'
import AvatarImg2 from '../../assets/images/avatar2.jpg'
import AvatarImg3 from '../../assets/images/avatar3.jpg'
import AvatarImg4 from '../../assets/images/avatar4.jpg'
import AvatarImg5 from '../../assets/images/avatar5.jpg'
import AvatarImg6 from '../../assets/images/avatar6.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import LatestServices from '../common/LatestServices.jsx';

    const Home = () => {
      
        const star = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
    return (
        <>
        <Header/>
        <main>
            {/* Hero section */}
            <section className="section-1">
                <div className="hero">
                    <div className="container-fluid d-flex flex-column align-items-center justify-content-center  py-5">
                        <div className="hero-video">
                            <video autoPlay muted loop>
                                <source src={HeroVideo} type='video/mp4' />
                            </video>
                        </div>
                        <div className="overlay"></div>
                        <div className="text-center">
                            <span>Bienvenue chez Constructo</span>
                            <h1>Concrétiser vos rêves avec <br/> précision et excellence</h1>
                            <p>Nous excellons dans la transformation des visions en réalité grâce à un artisanat exceptionnel et une attention <br/> méticuleuse. Avec des années d'expérience et un engagement envers la qualité</p>
                            <div className=" hero-btn mx-auto w-50 d-flex justify-content-evenly py-3">
                                    <a className='btn btn-primary large'>Contactez Nous</a>
                                    <a className='btn btn-secondary large'>Voir Projets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About us section */}
            <section className="section-2">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={AboutImg} className='w-100'/>
                    </div>
                    <div className="col-md-6 p-3">
                        <span>À propos de nous</span>
                        <h2>Des structures durables</h2>
                        <p>Construire des structures durables nécessite une approche globale qui combine matériaux avancés, conception résiliente, entretien régulier et pratiques durables. En s'appuyant sur des connaissances historiques et en utilisant la technologie moderne.</p>
                        <p>La conception de structures qui résistent à l'épreuve du temps implique un mélange harmonieux de matériaux de pointe, de conceptions durables, d'entretien continu et de pratiques écologiques.</p>
                    </div>
                </div>
            </div>
            </section>
            {/* Our Services */}
            <LatestServices/>
            {/* Why choose us */}
            <section className="section-4 ">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Pourquoi nous choisir</span>
                        <h2>Notre engagement envers l'excellence</h2>
                        <p>Grâce à notre collaboration étroite avec les clients et les partenaires, nous mettons à profit notre expertise industrielle.</p>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-6 col-xl-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon1} className='w-25'/>
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Solutions de pointe</h3>
                                </div>
                                <p>Les petites actions créent de grands impacts. Tout commence et se termine avec chaque employé s'engageant à adopter des pratiques de travail plus sûres quotidiennement, garantissant ainsi leur retour chez eux en sécurité.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} className='w-25'/>
                                </div>
                                <div className="card-title mt-3">
                                <h3>Stratégies Innovantes</h3>
                                </div>
                                <p>Chaque détail compte. Notre équipe met en avant des stratégies innovantes qui améliorent l'efficacité et la sécurité sur le chantier. Cet engagement garantit que chaque projet est achevé selon les normes les plus élevées.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} className='w-25'/>
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Engagement Qualité</h3>
                                </div>
                                <p>L'excellence à chaque étape. Nous privilégions la qualité dans tous nos processus, de la planification à l'exécution. Cette approche garantit que nos projets surpassent les normes rigoureuses de l'industrie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Project */}
            <section className="section-5  bg-light">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Nos Projets</span>
                        <h2>Notre Large Gamme de Projets</h2>
                        <p>Nous offrons une gamme complète de services de construction, couvrant les projets résidentiels, commerciaux et industriels.</p>
                    </div>
                    <div className="row pt-4">
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
                                        <p>Le projet de Casablanca vise à moderniser le quartier des affaires avec des bureaux et commerces, reflétant l'essor économique de la ville et créant des espaces adaptés aux entreprises innovantes et start-ups.</p>
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
                                        <p>Le projet de Marrakech se concentre sur la création d'un complexe touristique intégrant des hôtels, des restaurants, et des espaces culturels, en harmonie avec le patrimoine historique et l'attrait touristique de la ville.</p>
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
                                    <p>Le projet de Fès inclut la rénovation et préservation des bâtiments historiques dans la médina, valorisant le patrimoine culturel et encourageant le tourisme durable dans cette ville millénaire et fascinante.</p>
                                </div>
                                    <a href="" className="btn btn-primary small">Lire plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="section-6">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Témoignages</span>
                        <h2>Ce que disent nos clients</h2>
                        <p>Grâce à notre expertise et notre dévouement, nous avons réalisé avec succès de nombreux projets toujours avec une satisfaction client inégalée.</p>
                    </div>
                    <Swiper
                                modules={[Pagination]}
                                spaceBetween={30}
                                breakpoints={{
                                    // Extra small devices (phones, less than 768px)
                                    0: { slidesPerView: 1, spaceBetween: 20 },
                                    
                                    // Medium devices (tablets, 768px and up)
                                    768: { slidesPerView: 1, spaceBetween: 40 },

                                    // Large devices (desktops, 992px and up, if needed)
                                    992: { slidesPerView: 2, spaceBetween: 50 },

                                    // Extra large devices (large desktops, 1200px and up)
                                    1200: { slidesPerView: 2, spaceBetween: 50 },
                                    1250: { slidesPerView: 3, spaceBetween: 50 },
                                }}
                                pagination={{ clickable: true }}
                            >
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"L'équipe a transformé notre immeuble de bureaux en un espace moderne et efficace. Respect et travail de haute qualité!"</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg1} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Ahmed El Ouafi</div>
                                            <div>Directeur de Banque</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"Grâce à leur expertise, notre complexe touristique est désormais un incontournable. Chaque détail a été soigneusement pensé."</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg2} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Moncef El Alami</div>
                                            <div>Directeur d'Hôtel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"Un excellent partenaire pour nos projets industriels. Innovation et rigueur caractérisent leur approche professionnelle."</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg3} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Hassan El Kharraz</div>
                                            <div>Ingénieur R&D</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"Nous sommes ravis de notre résidence. L'équipe a allié design et fonctionnalité pour créer notre maison de rêve, Parfait!."</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg4} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Samira El Houari</div>
                                            <div>Propriétaire d'Immeuble</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"La rénovation de notre médina a été un grand succès. Le respect du patrimoine tout en modernisant est impressionnant."</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg5} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Mourad Ait Ali</div>
                                            <div>Historien</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="rating">{star}{star}{star}{star}{star}</div>
                                    <div className="content pt-4 pb-2">
                                        <p>"La zone industrielle développée a attiré de nombreuses entreprises, créant des emplois et dynamisant l'économie locale."</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <div className='meta'>
                                            <img src={AvatarImg6} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>Nadia Chraibi</div>
                                            <div>Économiste</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
    }

    export default Home