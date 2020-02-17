import * as PostTypes from '../actiontypes/post'

export const closeModal = () => {
    return  {type: PostTypes.CLOSEPOSTMODAL}

}

export const openPostModal = value => {
    return  {
        type: PostTypes.OPENPOSTMODAL,
        value
    }
}

export const storePostInState = value => {
    return {
        type: PostTypes.UPDATE,
        value
    }
}

export const getPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/post/retrieve`);
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'READ', value: parsedResponse.data});
            }
        } catch (error) {
            console.log('error');
        }
    }
}

export const makePost = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/post/create/${getState().user.auth._id}`, {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'CREATE', value: parsedResponse.data});
            }
        } catch (error) {
            console.log('error');
        }
    }
} 

export const updatePost = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/post/update/${getState().post.post._id}`, {
                method: 'PUT',
                body: JSON.stringify(value),
                headers: {'Content-Type' : 'application/json'}
            });
            
            const parsedResponse = await response.json();
            const updatedPosts = getState().post.posts.map((post => {
                if (post._id === parsedResponse.data._id) {
                    post = parsedResponse.data
                }
                return post
            }));
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'READ', value: updatedPosts});
            }
        } catch (error) {
            console.log('error'); 
        }
    }
}

export const upvotePost = upvoted => {
    return async (dispatch, getState) => {
        try {
            const postResponse = await fetch(`http://localhost:8000/post/update/${upvoted._id}`, {
                method: 'PATCH',
                body: JSON.stringify(upvoted),
                headers: {'Content-Type' : 'application/json'}
            });

            const updatedPostResponseParsed = await postResponse.json();
            const updatedPosts = getState().post.posts.map((post => {
                if (post._id === updatedPostResponseParsed.data._id) {
                    post = updatedPostResponseParsed.data
                }
                return post
            }));
            if(updatedPostResponseParsed.status.code === 200) {
                dispatch({type: 'READ', value: updatedPosts});
            }
        } catch (error) {
            console.log('error', error); 
        }
    }
}

export const removePost = value => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/post/delete/${value._id}`, {
                method: 'DELETE',
            });
            const parsedResponse = await response.json();
            if(parsedResponse.status.code === 200) {
                dispatch({type: 'REMOVE', value: parsedResponse.data});
            }
        } catch (error) {
            console.log('error', error);
        }
    }
} 