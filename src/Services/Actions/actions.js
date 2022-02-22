import {ADD_TO_CART} from '../constants';
import { GET_USERS } from '../constants';
import axios from 'axios';

// export const addToCart = (data) => {
//     return {
//         type:ADD_TO_CART,
//         data:data
//     }
// }

// export const getUsers = (users) => {
//     return{
//         type: GET_USERS,
//         payload: users
//     }
// }

// export const loadUsers = () => {
//     return function (dispatch){
//         axios.get("http://localhost:3005/posts").then(
//             (resp) => {
//                 console.log("resp", resp);
//                 dispatch(getUsers(resp.data));
//             }).catch((error) => console.log(error))}
// }

export const addToCart  =()=>(dispatch:any)=> {

    let url = "http://localhost:3005/posts"
    let result = fetch(url).then(
        (data)=> {
            data.json().then(
                (datajson)=>{
                   
                    return dispatch({
                            type: ADD_TO_CART,
                            data:datajson,
                    })
                })
        }

    )}
    
  