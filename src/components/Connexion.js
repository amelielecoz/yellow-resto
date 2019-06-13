import React from "react";
import "./Connexion.css"

class Connexion extends React.Component {
  constructor() {
    super()
    this.state = {
      isConnected: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState(prevState => {
        return { isConnected: !prevState.isConnected }
      })
  }

  render() {
    return (
      <div class="container login-container">
            <div class="row">
                <div class="col-md-4 mx-auto login-form">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Connexion" />
                        </div>
                        <div class="form-group">
                            <a href="" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
  );
}
}

export default Connexion;