import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Sidebar from '../../common/Sidebar.jsx'
import { useState, useEffect } from 'react'
import { apiUrl, token } from '../../common/http.jsx'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ShowProjects = () => {
    const [projects, setProjects] = useState([]);
    
    const fetchProjects = async () => {
        const res = await fetch(apiUrl + 'projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setProjects(result.projects);
    };

    const deleteProject = async (id) => {
        if (confirm("Please confirm the deletion of this project!")) {
            const res = await fetch(apiUrl + 'projects/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status === true) {
                const newProjects = projects.filter(project => project.id !== id);
                setProjects(newProjects);
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className='h5'>Projects</h4>
                                        <Link to="/admin/projects/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />
                                    <table className="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Référence</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projects && projects.map((project) => {
                                                    return (
                                                        <tr key={project.id}>
                                                            <td>{project.id}</td>
                                                            <td>{project.title}</td>
                                                            <td>{project.slug}</td>
                                                            <td>{
                                                                (project.status == 1) ? 'Active' : 'Blocked'
                                                            }</td>
                                                            <td>
                                                                <Link to={`/admin/projects/edit/${project.id}`} className="btn btn-primary small">Modifier</Link>
                                                                <Link href="/admin/projects" className="btn btn-secondary small ms-3" onClick={() => deleteProject(project.id)}>Supprimer</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ShowProjects;
