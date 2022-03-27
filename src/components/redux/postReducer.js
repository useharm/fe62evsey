const defaultState = {
    posts: [],
    post: []
  };
  
  const ADD_POST = "ADD_POST";
  const REMOVE_POST = "REMOVE_POST";
  const OPEN_POST = "OPEN_POST";
  const REMOVE_CURRENT = "REMOVE_CURRENT";
  const ADD_MANY_POSTS = "ADD_MANY_POSTS"
  
  export function postReducer(state = defaultState, action) {
    switch (action.type) {
      case ADD_POST:
        return { ...state, posts: [...state.posts, action.payload] };

      case ADD_MANY_POSTS:
        action.payload.map((prev, index) => prev.id = Date.now() + index)
       return {...state, posts: [...state.posts, ...action.payload]};
  
      case REMOVE_POST:
        return {
          ...state,
          posts: state.posts.filter((del) => del.id !== action.payload)
        };
  
      case OPEN_POST:
        return { ...state, post: [state.post, action.payload] };
  
      case REMOVE_CURRENT:
        return {
          ...state,
          post: state.post.filter((del) => del.id !== action.payload)
        };
  
      default:
        return state;
    }
  }
  
  export const addPostAction = (payload) => {
    return { type: ADD_POST, payload };
  };
  
  export const removePostAction = (payload) => {
    return { type: REMOVE_POST, payload };
  };
  
  export const openPostAction = (payload) => {
    return { type: OPEN_POST, payload };
  };
  
  export const removeCurrentAction = (payload) => {
    return { type: REMOVE_CURRENT, payload };
  };
  
  export const addManyPostsAction = (payload) => {
    return { type: ADD_MANY_POSTS, payload}
  }