import { Router } from "express";
import eventController from "../controllers/eventController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const eventRouter = Router();

eventRouter.post("/eventos", eventController.findEvent);

export default eventRouter;
