import React, {useState} from "react";
import AddRestaurantForm from './AddRestaurantForm'
import ReactMapGL from "react-map-gl"

function AddRestaurantPage () {
    const [viewport, setViewport] = useState({
        latitude: 43.5277, 
        longitude: 5.45873,
        width: "100vw",
        height: "100vh",
        zoom: 14,
      })


    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <AddRestaurantForm />
                </div>
                <div className="col-sm-5">
                    <div className="map">
                        <ReactMapGL {...viewport} 
                        mapboxApiAccessToken={"pk.eyJ1IjoiYW1lbGllbGMiLCJhIjoiY2p3YXZ1ZTFzMDZwdTN5bzFsdzZxYmJzMiJ9.rUx0VnEYBnJkDnTmrvH1jQ"}
                        onViewportChange={(viewport) => {setViewport(viewport)}}
                        mapStyle="mapbox://styles/amelielc/cjwgpybys051y1coo8y55hpwe"
                        />
                        </div>
                </div>
            </div>
        </div>
    )
}
export default AddRestaurantPage