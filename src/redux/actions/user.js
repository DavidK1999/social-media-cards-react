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
            }  else {
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
                setTimeout(() => {
                    dispatch({type: 'MESSAGE', value: null});
                }, 1500);
            }
            
        } catch (error) {
            console.log('error');
        }
    }
}
export const getUsers = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/auth/retrieve/${getState().user.auth._id}`);
            const parsedResponse = await response.json();
            console.log(parsedResponse);
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'RETRIEVE', value: parsedResponse.data});
            }  else {
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
                setTimeout(() => {
                    dispatch({type: 'MESSAGE', value: null});
                }, 1500);
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
                dispatch({type: 'LOGIN', value: parsedResponse.data});
            }  else {
                dispatch({type: 'MESSAGE', value: parsedResponse.status.message});
                setTimeout(() => {
                    dispatch({type: 'MESSAGE', value: null});
                }, 1500);
            }
        } catch (error) {
            console.log('error');
        }
    }
}

export const updateUser = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/auth/add/${getState().user.auth._id}`, {
                method: 'PATCH',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'LIKEPOST', value: parsedResponse.data});
                console.log(getState().user.auth.likedPosts);
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }
}

export const increment = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/auth/count/${getState().user.auth._id}`, {
                method: 'PATCH',
            });
            const parsedResponse = await response.json();
            console.log(parsedResponse.data);
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'INCREMENT', value: parsedResponse.data});
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
            console.log(parsedResponse);
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'FOLLOW', value: parsedResponse.data});
            }
        } catch (error) {
            console.log('error', error);
            
        }
    }
}


export const logoutUser = () => {
    return  {type: UserTypes.LOGOUT}
}

