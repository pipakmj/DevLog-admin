import axios, { type InternalAxiosRequestConfig } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const ACCESS_TOKEN_KEY = "admin-accessToken";
const ROLE_KEY = "admin-role";
const LOGIN_PATH = "/login";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem(ACCESS_TOKEN_KEY)
            localStorage.removeItem(ROLE_KEY)

            if (window.location.pathname !== LOGIN_PATH) {
                window.location.replace(LOGIN_PATH)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
