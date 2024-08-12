import express from "express";

const router = express.Router();

router.get("/participants");

router.post("participants");

router.put("/participants/:id");

router.delete("/participants/:id");

export default router;
