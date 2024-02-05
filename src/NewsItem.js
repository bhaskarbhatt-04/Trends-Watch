import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author,source} = this.props;

    return (
      <div>
        <div className="card" style={{  borderRadius:"10px 10px 10px 10px",width: "18rem", height:"30rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ borderRadius:"10px 10px 0px 0px", height: "13rem" }}
          />
          <div className="card-body">
          <p className="card-text"><small className="text-body-secondary">By {author?author:source} on {new Date(publishedAt).toLocaleTimeString()}</small></p>
            <h5 className="card-title">{title}...<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">{description}......</p>
            
            <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
          
        </div>
        
      </div>
    )
  }
}
