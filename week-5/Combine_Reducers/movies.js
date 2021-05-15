const initialState = {
     movies: [],
};


// GET MOVIE
function getMovie() {
     return {
          type: "GET_MOVIE",
     };
}


// ADD MOVIE
function addMovie(movie) {
     return {
          type: "ADD_MOVIE",
          payload: movie,
     };
}


// DELETE MOVIE
function deleteMovie(movie) {
     return {
          type: "DELETE_MOVIE",
          payload: movie,
     };
}


// MOVIES REDUCER
function movieReducer(state = initialState, action) {
     switch (action.type) {
          case "ADD_MOVIE":
               return {
                    ...state,
                    movies: [...state.movies, action.payload],
               };
          case "DELETE_MOVIE":
               const updatedArr = state.movies.filter(
                    (movie) => movie !== action.payload
               );
               return {
                    ...state,
                    movies: updatedArr,
               };
          case "GET_MOVIE":
               return {
                    ...state,
               };
          default:
               return state;
     }
}



module.exports = {
     movieReducer,
     addMovie,
     deleteMovie,
     getMovie
};