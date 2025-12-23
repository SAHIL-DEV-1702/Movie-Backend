require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.route"));
app.use("/movies", require("./routes/movie.route"));

app.listen(process.env.PORT || 8000, () =>
    console.log("Server running on http://localhost:" + (process.env.PORT || 8000))
);
