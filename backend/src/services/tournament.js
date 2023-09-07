import { Tournament } from "../models/Tournament.js";

export const create = async (name, img, start, registration_date, game_days, place) => {
    
    const newTournament = await Tournament.create({
        name,
        img,
        start,
        registration_date,
        game_days,
        place
    });
    
    return newTournament;
}
