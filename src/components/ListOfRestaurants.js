import React from 'react'
import RestaurantCard from './RestaurantCard'
import * as restaurantData from "../data/restaurants.json"
import './ListOfRestaurants.css';

export default function ListOfRestaurant() {
    return (
        <div className="list-restaurant">
            <h2>Restaurants de la communauté Yellow</h2>
            {restaurantData.features.map(restaurant => (
            <RestaurantCard 
                name={restaurant.name}
                key={restaurant.ID}
                latitude={restaurant.latitude}
                longitude={restaurant.longitude}
            />
            ))}
        </div>
    )
        
}