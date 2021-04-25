import React from 'react'
import { ListContextConsumer } from '../context'

function Card (props) {
  let count = 1
  return (
    <ListContextConsumer>
      {list => (
        <div>          
            {list.list.map((item) => {
              count += 1
              console.log(count)
              return (
                <div id = {count} key = {count}>
                  <h2>{item.name}</h2>
                  <img src={item.img} alt=""/>
                  <p>{item.desc}</p>
                  <button type="submit" id="edit">Edit</button>
                  <button type="submit" id="update">Update</button>
                  <button type="submit" className="cards" onClick={list.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ListContextConsumer>
  )
}

export default Card