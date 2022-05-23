import { Request, Response } from "express";
import sessionsService from "../services/sessionsService.js";

async function createSessions(req: Request, res: Response) {
  const { sessionsId, catalogueId } = req.body;
  await sessionsService.createSessions(sessionsId, catalogueId);
  res.sendStatus(201);
}

export default {
  createSessions,
};
