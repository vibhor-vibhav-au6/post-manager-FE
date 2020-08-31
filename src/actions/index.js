// import jsonPlaceholder from '../apis/jsonPlaceholder';
import postManagerAPI from "../apis/postManagerAPI";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await postManagerAPI.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await postManagerAPI.get(`/user/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});

// export const fetchUser = function(id) {
//     return _.memoize(async function(dispatch)  {
//     const response = await postManagerAPI.get(`/user/${id}`);

//     dispatch({type:'FETCH_USER', payload: response.data})
//     });
// }

// export const fetchPosts = ()  => {

//     return {
//         type:'FETCH_POSTS',
//         payload: 'promise'
//     };
// };
