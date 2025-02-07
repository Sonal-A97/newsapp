import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3" >
          <div className="card" style={{width: "18rem"}}>
              <img src={imageUrl} className="card-img-top" alt="..." style={{height: '160px'}}  />
              <div className="card-body">
                  <h5 className="card-title">{title.length > 40 ? title.slice(0,40) +'...' : title}</h5>
                  <p className="card-text">{description.length > 60 ? description.slice(0,60) + '...' : description}</p>
                  <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
