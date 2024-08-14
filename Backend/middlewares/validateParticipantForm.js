import joi from "joi";

const participantForm = joi.object({
  firstName: joi.string().min(2).max(50).required(),
  lastName: joi.string().min(2).max(50).required(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  age: joi.number().integer().min(0).max(100).required(),
});

export function validateParticipantForm(req, res, next) {
  const { error } = participantForm.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
}
