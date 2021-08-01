import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="card-group">
            <Link exact to="/beers">
                <div className="card">
                    <img src="./assets/beers.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">All Beers</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
            </Link>
            <Link exact to="/random-beer" onClick={() => handleRandomBeer()}>
                <div className="card">
                    <img src="./assets/random-beer.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Random Beer</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
            </Link>
            <Link exact to="/new-beer">
                <div className="card">
                    <img src="./assets/new-beer.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">New Beer</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Home;