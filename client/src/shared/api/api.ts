import {authRoutes} from "@/shared/api/routes";
import {ITrack} from "@/entities/track";

export const getTracks = async (): Promise<ITrack[]> => {
    const response = await fetch("http://backend:4000/tracks?take=1000", {
        cache: 'no-store'
    });
    return response.json();
};

export const getOneTrack = async (id: string): Promise<ITrack> => {
    const response = await fetch(authRoutes.getOneTrack + `/${id}`, {
        cache: 'no-store'
    });
    return response.json();
};
