//import 

const { LOAD_CONTACT, SUCC_CONTACT, FAIL_CONTACT, ONE_CONTACT } = require("../ActionTypes/contact")



// intial state 
const initialState = {
    listContacts: [],
    error: null , 
    load: false,
    contactToGet: {}
}


// pure function 
const contactReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case LOAD_CONTACT:
             return {...state, load: true }
        case SUCC_CONTACT:
             return {...state, load: false, listContacts: payload.listContacts }
        case FAIL_CONTACT:
             return {...state, load: false, error: payload }
        case ONE_CONTACT: 
        return {...state, load: false, contactToGet: payload.contactToGet }
        default:
            return state 
    }
} 


export default contactReducer;