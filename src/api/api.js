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
    getFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    delFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};