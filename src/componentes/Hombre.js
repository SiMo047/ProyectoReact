
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../img/h1.jpg';
import img2 from '../img/h2.jpg';
import img3 from '../img/h3.jpg';

const Hombre = () => {
 return (
    <div>
      <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="mt-5 ms-5 mb-5">Hombre</h2>
      <div className="container productos mb-5">
        <div className="row">
          <div className="card me-5 pt-3" style={{ width: "25rem" }}>
            <img src={img1} className="card-img-top rounded" alt="Chaqueta con Capucha Versatil - Hombre" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike FA</h5>
              <p className="card-text">Chaqueta con Capucha Versatil - Hombre</p>
              <a href="" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>240€</a>
            </div>
          </div>

          <div className="card me-5 pt-3" style={{ width: "25rem" }}>
            <img src={img2} className="card-img-top rounded" alt="Chaqueta con Cremallera - Hombre" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike Air</h5>
              <p className="card-text">Chaqueta con Cremallera - Hombre</p>
              <a href="" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>220€</a>
            </div>
          </div>

          <div className="card pt-3" style={{ width: "25rem" }}>
            <img src={img3} className="card-img-top rounded" alt="Chaqueta Alcochada - Hombre" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike Chaqueta</h5>
              <p className="card-text">Chaqueta Alcochada - Hombre</p>
              <a href="" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>120€</a>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Hombre;
