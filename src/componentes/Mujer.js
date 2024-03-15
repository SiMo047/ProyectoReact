
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import img4 from '../img/m1.jpg';
import img5 from '../img/m2.jpg';
import img6 from '../img/m3.jpg';

const Mujer = () => {
 return (
    <div>
      <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="mt-5 ms-5 mb-5">Mujer</h2>
      <div className="container productos mb-5">
        <div className="row">
          <div className="card me-5 pt-3 mt-5" style={{ width: "25rem" }}>
            <img src={img4} className="card-img-top rounded" alt="Chaqueta Alcochada - Mujer" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike FA</h5>
              <p className="card-text">Chaqueta Alcochada - Mujer</p>
              <a href="#" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>140€</a>
            </div>
          </div>

          <div className="card me-5 pt-3 mt-5" style={{ width: "25rem" }}>
            <img src={img5}className="card-img-top rounded" alt="Chaqueton large - Mujer" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike Air</h5>
              <p className="card-text">Chaqueton large - Mujer</p>
              <a href="#" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>250€</a>
            </div>
          </div>

          <div className="card pt-3 mt-5" style={{ width: "25rem" }}>
            <img src={img6} className="card-img-top rounded" alt="Chaqueta Alcochada - Mujer" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "'Poppins', sans-serif" }}>Nike Chaqueta</h5>
              <p className="card-text">Chaqueta Alcochada - Mujer</p>
              <a href="#" className="btn btn-success ms-1" style={{ fontFamily: "'Poppins', sans-serif" }}>100€</a>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Mujer;
