const initialState = {
     tvShows: [],
};


//GET SHOW
function getTvShow() {
     return {
          type: "GET_TV_SHOW",
     };
}


// ADD SHOW
function addTvShow(tvShow) {
     return {
          type: "ADD_TV_SHOW",
          payload: tvShow,
     };
}


// DELETE SHOW
function deleteTvShow(tvShow) {
     return {
          type: "DELETE_TV_SHOW",
          payload: tvShow,
     };
}


// TV SHOW REDUCER
function tvShowReducer(state = initialState, action) {
     switch (action.type) {
          case "ADD_TV_SHOW":
               return {
                    ...state,
                    tvShows: [...state.tvShows, action.payload],
               };
          case "DELETE_TV_SHOW":
               const updatedArr = state.tvShows.filter(
                    (show) => show !== action.payload
               );
               return {
                    ...state,
                    tvShows: updatedArr,
               };
          case "GET_TV_SHOW":
               return {
                    ...state,
               };
          default:
               return state;
     }
}



module.exports = {
     tvShowReducer,
     addTvShow,
     deleteTvShow,
     getTvShow
};