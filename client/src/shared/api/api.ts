import {routes} from "@/shared/api/routes";
import {ITrack} from "@/entities/track";

export const getTracks = async (): Promise<ITrack[]> => {
    const response = await fetch(routes.getTracks, {
        cache: 'no-store'
    });
    return response.json();
};

export const getOneTrack = async (id: string): Promise<ITrack> => {
    const response = await fetch(routes.getOneTrack + `/${id}`, {
        cache: 'no-store'
    });
    return response.json();
};
