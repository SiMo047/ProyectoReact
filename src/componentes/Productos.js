import React from 'react';
import img1 from '../img/h1.jpg';
import img2 from '../img/h2.jpg';
import img3 from '../img/h3.jpg';
import img4 from '../img/m1.jpg';
import img5 from '../img/m2.jpg';
import img6 from '../img/m3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



const Productos = () => {
  return (
    <section>
      <div className="container productos mb-5">
        
          { <div class="row">
                <div class="card me-5 pt-3" style={{width: '25rem'}}>
                    <img src={img1} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike FA</h5>
                      <p class="card-text">Chaqueta con Capucha Versatil - Hombre </p>
                      <a href="#" class="btn btn-success ms-1" >240€</a>
                    </div>
                  </div>

                  <div class="card me-5 pt-3" style={{width: '25rem'}}>
                    <img src={img2} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike Air</h5>
                      <p class="card-text">Chaqueta con Cremallera - Hombre</p>
                      <a href="#" class="btn btn-success ms-1" >220€</a>
                    </div>
                  </div>

                  <div class="card pt-3" style={{width: '25rem'}}>
                    <img src={img3} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike Chaqueta</h5>
                      <p class="card-text">Chaqueta Alcochada - Hombre </p>
                      <a href="#" class="btn btn-success ms-1">120€</a>
                    </div>
                  </div>
                  <div class="card me-5 pt-3 mt-5" style={{width: '25rem'}}>
                    <img src={img4} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike FA</h5>
                      <p class="card-text">Chaqueta Alcochada - Mujer </p>
                      <a href="#" class="btn btn-success ms-1" >140€</a>
                    </div>
                  </div>

                  <div class="card me-5 pt-3 mt-5" style={{width: '25rem'}}>
                    <img src={img5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike Air</h5>
                      <p class="card-text" >Chaqueton large - Mujer</p>
                      <a href="#" class="btn btn-success ms-1" >250€</a>
                    </div>
                  </div>

                  <div class="card pt-3 mt-5" style={{width: '25rem'}}>
                    <img src={img6} class="card-img-top rounded" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"  >Nike Chaqueta</h5>
                      <p class="card-text">Chaqueta Alcochada - Mujer </p>
                      <a href="#" class="btn btn-success ms-1">100€</a>
                    </div>
                  </div>
            </div>}
       
      </div>
    </section>
  );
};

export default Productos;