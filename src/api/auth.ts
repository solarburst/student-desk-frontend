import api from "./axios"
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, RegisterResponseDTO } from "./dto/auth.dto"

export const login = async (values: LoginFormDTO): Promise<LoginResponseDTO> => {
    const res = await api.post("/auth/log-in", values);
    return res.data;
};

export const register = async (values: RegisterFormDTO): Promise<RegisterResponseDTO> => {
    const res = await api.post("/auth/register", values);
    return res.data;
};

export const logout = async (): Promise<void> => {
    const res = await api.post("/auth/log-out");
    return res.data;
}

export const getMe = async (): Promise<LoginResponseDTO> => {
    const res = await api.get("/auth");
    return res.data;
}