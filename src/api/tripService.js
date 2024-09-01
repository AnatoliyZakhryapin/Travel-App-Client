import axios from "axios";
import {store} from '../store/store';
import { getToken } from '../api/auth';


export async function createTrip(tripData) {
    try {
        const response = await axios.post(`${store.baseUrl}/api/Trip`, tripData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to create trip", error);
        throw error;
    }
}