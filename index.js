require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./routes/category");
const animalRoutes = require("./routes/animal");

const app = express();
// cors section
app.use(
  cors({
    // https://quad.hdonline.pt/
    origin: "https://nextjs-filter-app.vercel.app",
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/categories", categoryRoutes);
app.use("/api/animals", animalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
