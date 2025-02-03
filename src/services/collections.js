import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL,
  // withCredentials: true
});

export const getCollections = async () =>{
    try {
        const response = instance.get('/get-collection');
        return response
    } catch (err) {
        return err
    }
}

export const addCollections = async (payload) =>{
    try {
        const response = instance.post('/add-collection', payload);
        return response
    } catch (err) {
        return err
    }
}