import { Request, Response } from "express";
import sessionService from "../services/sessionService.js";

async function createSession(req: Request, res: Response) {
  const createData = req.body;

  const id = await sessionService.createSession(createData);
  res.status(201).send({ id });
}

async function findSession(req: Request, res: Response) {
  const { date } = req.body;
  const sessionId = await sessionService.findSession(date);
  res.send({ sessionId });
}

export default {
  createSession,
  findSession,
};
