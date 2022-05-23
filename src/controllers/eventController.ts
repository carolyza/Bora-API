import { Request, Response } from "express";
import eventService from "../services/eventService.js";

async function findEvent(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await eventService.findEvent(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findEvent,
};
