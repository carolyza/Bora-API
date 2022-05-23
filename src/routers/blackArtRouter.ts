import { Router } from "express";
import blackArtController from "../controllers/blackArtController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const blackArtRouter = Router();

blackArtRouter.post("/artepreta", blackArtController.findBlack);

export default blackArtRouter;
