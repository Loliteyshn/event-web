import { instance } from "./api"

export const eventsAPI = {
    async getEvents(page, limit) {
        return await instance.get(`events?page=${page}&limit=${limit}`)
    },
    async getParticipants(eventId, page = 1, limit = 5) {
        const id = Number(eventId);
        return await instance.get(`events/participants/${id}?page=${page}&limit=${limit}`)
    }
}