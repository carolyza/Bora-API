import { Router } from "express";
import danceController from "../controllers/danceController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const danceRouter = Router();

danceRouter.post("/danca", danceController.findDance);

export default danceRouter;
