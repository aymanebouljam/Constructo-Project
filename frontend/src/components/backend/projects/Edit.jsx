import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Sidebar from '../../common/Sidebar.jsx'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, fileUrl,token } from '../../common/http.jsx'
import { toast } from 'react-toastify'
import { Placeholder } from 'react-bootstrap'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';


const EditProject = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [project, setProject] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Contenu'
    }), [placeholder]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'projects/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            console.log(result);
            setContent(result.project.content);
            setProject(result.project);
            return {
                title: result.project.title,
                slug: result.project.slug,
                short_desc: result.project.short_desc,
                location: result.project.location,
                construction_type: result.project.construction_type,
                sector: result.project.sector,
                status: result.project.status
            }
        }
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "image": imageId };

        const res = await fetch(apiUrl + 'projects/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });

        const result = await res.json();
        if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/projects');
        } else {
            toast.error(result.message);
        }
    };

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);

        await fetch(apiUrl + 'temp-images', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === false) {
                    toast.error(result.errors.image[0]);
                } else {
                    setImageId(result.data.id);
                }
            });
    };

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
                                        <h4 className='h5'>Projets / Modifier</h4>
                                        <Link to="/admin/projects" className="btn btn-primary">Retourner</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className='form-label'>Titre</label>
                                            <input
                                                {...register('title', {
                                                    required: "Le titre est obligatoire"
                                                })}
                                                type='text' className={`form-control ${errors.title && 'is-invalid'}`} placeholder='Titre' />
                                            {
                                                errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="slug" className='form-label'>Référence</label>
                                            <input
                                                {...register('slug', {
                                                    required: "La référence est requise"
                                                })}
                                                type='text' className={`form-control ${errors.slug && 'is-invalid'}`} placeholder='Référence' />
                                            {
                                                errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                            }
                                        </div>
                                        <div className=" row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="location" className='form-label'>Localisation</label>
                                                <input
                                                    {...register('location')}
                                                    type='text' className='form-control' placeholder='Localisation' />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="construction_type" className='form-label'>Type de construction</label>
                                                <input
                                                    {...register('construction_type')}
                                                    type='text' className='form-control' placeholder='Type de construction' />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="sector" className='form-label'>Secteur</label>
                                                <input
                                                    {...register('sector')}
                                                    type='text' className='form-control' placeholder='Secteur' />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="status" className='form-label'>Statut</label>
                                                <select
                                                    {...register('status')}
                                                    className='form-control'>
                                                    <option value="1">Active</option>
                                                    <option value="0">Bloqué</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="short_desc" className='form-label'>Description</label>
                                            <textarea
                                                {...register('short_desc')}
                                                className='form-control' rows='4' placeholder='Description'></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="content" className='form-label'>Contenu</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className='form-label'>Image</label>
                                            <input type='file' className='form-control' onChange={handleFile} />
                                            {
                                                project.image && <img width='300' src={`${fileUrl}uploads/projects/${project.image}`} />
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-primary' disabled={isDisable}>Modifier</button>
                                        </div>
                                    </form>
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

export default EditProject;
