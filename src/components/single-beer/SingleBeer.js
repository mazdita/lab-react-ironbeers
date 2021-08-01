import React from 'react';

function SingleBeer({ match, randomBeer }) {
  // const id = match.params.id;
  // const singleBeer = randomBeer?.find((beer) => beer._id === id);



  return (
    <div className="card col-6">
      <h1>Test</h1>
      <img
        src={randomBeer.image_url}
        className="card-img-top"
        style={{ 'max-height': '600px' }}
        alt="..."
      />
      <div className="card-body">
        <div className="row d-flex justify-content-between mb-2">
          <div className="col-6">
            <h3 className="card-title">{randomBeer.name}</h3>
            <h5 className="card-text">{randomBeer.tagline}</h5>
          </div>
          <div className="col-6">
            <h4 className="card-title text-muted">
              {randomBeer.attenuation_level}
            </h4>
            <h6 className="card-text">{randomBeer.first_brewed}</h6>
          </div>
        </div>

        <p className="card-text">{randomBeer.description}</p>
        <small className="card-text text-muted">
          Created by {randomBeer.contributed_by}
        </small>
      </div>
    </div>
  );
}

export default SingleBeer;
