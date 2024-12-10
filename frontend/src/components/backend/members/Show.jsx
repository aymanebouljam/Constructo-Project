import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Sidebar from '../../common/Sidebar.jsx'
import { useState, useEffect } from 'react'
import { apiUrl, token } from '../../common/http.jsx'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ShowMembers = () => {
    const [members, setMembers] = useState([]);

    const fetchMembers = async () => {
        const res = await fetch(apiUrl + 'members', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setMembers(result.members);
    };

    const deleteMember = async (id) => {
        if (confirm("Veuillez confirmer la suppression de ce membre !")) {
            const res = await fetch(apiUrl + 'members/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status === true) {
                const newMembers = members.filter(member => member.id !== id);
                setMembers(newMembers);
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }
    };

    useEffect(() => {
        fetchMembers();
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
                                        <h4 className='h5'>Membres</h4>
                                        <Link to="/admin/members/create" className="btn btn-primary">Créer</Link>
                                    </div>
                                    <hr />
                                    <table className="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nom</th>
                                                <th>Poste</th>
                                                <th>Statut</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                members && members.map((member) => {
                                                    return (
                                                        <tr key={member.id}>
                                                            <td>{member.id}</td>
                                                            <td>{member.name}</td>
                                                            <td>{member.job_title}</td>
                                                            <td>{
                                                                (member.status == 1) ? 'Active' : 'Bloqué'
                                                            }</td>
                                                            <td>
                                                                <Link to={`/admin/members/edit/${member.id}`} className="btn btn-primary small">Modifier</Link>
                                                                <button className="btn btn-secondary small ms-3" onClick={() => deleteMember(member.id)}>Supprimer</button>
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

export default ShowMembers;
