import * as PostTypes from '../actiontypes/post';

const initialState = {
    action: '',
    posts: [],
    post: {}
}

export default function Post(state=initialState, action) {
    switch(action.type) {
        case PostTypes.OPENPOSTMODAL:
            return {...state, action: state.action = action.value}
        case PostTypes.CLOSEPOSTMODAL:
            return {...state, action: state.action = ''}
        case PostTypes.CREATE:
            return {
                ...state, posts: state.posts = [...state.posts, action.value],
                ...state, action: state.action = '',
            }
        case PostTypes.UPDATE:
            return {
                ...state, post: state.post = {...action.value},
                }
        case PostTypes.READ:
            return {
                    ...state, posts: state.posts = action.value,
                    ...state, action: state.action = ''
                    }
        case PostTypes.REMOVE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.value._id)}
        case PostTypes.FILTER:
            return {
                ...state, posts: state.posts.filter((post) => post.tags.includes(action.value))
            }
        case PostTypes.FILTERUSER:
            state.posts.forEach(post => console.log(post));
            return {
                ...state, posts: state.posts.filter((post) => post.user._id === action.value)
            }
        default:
            return state;
    }
}


