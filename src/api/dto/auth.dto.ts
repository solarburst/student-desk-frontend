export interface LoginFormDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    id: number;
    vacancy: string;
    firstName: string;
    surName: string;
    email: string;
    phone?: string;
    description: string;
    projects?: string;
    studyPlace?: string;
    password: string;
    avatarId?: number;
}

export interface RegisterFormDTO {
    vacancy: string;
    firstName: string;
    surName: string;
    email: string;
    phone?: string;
    description: string;
    projects?: string;
    studyPlace?: string;
    password: string;
}

export interface RegisterResponseDTO {
    vacancy: string;
    firstName: string;
    surName: string;
    email: string;
    phone?: string;
    description: string;
    projects?: string;
    studyPlace?: string;
}

export const defaultUser = {
    id: 0,
    vacancy: "",
    firstName: "",
    surName: "",
    email: "",
    phone: "",
    description: "",
    projects: "",
    studyPlace: "",
    password: "",
    avatarId: 0,
}