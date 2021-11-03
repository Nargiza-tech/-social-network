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

    }
}


//
// export const followApi = {
//     getUsersFollow(){
//         return instance.post(`follow/${u.id}`).then(response => response.data)
//
//     }
// }
