import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPost = () => async (dispatch) => {
  const response = await JsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await JsonPlaceholder.get("/users/" + id);
  //   console.log(response.data);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
