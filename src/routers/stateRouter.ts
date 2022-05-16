import { Router } from "express";
import stateController from "../controllers/stateController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const stateRouter = Router();

stateRouter.get("/states", stateController.findMany);

export default stateRouter;
