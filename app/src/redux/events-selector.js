export const getEvents = (state) => {
    return state.eventsPage.events;
}

export const getParticipants = (state) => {
    return state.eventsPage.participants;
}

export const getPage = (state) => {
    return state.eventsPage.page;
}

export const getLimit = (state) => {
    return state.eventsPage.limit;
}

export const getTotalItemsCount = (state) => {
    return state.eventsPage.totalItemsCount;
}