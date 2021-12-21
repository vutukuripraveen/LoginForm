import React, { Component }  from 'react';
import Cookies from 'js-cookie'


import './index.css'

class LoginForm extends Component {
    state = {
      username: '',
      password: '',
      showSubmitError: false,
      errorMsg: '',
    }
  
    onChangeUsername = event => {
      this.setState({username: event.target.value})
    }
  
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }
  
    onSubmitSuccess = jwtToken => {
      const {history} = this.props
  
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    }
  
    onSubmitFailure = errorMsg => {
      this.setState({showSubmitError: true, errorMsg})
    }
  
    submitForm = async event => {
      event.preventDefault()
      const {username, password} = this.state
      const userDetails = {username, password}
      const url = 'https://snapkaro.com/eazyrooms_staging/api/userlogin'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    }
  
    renderPasswordField = () => {
      const {password} = this.state
      return (
        <>
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
        </>
      )
    }
  
    renderUsernameField = () => {
      const {username} = this.state
      return (
        <>
          <label className="input-label" htmlFor="username">
            Email address*
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={this.onChangeUsername}
          />
        </>
      )
    }
  
    render() {
      const {showSubmitError, errorMsg} = this.state
      return (
        <div className="login-form-container">
            
          <form className="form-container" onSubmit={this.submitForm}>
              <div>
              <h1>Sign IN</h1>
            <p>Don't have an account? <strong>sign up</strong></p>
              </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className=" input-container">
            <input type="checkbox" id="username" className="username-input-field"/>
            <label className="input-label" htmlFor="username">
            Remember me
            </label>
            <div>
            <p><strong>forget password?</strong></p>
            </div>
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
             <p> or continue with</p>
             <div className="icons-container">
            <img
                src="https://res.cloudinary.com/dgahohki4/image/upload/v1636705961/Vector_i0gzfi.png"
                alt="cat"
            />
            <img
                src="https://res.cloudinary.com/dgahohki4/image/upload/v1636705972/instagram_wshnbi.png"
                alt="instagram"
            />
            <img
                src="https://res.cloudinary.com/dgahohki4/image/upload/v1636705984/path3611_cebjrx.png"
                alt="twitter"
            />
            </div>
          </form>
        </div>
      )
    }
  }
  
export default LoginForm