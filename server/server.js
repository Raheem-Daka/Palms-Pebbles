import express from "express";
import cors from "cors";
import pagesRoutes from "./routes/pages.js";

const app = express();

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

app.use("/api", pagesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
