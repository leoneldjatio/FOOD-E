import * as actions from './actionTypes';
import axios from 'axios'

export const onUserLogin = (email,password) => {
     const token= email+password;
      return ({
           type:actions.LOGGED_IN,
            payload:token
        
             });
   
};
