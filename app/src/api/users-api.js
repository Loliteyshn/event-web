import { instance } from "./api"

export const usersAPI = {
    async addUser(formData, eventId) {
        return (await instance.post('users/addUser', { formData, eventId })).data
    }
}