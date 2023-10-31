import express from "express";
import categoryController from "../controllers/categoryController.js";

const routes = express.Router();

routes.get("/categories", categoryController.getCategories);
routes.post("/categories", categoryController.addCategory);
routes.get("/categories/:id", categoryController.getSingleCategory);
routes.put("/categories/:id", categoryController.updateCategory);
routes.delete("/categories/:id", categoryController.deleteCategory);

export default routes;