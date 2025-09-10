import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// If you render views:
import ejs from "ejs";
app.set("view engine", "ejs");           // or pug/handlebars as needed
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.redirect("/home")); // or res.render("home")

export default app; // <- no app.listen() here
