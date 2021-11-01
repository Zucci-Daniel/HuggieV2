import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionTypes from './actionTypes';

const url = "https://huggie.herokuapp.com/api/";

export const signup = (token) => {
    return{
        type: actionTypes.IS_SIGNUP,
        value: token
    }
};
 
const setLoading = (value) => {
    return{
        type: actionTypes.LOADING,
        value: value
    }
};

export const setLoading2 = (value) => {
    return{
        type: actionTypes.LOADING2,
        value: value
    }
};

const clearAuthState = () => {
    type: actionTypes.CLEARAUTHSTATE
};

export const Auth = (data, type) => {
    var formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("password", data.password);
    formdata.append("email", data.email);

    return dispatch => {
        dispatch(setLoading(true));
        axios.post(url + 'account/register/', formdata)
            .then(response => {
                AsyncStorage.setItem('username', response.data.username );
                AsyncStorage.setItem('email', response.data.email);
                AsyncStorage.setItem('authToken', response.data.token);
                const id = response.data.id;
                AsyncStorage.setItem('@id', id.toString());
                AsyncStorage.setItem('sex', data.sex);

                dispatch(setScreen(true));
                dispatch(setLoading(false));
                dispatch(signup(response.data.token));
            })
            .catch(e => {
                console.log('error ' + e);
                dispatch(setLoading(false));
            })
    }
};

export const setScreen = (value) => {
    return dispatch => {
        AsyncStorage.setItem('newScreen', 'something')
    }
}

export const initAuth = () => {
    return dispatch => {
        const value = AsyncStorage.getItem('authToken');
        if(value !== null){
            signup(value)
            console.log(value, '1')
        }else{
            clearAuthState()
            console.log(value, '2')
        }
    }
};

export const logout = () => {
    return dispatch => {
        AsyncStorage.clear()
        dispatch(clearAuthState())
    }
};

const screen2 = () => {
    return{
        type: actionTypes.SCREEN2
    }
};

export const login = (data) => {
    return dispatch => {
        const formdata = new FormData();
        formdata.append('username', data.username);
        formdata.append('password', data.password);

        dispatch(setLoading(true));
        axios.post('https://huggie.herokuapp.com/api/account/', formdata)
            .then(response => {
                AsyncStorage.setItem('username', response.data.user );
                AsyncStorage.setItem('authToken', response.data.token);
                const id = response.data.id;
                AsyncStorage.setItem('@id', id.toString());
                AsyncStorage.setItem('loginId', response.data.token);
                console.log('successful', response.data.token);
                dispatch(setLoading(false));
                dispatch(signup(response.data.token));
            })
            .catch(e => {
                console.log(e)
                dispatch(setLoading(false));
            })
    }
}

export const posts = () => {
    return dispatch => {
        axios.get('https://huggie.herokuapp.com/api/profiles/')
        .then(r => {
            console.log(r.data);
            dispatch(setPosts(r.data))
        })
        .catch(e => {
            console.log(e);
            dispatch(setPosts(e.data))
        })
    }
}

const setPosts = (val) => {
    return{
        type: actionTypes.POSTS,
        value: val
    }
}