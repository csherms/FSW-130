import React from 'react'
import {ListContextConsumer} from '../context'

function Form (props) {
  return (
    <ListContextConsumer>
      {items => (
        <div id="form">
          <form onSubmit={items.sub}>
            <input onChange={items.change} type="text" name="name" placeholder="Name"></input>
            
            <input onChange={items.change} type="text" name="desc" placeholder="Description"></input>
            <br />
            <input onChange={items.change} type="text" name="site" placeholder="Image URL"></input>
            <br />
            <button id="button">Add</button>
            <br />
          </form>
          
        </div>
      )}
      
    </ListContextConsumer>
      
  )
}

export default Form
