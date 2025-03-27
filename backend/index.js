const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notes");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
