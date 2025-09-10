// source/api/index.mjs
import app from "../app.mjs";

export default function handler(req, res) {
  return app(req, res);
}

