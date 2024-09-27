import { usersAPI } from "../api/users-api";


let initialState = {};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export const actions = {
    setEvents: (users) => ({ type: 'SET_USERS', users }),

}

export const addUser = (formData, eventId) => {
    return async(dispatch, getState) => {
        return await usersAPI.addUser(formData, eventId);
    }
}

export default usersReducer;