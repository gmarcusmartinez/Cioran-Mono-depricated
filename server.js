const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const express = require("express");
const connectDB = require("./config/db");

const projects = require("./routes/projects");

dotenv.config({ path: "./config/config.env" });

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api/projects", projects);

connectDB();
const server = app.listen(
  5000,
  console.log(`Server running on port:5000`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(err.message);
  server.close(() => process.exit(1));
});
