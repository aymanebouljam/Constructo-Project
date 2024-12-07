import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from '../common/http.jsx'
import { Link } from 'react-router-dom';

function Projects() {
    const [projects, setProjects] = useState([]);
    
    const fetchAllProjects = async () => {
        const res = await fetch(apiUrl + 'get-projects', {
            method: 'GET',
        });
        const result = await res.json();
        setProjects(result.data);
    }

    useEffect(() => {
        fetchAllProjects();
    }, []);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-13">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Excellence. Reliability. Innovation.</span>
                                <h1>Our Projects</h1>
                                <p>We provide an extensive variety of construction projects,<br /> covering residential, commercial, and industrial sectors.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Projects */}
                <section className="section-14 p-4 bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Our Projects</span>
                            <h2>Our Construction Projects</h2>
                            <p>We deliver comprehensive construction solutions, integrating residential, commercial, and industrial projects with expertise and innovation.</p>
                        </div>
                        <div className="row pt-4">
                            {
                                projects && projects.map(project => {
                                    return (
                                        <div key={project.id} className="col-12 col-md-6 col-xl-4">
                                            <div className="item">
                                                <div className="project-image">
                                                    <img src={fileUrl + 'uploads/projects/' + project.image} className='w-100' />
                                                </div>
                                                <div className="project-body">
                                                    <div className="project-title">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="project-content">
                                                        <p>
                                                            {project.short_desc}
                                                        </p>
                                                    </div>
                                                    <Link to={'/project/' + project.id} className="btn btn-primary small">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Projects;
