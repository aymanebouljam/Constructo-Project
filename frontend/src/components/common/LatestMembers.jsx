import { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from '../common/http.jsx';
import { Link } from 'react-router-dom';

const LatestMembers = () => {
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
            <section className="section-5 bg-light">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Our Team</span>
                        <h2>Meet Our Experts</h2>
                        <p>Our team of skilled professionals is dedicated to delivering the best results in their respective fields.</p>
                    </div>
                    <div className="row pt-4">
                        {
                            members && members.map(member => {
                                return (
                                    <div key={member.id} className="col-12 col-md-6 col-xl-4">
                                        <div className="item">
                                            <div className="member-image">
                                                <img src={fileUrl + 'uploads/members/' + member.image} className='w-100' />
                                            </div>
                                            <div className="member-body">
                                                <div className="member-title">
                                                    <h3>{member.name}</h3>
                                                </div>
                                                <div className="member-content">
                                                    <p>{member.job_title}</p>
                                                </div>
                                                <Link to={'/member/' + member.id} className="btn btn-primary small">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestMembers;
