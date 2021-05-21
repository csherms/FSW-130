import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as contactAction from './actions/contactAction';

class App extends Component {

  constructor(props){
    super(props);
     
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value})
}

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    }
    this.setState({
      name: '',
      phone: '',
      email: ''
    });
    this.props.createContact(contact);
  }

  listView(data, index){
    return (
      <div>
        <div>
          <div key={index}>
            <p>Name: {data.name}</p>
            <p>Phone: {data.phone}</p>
            <p>Email: {data.email}</p>
          </div>
        </div>
        <div>
          <button onClick={(e) => this.deleteContact(e, index)}>
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    return(
      <div className="container">
        <h1>Contact-List</h1>
        <hr />
        <div>
          <h3>Enter Contacts:</h3>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              onChange={this.handleChange} 
              placeholder="Enter Name" 
              value={this.state.name} 
              name="name"
            />
            <input 
              type="text" 
              onChange={this.handleChange} 
              placeholder="Enter Phone" 
              value={this.state.phone} 
              name="phone"
            />
            <input 
              type="text" 
              onChange={this.handleChange} 
              placeholder="Enter Email" 
              value={this.state.email} 
              name="email"
            />
            <input 
              type="submit" 
              value="ADD"
            />
          </form>
          <br/>
          <hr />
          { <div>
            {this.props.contacts.map((contact, i) => this.listView(contact, i))}
          </div> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);