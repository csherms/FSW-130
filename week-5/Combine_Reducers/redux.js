const redux = require("redux");

const { movieReducer, addMovie, deleteMovie, getMovie } = require("./movies");

const { tvShowReducer, addTvShow, deleteTvShow, getTvShow } = require("./tvshows");


// DECLARING MAIN REDUCER
let mainReducer = redux.combineReducers({
  movies: movieReducer,
  tvShows: tvShowReducer,
});


//CREATING STORE
const store = redux.createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState());
});


//ADD MOVIES
store.dispatch(addMovie("Django"));
store.dispatch(addMovie("Pulp Fiction"));
store.dispatch(addMovie("Reservoir Dogs"));


//ADD TV SHOWS
store.dispatch(addTvShow("Breaking Bad"));
store.dispatch(addTvShow("Ozark"));
store.dispatch(addTvShow("The Handmaid's Tale"));


//DELETE MOVIES
store.dispatch(deleteMovie("Pulp Fiction"));


//DELETE SHOWS
store.dispatch(deleteTvShow("The Handmaid's Tale"))


//DISPATCH
store.dispatch(getMovie());
store.dispatch(getTvShow());