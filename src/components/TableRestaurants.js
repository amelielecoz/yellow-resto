import React from 'react'
import Table from 'react-bootstrap/Table'
import * as restaurantData from "../data/restaurants.json"

class TableRestaurants extends React.Component {
    constructor() {
        super()
    }

    render () {
        return(
            <div>          
                <h3>Restaurant</h3>
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Restaurant</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    {restaurantData.features.map(restaurant => (
                        <tr>
                            <td>{restaurant.ID}</td>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.latitude}</td>
                            <td>{restaurant.longitude}</td>
                            <td><button>Modifier</button><button>Supprimer</button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TableRestaurants