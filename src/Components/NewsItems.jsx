import React, { Component } from 'react'



export default class NewsItems extends Component {
  render() {
    return (
      <>
      <span class="badge text-bg-warning">New</span>
        <div className="card-box ps-4 pr-5" style={{ display: "flex" }}>
        <div className="card" style={{ width: "170rem",borderRadius:"12px" ,border:"4px solid black" }}>
        
            <img src={this.props.imgurl} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}...</p>
              <a href={this.props.newsurl} target="_blank"  className="btn btn-primary">READ MORE</a>
              {/* <span class="badge text-bg-">Primary</span> */}
            </div>
          </div>
        </div>

      </>
    )
  }
}