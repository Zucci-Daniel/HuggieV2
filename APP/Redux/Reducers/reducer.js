import * as actionTypes from '../Actions/actionTypes';

const initialSatate = {
    token: null,

    loading: false,
    loading2: false,
    
    is_signup: null,

    posts: null
}

const reducer = (state = initialSatate, actions) => {
    switch (actions.type) {
        case actionTypes.LOADING: 
            return{loading: actions.value};
        case actionTypes.IS_SIGNUP: 
            return{is_signup: actions.value};
        case actionTypes.CLEARAUTHSTATE: 
            return{is_signup: null};
        case actionTypes.LOADING2: 
            return{loading2: actions.value};
        case actionTypes.POSTS:
            return{posts: actions.value}
    }
    return state;
}

export default reducer;