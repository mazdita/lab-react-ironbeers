import React from 'react';
import { Link } from 'react-router-dom';

function Beer({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <div className="card col-6">
      <img
        src={image_url}
        className="card-img-top"
        style={{ 'maxHeight': '600px' }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{tagline}</p>
        <small className="card-text">Created by {contributed_by}</small>
        <Link exact to={`/beers/${_id}`} className="btn btn-primary">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Beer;
