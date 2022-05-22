import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/aboutus", (req, res) => {
  res.render("about");
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

export default router;
