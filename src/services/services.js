import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL,
  // withCredentials: true
});

export const getServices = async () =>{
    try {
        const response = instance.get('/get-service');
        return response
    } catch (err) {
        return err
    }
}

export const addServices = async (payload) =>{
    try {
        const response = instance.post('/add-service', payload);
        return response
    } catch (err) {
        return err
    }
}


export const updateService = async (id,payload) =>{
    try {
        const response = instance.put(`/update-service/${id}`, payload);
        return response
    } catch (err) {
        return err
    }
}

export const deleteService = async (id) =>{
    try {
        const response = instance.delete(`/delete-service/${id}`);
        return response
    } catch (err) {
        return err
    }
}