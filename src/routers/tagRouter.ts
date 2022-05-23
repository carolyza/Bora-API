import { Router } from "express";
import tagController from "../controllers/tagController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const tagRouter = Router();

tagRouter.get("/tags", tagController.findMany);
tagRouter.post("/tagsArt", tagController.postTag);
tagRouter.patch("/tagsArt/:id", tagController.patchTag);

export default tagRouter;
