import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RestaurantPage from './RestaurantPage'

export default function RestaurantCard ({ name }) {
  return (
    <div className="card w-100 p-3" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://via.placeholder.com/200x60" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Some quick example text to build on the Restaurant and make up the bulk of the card's content.</p>
            <Link to={`/restaurant/${name}`} className="btn btn-info">Restaurant {name}</Link>
            <Route path={`/restaurant/${name}`} component={RestaurantPage} />
        </div>
    </div>
  )
}
