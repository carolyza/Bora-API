import { Router } from "express";
import pgController from "../controllers/pgController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const pgRouter = Router();

pgRouter.get("/pg/selected", pgController.findPg);

export default pgRouter;
