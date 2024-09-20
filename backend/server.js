const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const path = require("path");

// Раздача статических файлов (если на продакшене)
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../social-network-frontend/build"))
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "../social-network-frontend",
        "build",
        "index.html"
      )
    );
  });
}
