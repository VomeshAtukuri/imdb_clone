//About useReducer Hook
//useReducer take two parameters reducer function , initialState
//reducer --> currentstate , action
//return pair of values --> newstate,dispatch


export const initialState = {
    cartmovies: [],
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "add_movie":
            const movieExists = state.cartmovies.find((movie) => movie.id === action.payload.id);
            if (movieExists) {
                return state;
            }
            return {
                ...state,
                cartmovies: [...state.cartmovies, action.payload],
            };
        case "remove_movie":
            return {
                ...state,
                cartmovies: state.cartmovies.filter((movie) => movie.id !== action.payload.id),
            };
        default:
            return state;
    }
}

