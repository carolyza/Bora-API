import { Request, Response } from "express";
import sessionsService from "../services/sessionsService.js";

async function createSessions(req: Request, res: Response) {
  const { sessionsId, catalogueId } = req.body;
  console.log(req.body);
  await sessionsService.createSessions(sessionsId, catalogueId);
  res.sendStatus(201);
}

async function findSessions(req: Request, res: Response) {
  const { sessionId } = req.params;

  const catalogueId = await sessionsService.findSessions(parseInt(sessionId));
  res.send({ catalogueId });
}

export default {
  createSessions,
  findSessions,
};
