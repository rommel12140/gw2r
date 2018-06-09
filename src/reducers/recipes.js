import * as types from '../types/types';
import createReducer from '../lib/createReducer'

export const SetMessage = createReducer('',{
	[types.SET_MESSAGE](state, action){
		return action.setMessage;
	},
})
export const FetchPosts = createReducer([],{
	[types.FETCH_POSTS](state, action){
		return action.fetchPosts;
	},
})
export const NewPosts = createReducer({},{
	[types.NEW_POSTS](state, action){
		return action.newPosts;
	},
})

export const Entry = createReducer([],{
	[types.SET_ENTRY](state, action){
		return action.entry;
	},
})

export const CheckVoucher = createReducer([],{
	[types.SET_CHECK_VOUCHER](state, action){
		return action.checkvoucher;
	},
})

export const Token = createReducer('',{
	[types.SET_TOKEN](state, action){
		return action.token;
	},
})

export const ResetState = createReducer("", {
	[types.RESET_STATE](state , action){
		return ''; 
	}
})
