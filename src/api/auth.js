import axios from 'axios'

const BASE_URL = 'https://todomio-main-3kdpzw.laravel.cloud/api'

export const registerApi = (data) => axios.post(`${BASE_URL}/register`, data)

export const loginApi = (data) => axios.post(`${BASE_URL}/login`, data)
