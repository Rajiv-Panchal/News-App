import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import '../style.css';

export default class Header extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
          <Link className="navbar-brand" to="#"><img src="logo3.png" alt="" /><span className="dot">.</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse show" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                      <Link className="nav-link" to="/general">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/business">Business</Link> 
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/health">Health</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/science">Science</Link> 
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/sports">Sports</Link> 
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/technology">Technology</Link>
                  </li>
              </ul>
              {/* <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-brand ms-lg-3">Contact</Link> */}
          </div>
      </div>
  </nav>
 
    )
  }
}