import { Router } from "express";
import { checkUser, getAllUsers, onBoardUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/checkUser", checkUser);
router.post("/onBoardUser", onBoardUser);
router.get("/get-contacts", getAllUsers);


export default router;
