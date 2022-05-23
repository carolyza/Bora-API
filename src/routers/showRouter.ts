import { Router } from "express";
import showController from "../controllers/showController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const showRouter = Router();

showRouter.post("/shows", showController.findShow);

export default showRouter;
