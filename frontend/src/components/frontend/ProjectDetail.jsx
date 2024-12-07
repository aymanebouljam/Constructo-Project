import Header from "../common/Header.jsx"
import Footer from "../common/Footer.jsx"
import { Link, useParams } from "react-router-dom"
import { apiUrl, fileUrl } from "../common/http.jsx"
import { useEffect, useState } from "react"

const ProjectDetail = () => {
    const params = useParams()
    const [project, setProject] = useState([])
    const [projects, setProjects] = useState([])
    
    const fetchProject = async () => {
        const res = await fetch(apiUrl + 'get-project/' + params.id, {
            method: 'GET',
        });
        const result = await res.json();
        setProject(result.data)
    }
    const fetchAllProjects = async () => {
        const res = await fetch(apiUrl + 'get-projects', {
            method: 'GET',
        });
        const result = await res.json();
        setProjects(result.data)
    }
    useEffect(() => {
        fetchProject()
        fetchAllProjects()
    }, [params.id])

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-11">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Excellence. Reliability. Innovation.</span>
                                <h1>{project.title}</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Project Details */}
                <section className="section-20">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-3">
                                <section className="section-19 mb-5">
                                    <div className="card shadow border-0 sidebar">
                                        <div className="card-body p-4">
                                            <h3 className="my-2">Our Projects</h3>
                                            <ul>
                                                {
                                                    projects && projects.map(project => {
                                                        return (
                                                            <li key={'project-' + project.id}>
                                                                <Link to={'/project/' + project.id}>{project.title}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-9">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={`${fileUrl}uploads/projects/${project.image}`} alt="image" />
                                </div>
                                <h3 className="py-5 text-center">{project.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: project.content }} className="text-justify">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ProjectDetail
