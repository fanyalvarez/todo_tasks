import axios from "axios";

const token = localStorage.getItem("token")
// console.log(token, "token api")

export const getTasksRequest = async () => axios.get("https://todonotes.onrender.com/read/note", {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const getTaskRequest = async (note_id) => axios.get(`https://todonotes.onrender.com/note/${note_id}`);
export const updateTaskRequest = async (note_id, task) => axios.put(`https://todonotes.onrender.com/note/update/${note_id}`, task);
export const deleteTaskRequest = async (id) => axios.delete(`https://todonotes.onrender.com/delete/note/${id}`);


export const createTaskRequest = async (task) => axios.post("https://todonotes.onrender.com/notes/", task, {
    headers: {
        "token": localStorage.getItem("token")
    }
});




