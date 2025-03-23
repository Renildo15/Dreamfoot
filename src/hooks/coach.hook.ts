import { uri } from "@/api/uri";
import { Coach, CreateCoach } from "@/types";
import axios from "axios";

export async function createCoach(data:CreateCoach) {
    const url = `${uri}api/coach`
    interface IResponse {
        coach: Coach
    }

    try {
        const res = await axios.post<IResponse>(url, data)
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.debug('Axios error message:', error.message);
        if (error.response) {
            console.debug('Response data:', error.response.data);
            console.debug('Response status:', error.response.status);
            console.debug('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request data:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        } else {
        console.error('Unexpected error:', error);
        }
        throw error;
    }
}