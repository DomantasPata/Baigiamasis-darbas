import express from "express";
import {
  createNewParticipant,
  getParticipants,
  deleteParticipant,
  updateParticipant,
} from "../controllers/newParticipantController.js";
import { validateParticipantForm } from "../middlewares/validateParticipantForm.js";
import validateToken from "../middlewares/validateAuthorization.js";

const router = express.Router();

router.get("/participants", validateToken, getParticipants);

router.post("/participants", validateParticipantForm, createNewParticipant);

router.put("/participants/:id", updateParticipant);

router.delete("/participants/:id", deleteParticipant);

export default router;
