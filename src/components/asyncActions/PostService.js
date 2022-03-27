import { addManyPostsAction } from "../redux/postReducer"


export function fetchPosts() {
    return function(dispatch) {
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())
  .then(json => dispatch(addManyPostsAction(json)))
  .then(json => console.log(json))
 
    }
}