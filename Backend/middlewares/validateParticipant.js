import joi from "joi";

const participantValidation = joi.object({
  username: joi.string().min(3).max(12).required(),
  password: joi.string().min(8).max(32).required(),
});

export function validateParticipant(req, res, next) {
  const { error } = participantValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}
