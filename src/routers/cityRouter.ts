import { Router } from "express";
import cityController from "../controllers/cityController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const cityRouter = Router();

cityRouter.get("/cities/:state", cityController.findByState);

export default cityRouter;
