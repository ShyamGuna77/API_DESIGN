

import express from 'express'
const router = express.Router()
import { body, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { updateUpdate } from './handlers/update';

router.get('/product' ,(req,res) => {
    res.json({message:"Hello Nigga"})
})

router.get("/product/:id", () => {});
router.post("/product/:id", body("name").isString(), handleInputErrors,(req,res)=>{

});
router.post("/product",body('name').isString(),handleInputErrors, );
router.delete("/product/:id", () => {});

//Update Routes

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.post("/update", () => {});
router.delete("/update/:id", () => {});

//updatePoint

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router