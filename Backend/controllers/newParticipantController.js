import newParticipant from "../models/NewParticipant.js";

export async function createNewParticipant(req, res) {
  const { firstName, lastName, email, age } = req.body;

  try {
    const participant = new newParticipant({
      firstName,
      lastName,
      email,
      age,
    });

    await participant.save();

    res.json(participant);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function getParticipants(req, res) {
  try {
    const participants = await newParticipant.find({});

    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function deleteParticipant(req, res) {
  const { id } = req.params;

  try {
    const deleteParticipant = await newParticipant.findByIdAndDelete(id);

    if (!deleteParticipant) {
      res.status(404).json({ error: "This participant doesn't exist" });
      return;
    }

    res.json(deleteParticipant);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function updateParticipant(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email, age } = req.body;

  try {
    const participant = await newParticipant.findById(id);

    if (!participant) {
      res.status(404).json({ error: "This participant doesn't exist" });
      return;
    }

    (participant.firstName = firstName),
      (participant.lastName = lastName),
      (participant.email = email),
      (participant.age = age);

    await participant.save();

    res.json(participant);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
