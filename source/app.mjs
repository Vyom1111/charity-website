// app.mjs
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// add a root route (or redirect)
app.get("/", (req, res) => res.redirect("/home"));
// or: res.sendFile(path.join(__dirname, "public", "index.html"));

export default app; // <-- no app.listen on Vercel
