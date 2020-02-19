import {useState} from 'react';
import { loginUser, registerUser, updateUser, followUser, increment} from '../redux/actions/user';
import { makePost, removePost, updatePost, upvotePost, findTaggedPosts } from '../redux/actions/post';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const useForm = () => {
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const message = useSelector(state => state.user.message);
    const history = useHistory();
    
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
        dispatch(increment());
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

    const findTagged = tag => {
        history.replace(`/home/${tag}`);
        dispatch(findTaggedPosts(tag));
    }

    const createTags = e => {
        let modifiedText = e.currentTarget.value.replace(/\s/g, '')
            let tags = modifiedText.split(",");
            for(let tag of tags) {
                if(tag.length > 10) {
                    return dispatch({type: 'MESSAGE', value: 'Max of ten characters per tag'})
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


    return { 
             register,   login,   handleInputChange, 
             inputs,     createPost,     createTags, 
             deletePost, setPostInState,   editPost,
             likePost,   message, follow, findTagged
           }
}

export default useForm;