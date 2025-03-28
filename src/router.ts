

import express from 'express'
const router = express.Router()
import { body, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createUpdate, deleteUpdate, updateUpdate } from './handlers/update';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';

router.get('/product' ,getProducts)

router.get("/product/:id", getOneProduct);
router.post("/product/:id", body("name").isString(), handleInputErrors);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

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
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/update/:id",deleteUpdate);

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