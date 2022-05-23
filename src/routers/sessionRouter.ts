import { Router } from "express";
import sessionController from "../controllers/sessionController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
//import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
//import { testSchema } from "../schemas/testSchema.js";

const sessionRouter = Router();

sessionRouter.post("/sessao", sessionController.createSession);
sessionRouter.get("/sessao", sessionController.findSession);
export default sessionRouter;
