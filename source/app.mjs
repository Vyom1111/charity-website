import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();

// middleware
app.use(bodyParser.json());

// static assets (absolute path is important on Render)
app.use(express.static(path.join(__dirname, "public")));

// if using EJS views in /views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (_req, res) => res.redirect("/home"));
app.get("/home", (_req, res) => res.render("home"));      // views/home.ejs
app.get("/about", (_req, res) => res.render("about"));    // views/about.ejs
app.get("/gallery", (_req, res) => res.render("gallery"));// views/gallery.ejs
app.get("/contact", (_req, res) => res.render("contact"));// views/contact.ejs

export default app;
