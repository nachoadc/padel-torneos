import { Router } from "express";
import { getOrganizations, createOrganization } from "../controllers/organizations.controller.js";

const router = Router();

router.get('/organizations', getOrganizations);
router.post('/organizations', createOrganization);

export default router