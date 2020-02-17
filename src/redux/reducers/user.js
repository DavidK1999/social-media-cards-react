import * as UserTypes from '../actiontypes/post'
const initialState =  {
    action: '',
    loggedIn: false,
    submitting: false,
    auth: {}
}

export default function User(state = initialState, action) {
    switch(action.type) {
        case 'MODAL':
            return {...state, action: state.action = action.value}
        case 'CLOSE':
            return {...state, action: state.action = ''}
        case 'LOGIN':
            return {
                ...state, loggedIn: state.loggedIn = true,
                ...state, action: state.action = '',
                ...state, auth: state.auth = {...action.value},
            }
        case 'REGISTER':
            return {
                ...state, loggedIn: state.loggedIn = true,
                ...state, action: state.action = '',
                ...state, auth: state.auth = {...action.value}
            }
        case 'LOGOUT':
            return {...state, loggedIn: state.logged = false, auth: state.auth = {}}
        case 'CREATE':
            return {...state, }
        default:
            return state
    }
}


