import React from 'react'
import ListOfRestaurants from './ListOfRestaurants'
import Map from './Map'

function Home () {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <ListOfRestaurants />
                </div>
                <div className="col-sm-6">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Home