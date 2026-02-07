import express from "express";
const router = express.Router();

router.get("/rooms", (req, res) =>
  res.json({ message: "Rooms page" })
);

router.get("/gallery", (req, res) =>
  res.json({ message: "Gallery page" })
);

router.get("/about", (req, res) =>
  res.json({ message: "About page" })
);

router.get("/contact", (req, res) =>
  res.json({ message: "Contact page" })
);

router.get("/rooms/:id", (req, res) =>
  res.json({ message: "Room Details", id: req.params.id })
);

export default router;
