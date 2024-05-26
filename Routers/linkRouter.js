import express from "express";
import linksController from "../controllers/linkController.js";

const LinksRouter = express.Router();

LinksRouter.get("/", linksController.getLinks);
LinksRouter.get("/:id", linksController.getByIDLinks);
LinksRouter.post("/", linksController.postLinks);
LinksRouter.put("/:id", linksController.putLinks);
LinksRouter.delete("/:id", linksController.deleteLinks);

export default LinksRouter;
