import React from "react";

import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import TableRestaurants from './TableRestaurants'
import TableReviews from './TableReviews.js'
import { Route } from 'react-router-dom'

export default function Administration () {
  return (
    <div className="restaurant-container container">
        <Navbar bg="light" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/admin/table-restaurants">Restaurants</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/table-reviews">Avis</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/table-users">Utilisateurs</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
                    <Button variant="outline-success">Valider</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
      <div className="row">
        <div className="col-sm-12 mx-auto">
        <Route path="/admin/table-restaurants" component={TableRestaurants} />
        <Route path="/admin/table-reviews" component={TableReviews} />
        <Route path="/admin/table-users" component={TableReviews} />
            
        </div>
      </div>
    </div>
  )
}