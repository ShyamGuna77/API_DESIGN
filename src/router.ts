

import express from 'express'
const router = express.Router()
import { body, validationResult } from "express-validator";

router.get('/product' ,(req,res) => {
    res.json({message:"Hello Nigga"})
})
router.get("/product/:id", () => {});
router.post("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

//Update Routes

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

//updatePoint

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router