import React, { Component } from 'react';

export default class TopNewsItem extends Component
{
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, author,source} = this.props;
    
        return (
          <div>
            <div className="card card-1" style={{ borderRadius:"10px 10px 10px 10px",marginTop:"2.5rem", marginLeft:"5rem", width: "57rem", height:"13rem", display:"flex", flexDirection:"row" }}>
              <img 
                src={
                  imageUrl
                    ? imageUrl
                    : "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
                }
                className="card-img-top cardimage"
                alt="..."
                style={{  borderRadius:"10px 0px 0px 10px",height: "13rem" , width:"20rem" }}
              />
              <div className="card-body cardbody" style={{flexDirection:'row', flex:1}}>
               <p className="card-text"><small className="text-body-secondary">By {author?author:source} on {new Date(publishedAt).toLocaleTimeString()}</small></p>
                <h5 className="card-title" style={{marginBottom:'12px'}}>{title}...<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
                </span></h5>
                <p className="card-text"style={{marginBottom:'12px'}}>{description}......</p>
                
                <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
                  Read More
                </a>
              </div>
              
            </div>
            
          </div>
        )
      }
    }
    