import { BASE_URL, GET_URL } from "../constants/baseURL";
import { http } from "../services/http";

export const getAPI = async ()=>{
    const res = await http.get(`${BASE_URL}${GET_URL}`)
    return res.data
}