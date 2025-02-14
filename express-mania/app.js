const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const indexRouter = require("./routes/indexRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const bang_dody = require("./routes/BangDodyRoutes");

// const { logger } = require("./middleware/logger");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gunakan userRoutes untuk semua rute yang dimulai dengan "/"
app.use("/", userRoutes);
app.use("/", ProductRoutes);
app.use("/", indexRouter);
app.use("/", bang_dody);

app.use("/api", ProductRoutes);
app.use("/api", userRoutes);

// server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
