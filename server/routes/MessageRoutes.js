import { Router } from "express";
import { addImageMessasge, addMessage, getMessages } from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const uploadImage = multer({dest:"uploads/images/"});

router.post("/addMessage", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessasge);

export default router;
