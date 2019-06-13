import React from 'react'
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import AddRestaurantPage from './components/AddRestaurantPage'
import Connexion from './components/Connexion'
import Contact from './components/Contact'
import RestaurantPage from './components/RestaurantPage'
import ListOfRestaurants from './components/ListOfRestaurants'
import Administration from './components/Administration';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants : [], 
      comments : [],
    }
  }

  componentDidMount() {
    this.fetchRestaurants()
    this.fetchComments()
  }

  //créer classe pour les fetch + url d'api, methode asynchrones async await
  fetchRestaurants() {
    fetch('http://yellowresto.amelielecoz.com/api/yellowresto/index.php?action=getRestaurants')
      .then(response => response.json())
      .then(data => this.setState({restaurants: data.results.restaurants}))
  }

  fetchComments() {
    fetch('http://yellowresto.amelielecoz.com/api/yellowresto/index.php?action=postComment')
      .then(response => response.json())
      .then(data => this.setState({comments: data.results.comments}))
  }

  render() {
    return (
      <div className="App">
        <Router basename='/'>
          <Header />
            <Route exact path="/" component={Home} />
            <Route path="/ajouter" component={AddRestaurantPage} />
            <Route path="/connexion" component={Connexion} />
            <Route path="/contact" component={Contact} />
            <Route path="/restaurant/" component={RestaurantPage} />
            <Route path="/admin" component={Administration} />
          <Footer />
        </Router>
      </div>
      ) 
  }
  
  }
  export default App