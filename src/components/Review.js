import React from 'react'

class Review extends React.Component {
    constructor() {
        super()
        this.state = {
            restaurantID : ''
        }
    }

    componentDidMount() {

    }

    render () {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Paul</h5>
                    <h6 className="card-subtitle mb-2 text-muted">"Super expérience, bon brunch"</h6>
                    <p className="card-subtitle mb-2 text-muted">Note : 4/5</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Signaler</a>
                </div>
            </div>
        )
    }
}

export default Review