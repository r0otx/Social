import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0c4347f8-5d25-4f91-a508-15a0777b08c3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    getFollow(u) {
        return instance.post(`follow/${u.id}`).then(response => response.data);
    },
    delFollow(u) {
        return instance.delete(`follow/${u.id}`).then(response => response.data);
    }
};