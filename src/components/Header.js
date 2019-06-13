import React from 'react'
import { Route, Link } from 'react-router-dom'


function Header() {
    return (
        
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-6">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/ajouter">Ajouter un restaurant</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/connexion">Connexion</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </nav>
    
                
            
            </div>
        
    );
  }
  
  
export default Header;
