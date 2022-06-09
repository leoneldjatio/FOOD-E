import * as actions from '../actions/actionTypes';

const initialState ={
    authToken:null,
    userData:{},
    anyData:[], 
}

export const userReducer = (state={initialState},action)=>{
    switch(action.type){
     case actions.LOGGED_IN:
         return {
             ...state,
             authToken:action.payload
         };
         default:
             return state;

    }
}



