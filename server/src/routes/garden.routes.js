import Router from "express";
import { createPlant, deletePlant, getOnePlant, getPlants } from "../controllers/garden.controller.js";

const gardenRoutes = Router();

gardenRoutes.post("/", createPlant);
gardenRoutes.get("/", getPlants);
gardenRoutes.get("/:id", getOnePlant);
gardenRoutes.delete("/:id", deletePlant);