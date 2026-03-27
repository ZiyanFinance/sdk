const router = require("express").Router();

// Dummy data (bisa diganti oracle/API real)
router.get("/", (req, res) => {
  res.json([
    { name: "Apple", symbol: "AAPL", price: 180 },
    { name: "Tesla", symbol: "TSLA", price: 250 },
  ]);
});

module.exports = router;
