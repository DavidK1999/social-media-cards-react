const initialState =  {
    action: '',
    loggedIn: false,
    submitting: false,
    message: '',
    auth: {}
}

export default function User(state = initialState, action) {
    switch(action.type) {
        
        case 'MODAL':
            return {...state, message: state.message = null,
                ...state, action: state.action = action.value}

        case 'CLOSE':
            return {...state, action: state.action = ''}
        
        case 'RETRIEVE':
            return {...state, auth: state.auth = {}}

        case 'MESSAGE':
            return {...state, message: state.message = action.value}
        
            case 'LOGIN':
                return {...state, loggedIn: state.loggedIn = true,
                    ...state, action: state.action = '',
                    ...state, auth: state.auth = {...action.value}}

        case 'REGISTER':
                return {...state, loggedIn: state.loggedIn = true,
                    ...state, action: state.action = '',
                    ...state, auth: state.auth = {...action.value}}
        
        case 'LOGOUT':
            return {...state, loggedIn: state.logged = false, auth: state.auth = {}}
        
        case 'LIKEPOST':
            return {...state, auth: state.auth.likedPosts = {...action.value}}
        
        case 'INCREMENT':
            return {...state, auth: state.auth.createdPosts = {...action.value}}
        
        case 'FOLLOW':
            return {...state, auth: state.auth = {...action.value}}
        
        default:
            return state
    }
}


