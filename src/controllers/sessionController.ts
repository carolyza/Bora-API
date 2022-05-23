import { Request, Response } from "express";
import sessionService from "../services/sessionService.js";

async function createSession(req: Request, res: Response) {
  const createData = req.body;

  const id = await sessionService.createSession(createData);
  res.status(201).send({ id });
}

export default {
  createSession,
};
