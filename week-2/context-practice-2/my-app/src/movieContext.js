import React from "react";
import movieData from "./movieData.json"


const {Provider, Consumer} = React.createContext();

class MovieContextProvider extends React.Component {

    state = {
        movies: movieData
    }
    
    addMovies = (e, movie) => {
        e.preventDefault()
        this.setState({
            movies: [...this.state.movies, movie]
            
        })
    }
    
    render() {

        return (
            <div>
            <Provider value=
                {{...this.state,
                addMovies: this.addMovies}}>
                {this.props.children}
            </Provider>
            </div>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer};