import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import '../style.css';

export default class Footer extends Component {
  render() {
    return (
      <>
      
    <div className=''>
    <footer className="text-center text-lg-start text-muted ">
 
  <section className=" rrr ">
    <div className="container text-center text-md-start mt-0 ">
      <div className="row mt-3  rrrrrr">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-0 ">
        
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary "></i>Company name
          </h6>
          <p className='fw-bold'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-0  ">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to="/" className="nav-link">Angular</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">React</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">Vue</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">Laravel</Link>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/" className="nav-link">Pricing</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">Settings</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">Orders</Link>
          </p>
          <p>
            <Link to="/" className="nav-link">Help</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 con">
        
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p className='fw-bold'><i className="fas fa-home me-3 text-secondary"></i> New Delhi, INDIA</p>
          <p className='fw-bold'>
            <i className="fas fa-envelope me-3 text-secondary "></i>
            info@example.com
          </p>
          <p className='fw-bold'><i className="fas fa-phone me-3 text-secondary"></i> + 91 7543215296</p>
          <p className='fw-bold'><i className="fas fa-print me-3 text-secondary"></i> + 91 7543215296</p>
        </div>
      </div>
    </div>

  </section>
  
</footer>
</div>
      </>
    )
  }
}
