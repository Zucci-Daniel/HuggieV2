import * as actionTypes from '../Actions/actionTypes';

const initialSatate = {
    token: null,

    loading: false,
    loading2: false,
    
    is_signup: null,

    posts: null,
    reload: 0,

    screen: null
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
            return{...state, loading2: actions.value};
        case actionTypes.POSTS:
            return{...state, posts: actions.value};
        case actionTypes.RELOAD:
            return{...state, reload: actions.value};
        case actionTypes.SCREEN:
            return{...state, screen: actions.value}
    }
    return state;
}

export default reducer;