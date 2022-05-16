import { Router } from "express";
import tagController from "../controllers/tagController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const tagRouter = Router();

tagRouter.get("/tags", tagController.findMany);

export default tagRouter;
