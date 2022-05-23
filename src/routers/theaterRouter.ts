import { Router } from "express";
import theaterController from "../controllers/theaterController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const theaterRouter = Router();

theaterRouter.get("/teatro", theaterController.findTheater);

export default theaterRouter;
