import Header from "../common/Header"
import Footer from "../common/Footer"

function ContactUS() {
  return (
    <>
          {/* Hero Section */}
          <section className="section-17">
                <div className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="text-left">
                            <span>Compétence. Confiance. Performance.</span>
                            <h1>Contactez-Nous</h1>
                            <p>Nos experts dévoués sont à votre disposition pour répondre à  <br/> toutes vos questions et vous accompagner tout au long de votre projet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                <section className="section-18 py-4 bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Nous Contacter</h2>
                            <p>Contactez-nous en remplissant le formulaire et nous reviendrons vers vous rapidement.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h3>Call us</h3>
                                        <a href="#">(888-000-0000)</a><br/>
                                        <a href="#">(222-123-12345)</a>
                                        <div className="email my-4">
                                            <h3>Email us</h3>
                                            <a href="#">contact@constructo.com</a>
                                        </div>
                                        <h3>Addresse</h3>
                                        <span>Villa 36, Avenue Hassan II, Quartier des Orangers, Marrakech, 40000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <form action="#">
                                            <div className="row mt-4">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="name" className="form-label">Nom</label>
                                                    <input type="text" className="form-control form-control-lg" placeholder="Votre Nom" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" className="form-control form-control-lg" placeholder="Votre email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="phone" className="form-label">Téléphone</label>
                                                    <input type="text" className="form-control form-control-lg" placeholder="Votre Téléphone" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="sujet" className="form-label">Sujet</label>
                                                    <input type="text" className="form-control form-control-lg" placeholder="Sujet" />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea className="form-control form-control-lg" placeholder="Votre Message" rows={5}></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary large">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default ContactUS