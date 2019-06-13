import React from "react";
import "./RestaurantPage.css"
import Carousel from './Carousel'
import Review from './Review'

export default function RestaurantPage (props) {
  return (
    <div className="restaurant-container container">
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <h3>Restaurant{props.name}</h3>
          <p> 10 cours Mirabeau, 13100 Aix-en-Provence</p>
          <p> Note : 4.2/5</p>
          <div className="row">
          <div className="col-sm-6">
              <Review />
              <Review />
              <Review />
            </div>
            <div className="col-sm-6">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
