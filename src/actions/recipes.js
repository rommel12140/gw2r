import * as types from '../types/types';
import { purgeStoredState } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//const baseUrl = 'http://127.0.0.1:8000/api/'
//const baseUrl2 = 'http://127.0.0.1:8000'
const baseUrl = 'http://192.168.254.108:8000/api/' // home
const baseUrl2 = 'http://192.168.254.108:8000/' // home

export function getAuth(data){
	console.log('here')
	return (dispatch,getState) => {
		return fetch(baseUrl2 + 'api-token-auth/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
			
		})
		.then((response) => response.json())
		.then((response) => {
      console.log(response.token)
      dispatch(setAuthToken({ token: response.token}))
		})
		.catch((error) => {
			console.log(JSON.stringify(error))
		})
	}
}

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(fetchPosts => dispatch({
            type: types.FETCH_POSTS,
            fetchPosts
        }));
};

export const createPost = (postData) => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(newPosts => dispatch({
        type: types.NEW_POSTS,
        newPosts
        })
      );
};

export function getEntry(token){
	return (dispatch,getState) => {
		return fetch(baseUrl+'snippets/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + token,
			},
			
		})
		.then((response) => response.json())
		.then((response) => {
      console.log(response.results)
	  dispatch(setEntry({ entry: response.results}))
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function getCheckVoucher(token){
	return (dispatch,getState) => {
		return fetch(baseUrl+'checkvoucher/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + token,
			},
			
		})
		.then((response) => response.json())
		.then((response) => {
      console.log(response.results)
	  dispatch(setCheckVoucher({ checkvoucher: response.results}))
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function addCheckVoucher(token,body){
	return (dispatch,getState) => {
		return fetch(baseUrl+'checkvoucher/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + token,
			},
			body: body
			
		})
		.then((response) => {
      		console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function resetState(){
	purgeStoredState({storage: storage})
	return (dispatch,getState) => {
	  dispatch(setState())
	}
}


export function getMessage(message) {
	return (dispatch, getState) => {
		return dispatch(setMessage({ setMessage: message}));
	}
}



export function setMessage( { setMessage } ) {
	return {
		type: types.SET_MESSAGE,
		setMessage
	}
}

export function setAuthToken( { token } ) {
	return {
		type: types.SET_TOKEN,
		token
	}
}

export function setEntry( { entry } ) {
	return {
		type: types.SET_ENTRY,
		entry
	}
}

export function setCheckVoucher( { checkvoucher } ) {
	return {
		type: types.SET_CHECK_VOUCHER,
		checkvoucher
	}
}

export function setState() {
	return {
		type: types.RESET_STATE,
	}
}