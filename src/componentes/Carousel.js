import React from 'react';
import './estilos.css';
import img1 from '../img/c1.jpg';
import img2 from '../img/c2.png';
import img3 from '../img/c3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
    return (
      <section>
        <div class=""><h2>Inicio</h2></div>
        
        <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100 img-fluid" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
  };
  
  export default Carousel;
  