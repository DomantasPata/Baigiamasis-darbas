import Participant from "../models/Participant.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function registerNewParticipant(req, res) {
  const { username, password } = req.body;

  try {
    const existingUser = await Participant.find({
      username: username,
    });

    if (existingUser.length > 0) {
      res.status(400).json({ error: "Sorry, user already exist" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Participant({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function loginNewParticipant(req, res) {
  const { username, password } = req.body;

  try {
    const User = await Participant.findOne({ username });

    if (!User) {
      return res.status(400).json({ error: "Incorrect username or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, User.password);

    if (isPasswordCorrect) {
      const authKey = process.env.AUTH_KEY;

      const token = jwt.sign(
        { id: User._id, username: User.username },
        authKey,
        { expiresIn: "1h" }
      );

      res.json({ token });
    } else {
      res.status(400).json({ error: "Incorrect username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
