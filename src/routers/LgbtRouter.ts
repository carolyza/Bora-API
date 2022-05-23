import { Router } from "express";
import LgbtController from "../controllers/LgbtController.js";
//import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const LgbtRouter = Router();

LgbtRouter.post("/lgbtqia", LgbtController.findLgbt);

export default LgbtRouter;
