import {useState} from 'react';
import { loginUser, registerUser} from '../redux/actions/user';
import { makePost, removePost, updatePost } from '../redux/actions/post';
import { useDispatch } from 'react-redux';


const useForm = () => {
    // TODO add a callback function to dispatch an action from Auth Form
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();

    const register = async e => {              
        e.preventDefault();
        dispatch(registerUser(inputs));
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

    const createTags = e => {
        let modifiedText = e.currentTarget.value.replace(/\s/g, '')
            let tags = modifiedText.split(",");
            setInputs({...inputs, tags});
    }
    
    const handleInputChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    return { register, login, handleInputChange, 
             inputs,   createPost, createTags, 
            deletePost, setPostInState, editPost 
        }
}

export default useForm;