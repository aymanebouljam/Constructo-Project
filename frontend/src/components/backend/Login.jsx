import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import { useForm } from "react-hook-form"
import { toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/Auth.jsx';


function Login() {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const res = await fetch('http://127.0.0.1:8000/api/authenticate',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result = await res.json()
        if(result.status == false){
            toast.error(result.message)
        }else{
            const userInfo = {
                id : result.id,
                token : result.token
            }
            console.log(userInfo)
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            login(userInfo)
            navigate('/admin/dashboard')
        }
      }
    
  return (
        <>  
        <Header />
        <main>
            <div className="container my-5 d-flex justify-content-center">
                <div className="login-form">
                    <div className="card border-0 shadow">
                        <div className="card-body p-5">
                            <form action="
                            " onSubmit={handleSubmit(onSubmit)}>
                                <h4 className='mb-4'>Authentification d'Admin</h4>
                                <div className="mb-4">
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input
                                    {
                                        ...register('email', {
                                            required: "Ce champ est obligatoire",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Veuillez entrer une adresse email valide"
                                            }
                                        })
                                        
                                    }
                                     type="text" className={`form-control form-control-md ${errors.email && 'is-invalid'}`}name='email' placeholder='Votre Email' />
                                     {
                                        errors.email && <p className='fs-6 invalid-feedback'>{errors.email?.message}</p>
                                     }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className='form-label'>Mot de passe</label>
                                    <input
                                    {
                                        ...register('password', {
                                            required : "Ce champ est obligatoire"
                                        })
                                    }
                                    
                                    type="password" className={`form-control form-control-md ${errors.password && 'is-invalid'}`} name='password' placeholder='Votre Mot de passe' />
                                     {
                                        errors.password && <p className='fs-6 invalid-feedback'>{errors.password?.message}</p>
                                     }
                                </div>
                                <button type="submit" className="btn btn-primary">Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
  )
}

export default Login