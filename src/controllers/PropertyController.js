const propertyModel = require("../models/PropertyModel");

const addProperty = async (req, res) => {
  try {
    const savedProperty = await propertyModel.create(req.body);
    res.status(201).json({
      message: "Property added successfully",
      data: savedProperty,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const getProperties = async (req, res) => {
  try {
    const properties = await propertyModel.find().populate("cityId stateId pincodeId");
    res.status(200).json({
      message: "All Properties Fetched Successfully.",
      data: properties,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = { addProperty, getProperties };