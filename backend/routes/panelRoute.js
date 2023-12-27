const express = require("express");
const panelRoute = express.Router();
const {
getPanels,
postPanel,
putPanel,
deletePanel,
getOnePanel,
} = require("../controllers/panelController");
panelRoute.get("/panels", getPanels);
panelRoute.post("/panels", postPanel);
panelRoute.put("/panels/:id", putPanel);
panelRoute.delete("/panels/:id", deletePanel);
panelRoute.get("/panels/:id", getOnePanel);
module.exports = panelRoute;
