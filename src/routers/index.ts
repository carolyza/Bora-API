import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import stateRouter from "./stateRouter.js";
import tagRouter from "./tagRouter.js";
import classificationRouter from "./classificationRouter.js";
import cityRouter from "./cityRouter.js";
import catalogueRouter from "./catalogueRouter.js";
import subcategoryRouter from "./subcategoryRouter.js";
import sessionsRouter from "./sessionsRouter.js";
import sessionRouter from "./sessionRouter.js";
import theaterRouter from "./theaterRouter.js";
import tagsArtRouter from "./tagsArtRouter.js";
import pgRouter from "./pgRouter.js";

const router = Router();
router.use(categoryRouter);
router.use(stateRouter);
router.use(tagRouter);
router.use(classificationRouter);
router.use(cityRouter);
router.use(catalogueRouter);
router.use(subcategoryRouter);
router.use(sessionsRouter);
router.use(sessionRouter);
router.use(theaterRouter);
router.use(tagsArtRouter);
router.use(pgRouter);

export default router;
