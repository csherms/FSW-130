import React from 'react'
import {MovieContextConsumer} from './movieContext'
import './movieForm.css'

export class MovieForm extends React.Component {
     state = {
          title: "",
          rated: ""
     }

     handleChange = (e) => {
          const {name, value} = e.target
          this.setState({[name] : value})
     }

     clearField = (e) => {
          this.setState({
               title: "",
               rated: ""
          })
     }

     render() {

          return (
               <MovieContextConsumer>
                    {({addMovies}) => (
                         <div>
                              <form className="form-container">
                                   <input 
                                        type="text"
                                        name="title"
                                        placeholder="New Movie Title"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                   />
                                   <input 
                                        type="text"
                                        name="rated"
                                        placeholder="What is this movie rated?"
                                        value={this.state.rated}
                                        onChange={this.handleChange}
                                   />
                                   <button
                                   onClick={(e) => {addMovies(e, this.state); this.clearField()}} type="submit">
                                   Add Movie</button>
                              </form>
                         </div>
                    )}
               </MovieContextConsumer>
          )
     }
}

export default MovieForm
