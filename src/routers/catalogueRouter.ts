import { Router } from "express";
import catalogueController from "../controllers/catalogueController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
//import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
//import { testSchema } from "../schemas/testSchema.js";

const catalogueRouter = Router();

catalogueRouter.post("/adicionar", catalogueController.createArt);

export default catalogueRouter;
