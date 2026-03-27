const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const equitiesRoutes = require("./routes/equities");

app.use("/api/equities", equitiesRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
