import express from "express";
import newParticipantRouter from "./newParticipantRouter.js";
import participantRouter from "./participantRouter.js";

const router = express.Router();

router.use(newParticipantRouter);
router.use(participantRouter);

export default router;
