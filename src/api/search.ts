import api from "./axios"
import { LoginResponseDTO } from "./dto/auth.dto";

export const getAll = async (): Promise<Array<LoginResponseDTO>> => {
    const res = await api.get("/user");
    return res.data;
}

export const getById = async (id: string): Promise<LoginResponseDTO> => {
    const res = await api.get(`/user/${id}`);
    return res.data;
}

export const getByVacancy = async (vacancy: string): Promise<Array<LoginResponseDTO>> => {
    const res = await api.get(`/user/vacancy/${vacancy}`);
    return res.data;
}