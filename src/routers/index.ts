import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import stateRouter from "./stateRouter.js";
import tagRouter from "./tagRouter.js";
import classificationRouter from "./classificationRouter.js";
import cityRouter from "./cityRouter.js";
import catalogueRouter from "./catalogueRouter.js";

const router = Router();
router.use(categoryRouter);
router.use(stateRouter);
router.use(tagRouter);
router.use(classificationRouter);
router.use(cityRouter);
router.use(catalogueRouter);

export default router;
