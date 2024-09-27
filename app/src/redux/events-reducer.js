import { eventsAPI } from "../api/events-api";

let initialState = {
    events: [],
    participants: [],
    page: 1,
    limit: 6,
    totalItemsCount: 0
};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return {
                ...state,
                events: action.events
            };
        case 'SET_PARTICIPANTS':
            if (action.participants) {
                return {
                    ...state,
                    participants: action.participants
                }
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page
            }
        case 'SET_LIMIT':
            return {
                ...state,
                limit: action.limit
            }
        case 'SET_TOTALITEMSCOUNT':
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }

        default:
            return state;
    }
};

export const actions = {
    setEvents: (events) => ({ type: 'SET_EVENTS', events }),
    setParticipants: (participants) => ({ type: 'SET_PARTICIPANTS', participants }),
    setPage: (page) => ({ type: 'SET_PAGE', page }),
    setLimit: (limit) => ({ type: 'SET_LIMIT', limit }),
    setTotalItemsCount: (totalItemsCount) => ({ type: 'SET_TOTALITEMSCOUNT', totalItemsCount }),
}

export const requestEvents = (page, limit) => {
    return async(dispatch) => {
        dispatch(actions.setPage(page))
        const res = await eventsAPI.getEvents(page, limit)
        dispatch(actions.setEvents(res.data.data))
        dispatch(actions.setTotalItemsCount(res.data.totalCount))
    }
}

export const requestParticipants = (eventId, page, limit) => {
    return async(dispatch) => {
        dispatch(actions.setPage(page))
        const res = await eventsAPI.getParticipants(eventId, page, limit)
        dispatch(actions.setParticipants(res.data.data))
        dispatch(actions.setTotalItemsCount(res.data.totalCount))
    }
}

export default eventsReducer;