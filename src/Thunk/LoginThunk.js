import {
    loadUserInFailure,
    loadUserInSuccess,
    loadUserInProgress
} from "../actions";
const URI = "http://localhost:8080/";

export const displayAlert = text => () => {
    alert(text)
}

export const userLoginThunk = (userObj, history) => async (dispatch, getState) => {
    try {
        debugger
        dispatch(loadUserInProgress());
        const response = await fetch(URI + "login/" + userObj.username + "/" + userObj.password);
        const user = await response.json();
        dispatch(loadUserInSuccess(user));
        history.push("dashboard")
    } catch (e) {
        dispatch(loadUserInFailure());
        dispatch(displayAlert(e));
    }
}