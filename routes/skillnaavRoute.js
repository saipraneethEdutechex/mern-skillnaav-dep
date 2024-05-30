const router = require("express").Router();
const {
  Discover,
  Vision,
  Feature,
  Team,
  Pricing,
  FAQ,
  Contact,
  Footer,
} = require("../models/skillnaavModel");

// get all SkillNaav data
router.get("/get-skillnaav-data", async (req, res) => {
  try {
    const discovers = await Discover.find();
    const vision = await Vision.find();
    const features = await Feature.find();
    const team = await Team.find();
    const pricing = await Pricing.find();
    const faqs = await FAQ.find();
    const contact = await Contact.find();
    const footer = await Footer.find();

    res.status(200).send({
      discover: discovers,
      vision: vision,
      features: features,
      team: team,
      pricing: pricing,
      faq: faqs,
      contact: contact,
      footer: footer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update discover
router.post("/update-discover", async (req, res) => {
  try {
    const discover = await Discover.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: discover,
      success: true,
      message: "Discover updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update Vision
router.post("/update-vision", async (req, res) => {
  try {
    const vision = await Vision.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: vision,
      success: true,
      message: "Vision updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update Features
router.post("/update-features", async (req, res) => {
  try {
    const features = await Feature.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: features,
      success: true,
      message: "Vision updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update Team
router.post("/update-team", async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: team,
      success: true,
      message: "Team updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
