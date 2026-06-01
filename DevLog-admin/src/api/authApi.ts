import axiosInstance from "./axiosInstance"

export interface LoginRequest {
    email: string;
    password: string;
}

export const logIn = (data: LoginRequest) => {
    return axiosInstance.post("/auth/signin", data)
}