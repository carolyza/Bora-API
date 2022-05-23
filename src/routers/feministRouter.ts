import { Router } from "express";
import feministController from "../controllers/feministController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const feministRouter = Router();

feministRouter.post("/feminista", feministController.findFeminist);

export default feministRouter;
