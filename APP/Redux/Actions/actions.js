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

export const postData1 = (data) => {
    return dispatch => {
        // var formdata = new FormData();
        // formdata.append('institution', data.institution);
        // formdata.append('department', data.department);
        // formdata.append('description', data.description);
        // formdata.append('sex', data.sex);
        // formdata.append('level', data.level);

        // var myHeaders = new Headers();
        // myHeaders.append('Authorization', 'JWT ' + data.token);
        // myHeaders.append('Content-Type', 'application/json');
        // myHeaders.append('Accept', 'application/json')

        // var requestOptions = {
        //     method: 'GET',
        //     mode: 'no-cors',
        //     credentials: 'same-origin',
        //     headers: myHeaders,
        //     body: formdata,
        //     redirect: 'follow'
        //   };

        // axios.put('https://huggie.herokuapp.com/api/profiles/43/', requestOptions)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log('error', error.response.data))

        // // var request = new XMLHttpRequest();
        // // request.onreadystatechange = (e) => {
        // //     if(request.readyState !== 4){
        // //         return;
        // //     }

        // //     if (request.status === 200) {
        // //         console.log('success', request.responseText);
        // //     } else {
        // //         console.warn(error);
        // //     }
        // // };

        // // request.open('PUT', 'https://huggie.herokuapp.com/api/profiles/41/', formdata );
        // // request.send();
    }
}

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