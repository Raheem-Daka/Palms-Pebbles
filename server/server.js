import express from "express";
import cors from "cors";
import pagesRoutes from "./routes/pages.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "DELETE", "POST", "PUT"]
    })
);
app.use("/", pagesRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
