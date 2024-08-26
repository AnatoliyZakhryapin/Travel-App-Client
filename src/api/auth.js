import axios from 'axios';
import { store } from '../store/store';

export async function login(credentials) {
    const response = await axios.post(`${store.baseUrl}/api/Auth/login`, credentials);
    return response;
}

export async function register(userData) {
    const response = await axios.post(`${store.baseUrl}/api/Auth/register`, userData);
    return response;
}

export function saveToken(token) {
    localStorage.setItem('jwt_token', token);
}

export function getToken() {
    return localStorage.getItem('jwt_token');
}

export function removeToken() {
    localStorage.removeItem('jwt_token');
}