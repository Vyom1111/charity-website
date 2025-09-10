// source/api/index.mjs
import app from "../app.mjs";

// Export a handler that Vercel can run.
// This forwards every request to your Express app.
export default function handler(req, res) {
  return app(req, res);
}

