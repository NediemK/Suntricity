

const Panel = require("../models/Panel");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//get all Panels
const getPanels = async (request, response) => {
  try {
    const panels = await Panel.findAll();
    response.status(200).json({ panels: panels });
  } catch (error) {
    response.status(500).json({ msg: "error on getting panels" });
  }
};
//get one panel
const getOnePanel = async (req, res) => {
  const id = req.params.id;
  try {
    const foundPanel = await Panel.findByPk(id);
    if (foundPanel) {
      res.status(200).json({ panel: foundPanel });
    } else {
      res.status(404).json({ msg: "Panel not found" });
    }
  } catch (error) {
    console.error("Error on getting one Panel:", error);
    res
      .status(500)
      .json({ msg: "Error on getting one Panel", error: error.message });
  }
};
//post one Panel
const postPanel = async (request, response) => {
  try {
    const newPanel = request.body;
    const createdPanel = await Panel.create(newPanel);
    response
      .status(200)
      .json({ panel: createdPanel, msg: " Panel added successfully" });
  } catch (error) {
    console.error("Error on adding Panel:", error);
    response
      .status(500)
      .json({ msg: "Error on adding Panel", error: error.message });
  }
};
//update one Panel
const putPanel = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const [updateCount] = await Panel.update(updatedData, {
      where: { id: id },
    });
    if (updateCount > 0) {
      res.status(200).json({ msg: "Panel updated successfully" });
    } else {
      res.status(404).json({ msg: "Panel not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error on updating Panel", error: error.message });
  }
};
const deletePanel = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCount = await Panel.destroy({
      where: { id: id },
    });
    if (deleteCount > 0) {
      res.status(200).json({ msg: "Panel deleted successfully" });
    } else {
      res.status(404).json({ msg: "Panel not found" });
    }
  } catch (error) {
    console.error("Error on deleting Panel:", error);
    res
      .status(500)
      .json({ msg: "Error on deleting Panel", error: error.message });
  }
};

module.exports = { getPanels, getOnePanel, postPanel, putPanel, deletePanel };

  