import express from "express";
import cors from "cors";
import { statusRouter, getPackageRouter } from "./src/index";

const app = express();
const PORT = process.env.PORT || 3000;

// Server settings
app.use(express.json());
app.use(cors());

// Routes

app.get("/Status", statusRouter);
app.get("/package/:pkgid", getPackageRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});