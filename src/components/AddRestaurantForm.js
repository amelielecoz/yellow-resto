import React from "react";
import "./AddRestaurant.css"

class AddRestaurantForm extends React.Component {

  render() {
    return (
        <div>
            <div className="container add-restaurant-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Ton prénom</label>
                        <input type="text" className="form-control" id="name" placeholder="Prénom" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="restaurant-name">Nom du restaurant</label>
                        <input type="text" className="form-control" id="restaurant-name" placeholder="Nom du restaurant" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Adresse</label>
                        <input className="form-control" rows="3" id="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postcode">Code postal</label>
                        <input className="form-control"  id="postcode" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Ville</label>
                        <input className="form-control" id="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Téléphone</label>
                        <input type="number" className="form-control" id="telephone" placeholder="04.XX.XX.XX.XX"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
  );
}
}

export default AddRestaurantForm;