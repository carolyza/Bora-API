import { Router } from "express";
import classificationController from "../controllers/classificationController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const classificationRouter = Router();

classificationRouter.get("/classification", classificationController.findMany);

export default classificationRouter;
