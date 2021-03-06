import JsonPlaceholder from "../apis/JsonPlaceholder";
import _ from "lodash";

export const fetchPost = () => async (dispatch) => {
  const response = await JsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await JsonPlaceholder.get("/users/" + id);
  //   console.log(response.data);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
