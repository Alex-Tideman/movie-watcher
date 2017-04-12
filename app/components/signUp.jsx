import React, { Component } from 'react';
import { Link, Redirect } from 'react-router';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', name: '' };
  }

  handleSubmit(e) {
    e.preventDefault()
    const body = this.handleLowerCase();
    fetch(`api/users`, { method: "POST", headers: {
    'Content-Type': 'application/json' },
    body: JSON.stringify(body)})
    .then((response) => {
      response.json()
      .then((response) => {
        this.props.signInUser(response.data);
        this.fetchFavorites(response.data.id);
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  fetchFavorites(id) {
    fetch(`api/users/${id}/favorites`)
    .then((response) => {
      response.json()
      .then((response) => {
        this.props.recieveUserFavorites(response.data);
        this.props.history.push('/')
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleLowerCase() {
    const { email, password, name } = this.state;
    return {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
      name: name.toLowerCase()
    }
  }

  handleChange(e, key) {
    const { value } = e.target;
    this.setState({ [key]: value });
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Name: <br/>
        <input type='text' value={name} onChange={ (e) => this.handleChange(e, 'name') }/><br/>
        Email: <br/>
        <input type='text' value={email} onChange={ (e) => this.handleChange(e, 'email') }/><br/>
        Password: <br/>
        <input type='text' value={password} onChange={ (e) => this.handleChange(e, 'password') }/><br/>
        <input type='submit' value='Login'/><br/>
      </form>
    )
  }
}
