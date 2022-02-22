import {ADD_TO_CART} from '../constants'
import { GET_USERS } from '../constants'

const initialState = {
    cardData:[],
    users:[],
    // loading:true,
}
export default function cardItems(state=[],action){
    switch(action.type){
       case ADD_TO_CART:
           return {
            ...state,
            data:action.data
           }
            
           
        // case GET_USERS:
        //     return {
        //         ...state,
        //         id : action.id
        //     }
           
        default:
            return state
    }
}