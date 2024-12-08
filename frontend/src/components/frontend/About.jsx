import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import aboutImg from '../../assets/images/about.jpg';
import { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from '../common/http.jsx';
import { Link } from 'react-router-dom';

function About() {
    const linkedinIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
    );

    const [members, setMembers] = useState([]);

    const fetchLatestMembers = async () => {
        const res = await fetch(apiUrl + 'get-latest-members', {
            method: 'GET',
        });
        const result = await res.json();
        setMembers(result.data);
    };

    useEffect(() => {
        fetchLatestMembers();
    }, []);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-8">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Qualité. Intégrité. Valeur.</span>
                                <h1>À Propos De Nous</h1>
                                <p>Nous sommes dédiés à concrétiser vos rêves <br/> grâce à notre savoir-faire exceptionnel et notre</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Us */}
                <section className="section-9">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={aboutImg} className='w-100' alt="About Us" />
                            </div>
                            <div className="col-md-6 p-3">
                                <span>Qui sommes-nous ?</span>
                                <h2>Des structures conçues pour durer toute une vie</h2>
                                <p>La construction de structures durables demande une approche holistique qui intègre des matériaux avancés, une conception résiliente, un entretien régulier et des pratiques durables. En s'appuyant sur les connaissances historiques et en utilisant la technologie moderne.</p>
                                <p>Concevoir des structures qui résistent à l'épreuve du temps nécessite un équilibre harmonieux entre matériaux de pointe, conceptions durables, entretien continu et pratiques écologiques.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Members */}
                <section className="section-10 p-4 bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Our Team</span>
                            <h2>Meet Our Latest Members</h2>
                            <p>Get to know the newest additions to our team, bringing fresh perspectives and expertise to our projects.</p>
                        </div>
                        <div className="row pt-4">
                            {
                                members && members.map(member => {
                                    return (
                                        <div key={member.id} className="col-12 col-md-6 col-xl-4">
                                            <div className="item shadow">
                                                <div className="member-image">
                                                    <img src={fileUrl + 'uploads/members/' + member.image} className='w-100' alt={member.name} />
                                                </div>
                                                <div className="member-body">
                                                    <div className="member-title">
                                                        <h3>{member.name}</h3>
                                                    </div>
                                                    <div className="member-content">
                                                        <p>{member.job_title}</p>
                                                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer">
                                                            {linkedinIcon}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
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

export default About;
