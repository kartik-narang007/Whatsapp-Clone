import { Router } from "express";
import { addAudioMessasge, addImageMessasge, addMessage, getInitialContactsWithMessages, getMessages } from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const upload = multer({dest:"uploads/recordings/"})
const uploadImage = multer({dest:"uploads/images/"});

router.post("/addMessage", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessasge);
router.post("/add-audio-message", upload.single("audio"), addAudioMessasge);
router.get("/get-initial-contacts/:from", getInitialContactsWithMessages)


export default router;
