import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getActivity = url => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(url)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: FETCH_FAIL, payload: err });
        })
}