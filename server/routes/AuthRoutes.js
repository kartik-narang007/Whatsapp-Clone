import { Router } from "express";
import { checkUser, onBoardUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/checkUser", checkUser);
router.post("/onBoardUser", onBoardUser);
export default router;
