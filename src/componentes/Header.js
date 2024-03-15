import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ children }) => {
  return (
    <header>
      { <nav class="navbar navbar-expand-lg navbar-light bg-white shadow  pb-4 mt-2 ">
            <div class="container-fluid">
                     <Link class="navbar-brand ms-5" href="/">CLOTH#</Link>
           
          
                <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                
                
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active ms-5 me-5">
                        <Link class="nav-link fs-4 text-black" to="/">Inicio </Link>
                        </li>
                        <li class="nav-item ms-5 me-5">
                        <Link class="nav-link fs-4 text-black" to="/hombre">Hombre</Link>
                        </li>
                        <li class="nav-item ms-5 me-5">
                        <Link class="nav-link fs-4 text-black " to="/mujer">Mujer</Link>
                        </li>
                        <li class="nav-item ms-5">
                            <div class="dropdown">
                                <a class="nav-link fs-4 text-black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                  Mas
                                </a>
                              
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <li><a class="dropdown-item" href="#">Niños</a></li>
                                  <li><a class="dropdown-item" href="#">Niñas</a></li>
                                  <li><a class="dropdown-item" href="#">Descuento</a></li>
                                </ul>
                              </div>
                        </li>
                    </ul>
                
                </div>
            </div>
          </nav>}
    </header>
  );
};

export default Header;