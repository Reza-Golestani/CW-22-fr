import { TodoType } from "../assets/models/TodoModel";
import { BASE_URL, GET_URL } from "../constants/baseURL";
import { http } from "../services/http";

export const postAPI = async (newTodo:TodoType)=>{
    const res = await http.post(`${BASE_URL}${GET_URL}`,newTodo)
    return res.data
}