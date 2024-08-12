import express from "express";
import {
  registerNewParticipant,
  loginNewParticipant,
} from "../controllers/participantController.js";

const router = express.Router();

router.post("/register", registerNewParticipant);

router.post("/login", loginNewParticipant);

export default router;
