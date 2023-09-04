import { Router } from "express";
import * as tournamentController from "../controllers/tournament.js";

export const router = Router();

router.post('/', tournamentController.create);

export default router