import React, { Component }  from 'react';
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class SignUp extends Component {
    state = {
      email:'',
      username: '',
      password: '',
      comapany:'',
      showSubmitError: false,
      errorMsg: '',
    }
  
    onChangeUsername = event => {
      this.setState({username: event.target.value})
    }

    onChangeEmail = event => {
        this.setState({email: event.target.value})
      }

    onChangeComapany = event => {
        this.setState({comapany: event.target.value})
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
  
    submitForm1 = async event => {
      event.preventDefault()
      const {username, password} = this.state
      const userDetails = {username, password}
      const url = 'https://snapkaro.com/eazyrooms_staging/api/user_registeration'
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
            Full name*
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
    renderEmailField = () => {
        const {email} = this.state
        return (
          <>
            <label className="input-label" htmlFor="email">
              Email Address*
            </label>
            <input
              type="text"
              id="email"
              className="username-input-field"
              value={email}
              onChange={this.onChangeEmail}
            />
          </>
        )
      }

      renderCompanyField = () => {
        const {comapany} = this.state
        return (
          <>
            <label className="input-label" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              className="username-input-field"
              value={comapany}
              onChange={this.onChangeComapany}
            />
          </>
        )
      }
  
    render() {
      const {showSubmitError, errorMsg} = this.state
      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken !== undefined) {
        return <Redirect to="/" />
      }
      return (
        <div className="login-form-container">
            
          <form className="form-container" onSubmit={this.submitForm1}>
              <div>
              <h1>Sign Up</h1>
            <p>Already have an account? <strong>sign In</strong></p>
              </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderEmailField()}</div>
            <div className="input-container">{this.renderCompanyField()}</div>
            <div className=" input-container">
            <input type="checkbox" id="username" className="username-input-field"/>
            <label className="input-label" htmlFor="username">
            I agree to the <strong>Terms of Services</strong> and <strong>Privacy Policy</strong> 
            </label>
            <div>
            
            </div>
            </div>
            <button type="submit" className="login-button">
              Create your free account
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
             
          </form>
        </div>
      )
    }
  }
  
export default SignUp