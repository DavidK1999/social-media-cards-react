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
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
                setTimeout(() => {dispatch({type: 'MESSAGE', value: null}, 100)});
            }  else {
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
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
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
                setTimeout(() => {dispatch({type: 'MESSAGE', value: null}, 100)});
            }  else {
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
            }
        } catch (error) {
            console.log('error');
        }
    }
}

export const updateUser = value => {
    return async (dispatch, getState) => {
        console.log(getState().user.auth.likedPosts);
        try {
            const response = await fetch(`http://localhost:8000/auth/add/${getState().user.auth._id}`, {
                method: 'PATCH',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            console.log(parsedResponse.data);
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'LIKEPOST', value: parsedResponse.data});
                console.log(getState().user.auth.likedPosts);
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }
}

export const followUser = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/auth/follow/${getState().user.auth._id}`, {
                method: 'PATCH',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            console.log(parsedResponse.data);
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'FOLLOW', value: parsedResponse.data});
                console.log(getState().user.auth.likedPosts);
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }
}


export const logoutUser = () => {
    return  {type: UserTypes.LOGOUT}
}

