import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Sidebar from '../../common/Sidebar.jsx'
import {useState, useEffect} from 'react'
import {apiUrl, token} from '../../common/http.jsx'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Show = ()=>{
    const [services, setServices] = useState([])
    const fetchServices = async () =>{
        const res = await fetch(apiUrl+'services',{
            'method' : 'GET',
            'headers' : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setServices(result.services)
    } 

    const deleteService = async (id)=>{
        if(confirm("Veuillez confirmer la suppression de ce service!")){
            const res = await fetch(apiUrl+'services/'+id,{
                'method' : 'DELETE',
                'headers' : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if(result.status == true){
               const newServices =  services.filter(service => service.id !== id)
               setServices(newServices)
               toast.success(result.message)
            }else{
                toast.error(result.message)
            }
        }
    }

    useEffect(()=>{
        fetchServices()
    },[])

    return (
        <>
          <Header />
        <main>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        {<Sidebar />}
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between">
                                    <h4 className='h5'>Services</h4>
                                    <Link to="/admin/services/create" className="btn btn-primary">Créer</Link>
                                </div>
                                <hr/>
                                <table className="table table-stripped text-center">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Titre</th>
                                            <th>Slug</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            services && services.map((service)=>{
                                               return(
                                                <tr key={service.id}>
                                                    <td>{service.id}</td>
                                                    <td>{service.title}</td>
                                                    <td>{service.slug}</td>
                                                    <td>{
                                                            (service.status == 1) ? 'Active' : 'Blocked'
                                                        }</td>
                                                    <td>
                                                        <Link to={`/admin/services/edit/${service.id}`} className="btn btn-primary small">Modifier</Link>
                                                        <Link href="/admin/services" className="btn btn-secondary small ms-3" onClick={()=> deleteService(service.id)}>Supprimer</Link>
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
    )
}
export default Show;