import actionTypes from '../actionTypes'

const intialState = { isProcessLoading: false, isRouteAllowed: false, data: [] }

export default function users(userState = intialState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...userState,
                isRouteAllowed: true,
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...userState,
                data: [],
                isProcessLoading: false,
                isRouteAllowed: false,
            }
        case actionTypes.LOAD_USER_PROGRESS:
            return {
                ...userState,
                isProcessLoading: true,
                isRouteAllowed: false,
            };
        case actionTypes.LOAD_USER_SUCCESS:
            return {
                ...userState,
                data: action.payload.userState,
                isRouteAllowed: true,
                isProcessLoading: false
            }
        case actionTypes.LOAD_USER_FAILURE:
            return {
                ...userState,
                isProcessLoading: false,
                isRouteAllowed: false,
            };
        default:
            return userState;
    }
}