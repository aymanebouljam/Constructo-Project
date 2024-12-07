import Header from "../common/Header.jsx"
import Footer from "../common/Footer.jsx"
import { Link, useParams } from "react-router-dom"
import { apiUrl, fileUrl } from "../common/http.jsx"
import { useEffect, useState } from "react"

const ServiceDetail = ()=>{
    const params = useParams()
    const [service, setService] = useState([])
    const [services, setServices] = useState([])
    const fetchService = async ()=>{
        const res = await fetch(apiUrl+'get-service/'+params.id,{
            'method' : 'GET',
        });
        const result = await res.json();
        setService(result.data)
    }
    const fetchAllServices = async ()=>{
        const res = await fetch(apiUrl+'get-services',{
            'method' : 'GET',
        });
        const result = await res.json();
        setServices(result.data)
    }
    useEffect(()=>{
        fetchService()
        fetchAllServices()
    },[params.id])
    return(
        <>
        <Header />
        <main>
             {/* Hero Section */}
             <section className="section-11">
                <div className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="text-left">
                            <span>Excellence. Fiabilité. Innovation.</span>
                            <h1>{service.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details */}
            <section className="section-20">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                        <section className="section-19 mb-5">
                                <div className="card shadow border-0 sidebar">
                                    <div className="card-body p-4">
                                        <h3 className="my-2">Nos Services</h3>
                                        <ul>
                                        {
                                            services && services.map(service=>{
                                                return(
                                                    <li key={'service-'+service.id}>
                                                        <Link to={'/service/'+service.id}>{service.title}</Link>
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
                            <div className="d-flex  flex-column align-items-center">
                                <img  src={`${fileUrl}uploads/services/${service.image}`} alt="image"/>
                            </div>
                            <h3 className="py-5 text-center">{service.title}</h3>
                            <div dangerouslySetInnerHTML={{__html:service.content}} className="text-justify">
                            
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
export default ServiceDetail