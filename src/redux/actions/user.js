import * as UserTypes from '../actiontypes/user';

export const openModal = () => {
    return  {type: UserTypes.OPEN}
}

export const modal = value => {
    return {
        type: UserTypes.MODAL,
        value 
    }
}

export const closeModal = () => {
    return  {type: UserTypes.CLOSE}
}

export const registerUser = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('http://localhost:8000/auth/register', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'REGISTER', value: parsedResponse.data});
                console.log(getState().user.auth);
            }
        } catch (error) {
            console.log('error');
        }
    }
}

export const loginUser = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('http://localhost:8000/auth/login', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'REGISTER', value: parsedResponse.data});
            }
        } catch (error) {
            console.log('error');
        }
    }
}


export const logoutUser = () => {
    return  {type: UserTypes.LOGOUT}
}

