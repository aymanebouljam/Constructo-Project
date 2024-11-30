import {Link} from 'react-router-dom'
function Footer() {
    return (
      <footer>
          <div className="container py-5">
              <div className="row">
                  <div className="col-12 col-sm-6 col-lg-3 ">
                      <h3 className='mb-4'>Constructo</h3>
                      <div className='text-center fs-6'> ”Nos services de construction vous offrent la tranquillité d'esdivrit même après la fin des travaux.“
                      </div>
                  </div>
                  <div className=" col-12 col-sm-6 col-lg-3 ">
                      <h3 className='mb-4'>Nos Services</h3>
                      <ul>
                          <li>
                              <a href='#'>Construction Spécialisée</a>
                          </li>
                          <li>
                              <a href='#'>Construction Civile</a>
                          </li>
                          <li>
                              <a href='#'>Construction Résidentielle</a>
                          </li>
                          <li>
                              <a href='#'>Construction d'Entreprises</a>
                          </li>
                          <li>
                              <a href='#'>Construction de Bâtiments</a>
                          </li>
                          <li>
                              <a href='#'>Construction Industrielle</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" col-12 col-sm-6 col-lg-3 ">
                  <h3 className='mb-4'>Liens Rapides</h3>
                      <ul>
                          <li>
                                <Link to ="/about">À Propos de Nous</Link>
                          </li>
                          <li>
                                <Link to ="/services">Services</Link>
                          </li>
                          <li>
                                <Link to ="/projects">Projects</Link>
                          </li>
                          <li>
                                <Link to ="/blogs">Blog</Link>
                          </li>
                          <li>
                                <Link to='/contactUs'>Contactez-Nous</Link>
                          </li>
                      </ul>
                  </div>
                  <div className=" col-12 col-sm-6 col-lg-3 ">
                      <h3 className='mb-4'>Contactez-Nous</h3>
                      <ul>
                          <li>
                              <a href='#'>(888-000-000)</a>
                          </li>
                          <li>
                              <a href='#'>info@example.com</a>
                          </li>
                          <li>
                              <div>Villa 36, Avenue Hassan II, Quartier des Orangers, Marrakech, 40000</div>
                          </li>
                      </ul>
                  </div>
                      <hr/>
                      <div className=' text-center pt-4'>Copyright &copy; 2024 Constructo. Tous droits réservés</div>
              </div>
          </div>
      </footer>
    )
  }
  
  export default Footer
  