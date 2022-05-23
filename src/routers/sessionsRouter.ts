import { Router } from "express";
import sessionsController from "../controllers/sessionsController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
//import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
//import { testSchema } from "../schemas/testSchema.js";

const sessionsRouter = Router();

sessionsRouter.post("/sessoes", sessionsController.createSessions);
sessionsRouter.get(
  "/sessoes/sessao/:sessionId",
  sessionsController.findSessions
);
export default sessionsRouter;
