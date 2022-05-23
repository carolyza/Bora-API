import { Router } from "express";
import subcategoryController from "../controllers/subcategoryController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const subcategoryRouter = Router();

subcategoryRouter.get("/subcategories", subcategoryController.findMany);

export default subcategoryRouter;
