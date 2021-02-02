import actionTypes from './actionTypes';

export const userLogin = userState => ({
    type: actionTypes.USER_LOGIN,
    payload: {
        userState
    }
});

export const userLogout = () => ({
    type: actionTypes.USER_LOGOUT
});

export const loadUserInProgress = () => ({
    type: actionTypes.LOAD_USER_PROGRESS
});

export const loadUserInFailure = () => ({
    type: actionTypes.LOAD_USER_FAILURE
});

export const loadUserInSuccess = userState => ({
    type: actionTypes.LOAD_USER_SUCCESS,
    payload: {
        userState
    }
});

export const memberAdd = members => ({
    type: actionTypes.MEMBER_ADD,
    payload: {
        members
    }
});


export const memberEdit = members => ({
    type: actionTypes.MEMBER_EDIT,
    payload: {
        members
    }
});

export const memberDelete = members => ({
    type: actionTypes.MEMBER_DELETE,
    payload: {
        members
    }
});

export const loadMemberInProgress = () => ({
    type: actionTypes.LOAD_MEMBER_PROGRESS
});

export const loadMemberInFailure = () => ({
    type: actionTypes.LOAD_MEMBER_FAILURE
});

export const loadMemberInSuccess = members => ({
    type: actionTypes.LOAD_MEMBER_SUCCESS,
    payload: {
        members
    }
});

export const deleteMemberInSuccess = id => ({
    type:actionTypes.MEMBER_DELETE,
    payload:{
        id
    }
})
export const loadMemberDetail = member => ({
    type: actionTypes.MEMBER_DETAIL_SUCCESS,
    payload: {
        member
    }
});

export const updateMemberDetail = member => ({
    type: actionTypes.MEMBER_EDIT,
    payload: {
        member
    }
});

export const addMemberDetail = member => ({
    type: actionTypes.MEMBER_ADD,
    payload: {
        member
    }
});