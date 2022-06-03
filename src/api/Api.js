import axios from "axios";
import u from "../redax/store";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "93cd86f2-51fc-46cf-938d-e69b264c9ac0"
    }
});





export const userApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)

    },
        follow(userId) {
        return   instance.post(`follow/${userId}`)

        },
    unfollow(userId) {
      return  instance.delete(`follow/${userId}`)
    },
  getProfile(userId){
      console.warn('obsalete method. Please profileApi object')
      return  ProfileApi.getProfile(userId);

    }
}




export const ProfileApi = {
    getProfile(userId){

        return  instance.get("profile/" + userId);

    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
    return  instance.put(`profile/status`, {status: status});
}
}


export const authApi = {
    me() {
        return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return  instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return  instance.delete(`auth/login`);
    }
}
