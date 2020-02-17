import {useState} from 'react';
import { loginUser, registerUser, updateUser, followUser} from '../redux/actions/user';
import { makePost, removePost, updatePost, upvotePost } from '../redux/actions/post';
import { useDispatch, useSelector } from 'react-redux';


const useForm = () => {
    // TODO add a callback function to dispatch an action from Auth Form
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const message = useSelector(state => state.user.message);
    

    const register = async e => {              
        e.preventDefault();
        dispatch(registerUser(inputs));

    }

    const follow = user => {
        dispatch(followUser(user));
    }
    
    const login = e => {
        e.preventDefault();
        dispatch(loginUser(inputs));

    }

    const createPost = e => {
        e.preventDefault();
        dispatch(makePost(inputs))
    }

    const deletePost = post => {
        dispatch(removePost(post))
    }

    const setPostInState = post => {
        dispatch({type: 'UPDATE', value: post});
        dispatch({type: 'OPENPOSTMODAL', value: 'edit'});
    }

    const editPost = e => {
        e.preventDefault();
        dispatch(updatePost(inputs))
    }

    const likePost = post => {
        dispatch(upvotePost(post));
        dispatch(updateUser(post));
    }

    const createTags = e => {
        let modifiedText = e.currentTarget.value.replace(/\s/g, '')
            let tags = modifiedText.split(",");
            for(let tag of tags) {
                if(tag.length > 10) {
                    return dispatch({type: 'MESSAGE', value: 'Max of ten characters per tag'});
                }
            }
            if(tags.length > 10) {
                dispatch({type: 'MESSAGE', value: 'Max of ten tags'})
            } else {
                dispatch({type: 'MESSAGE', value: null});
            }
            setInputs({...inputs, tags});
    }
    
    const handleInputChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }


    return { register, login, handleInputChange, 
             inputs,   createPost, createTags, 
            deletePost, setPostInState, editPost,
            likePost, message, follow
        }
}

export default useForm;