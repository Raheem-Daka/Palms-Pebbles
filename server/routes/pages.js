import express from "express";
const router = express.Router();

router.get("/api/rooms", (req, res) => res.json({ message: "Rooms page" }));
router.get("/api/gallery", (req, res) => res.json({ message: "Gallery page" }));
router.get("/api/about", (req, res) => res.json({ message: "About page" }));
router.get("/api/contact", (req, res) => res.json({ message: "Contact page" }));

export default router;