import { Request, Response } from "express";
import theaterService from "../services/theaterService.js";

async function findSession(req: Request, res: Response) {
  const { date } = req.body;
  const sessionId = await theaterService.findSession(date);
  res.send({ sessionId });
}

async function findSessions(req: Request, res: Response) {
  const { sessionId } = req.body;
  const catalogueId = await theaterService.findSessions(sessionId);
  res.send({ catalogueId });
}

async function findTheater(req: Request, res: Response) {
  const { formData } = req.body;
  const catalogue = await theaterService.findSession(formData);
  res.send({ catalogue });
}

export default {
  findSession,
  findSessions,
  findTheater,
};
