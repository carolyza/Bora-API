import { Router } from "express";
import expoController from "../controllers/expoController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const expoRouter = Router();

expoRouter.post("/exposicao", expoController.findExpo);

export default expoRouter;
