import express from "express";
import {
  registerNewParticipant,
  loginNewParticipant,
} from "../controllers/participantController.js";
import { validateParticipant } from "../middlewares/validateParticipant.js";

const router = express.Router();

router.post("/register", validateParticipant, registerNewParticipant);

router.post("/login", validateParticipant, loginNewParticipant);

export default router;
