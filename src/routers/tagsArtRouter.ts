import { Router } from "express";
import tagsArtController from "../controllers/tagsArtController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const tagsArtRouter = Router();

tagsArtRouter.get("/tagsart", tagsArtController.findTags);

export default tagsArtRouter;
