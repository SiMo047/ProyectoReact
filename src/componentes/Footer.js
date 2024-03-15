import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({ children }) => {
  return (
    <footer className="row row-cols-5 py-5 my-5 border-top">
      <div className="col">
        {}
      </div>
     
        {   <div class="col">
            <h5  >AYUDA</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Estado del pedido</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Envios y entregas</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Devoluciones</a></li>
            
            </ul>
            </div>}
   
      
        {   <div class="col">
            <h5  >ACERCA DE CLOTH.</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Novedades</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Trabaja con Nosotros</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Inversores</a></li>
            
            </ul>
            </div>}
      
   
        {    <div class="col">
            <h5  >Unete a CLOTH.</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">CLOTH. App</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Login</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Latest</a></li>
            
            </ul>
            </div>}
     
    </footer>
  );
};

export default Footer;