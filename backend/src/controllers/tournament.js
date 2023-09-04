import * as tournamentService from "../services/tournament.js";

export const create = async (req, res) => {
    try {
        const {name, img, start, registration_date, game_days, place} = req.body;
        const newTournament = await tournamentService.create(name, img, start, registration_date, game_days, place);
        res.status(200).send(newTournament);
    } catch (error) {
        return res.status(400).json({ message: error });
    }

};