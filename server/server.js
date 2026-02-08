import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pagesRoutes from "./routes/pages.js";

const app = express();

/* ===== Fix __dirname in ES Modules ===== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===== Middleware ===== */
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://palmsandpebbles.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "DELETE", "POST", "PUT"]
  })
);

/* ===== API Routes FIRST ===== */
app.use("/api", pagesRoutes);

/* ===== Serve React build ===== */
app.use(express.static(path.join(__dirname, "../client/dist")));

/* ===== SPA fallback (VERY IMPORTANT) ===== */
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
