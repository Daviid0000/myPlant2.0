import { Router } from "express";
import { createPublication, deletePublication, getOnePublication, getPublications, updatePublication } from "../controllers/publications.controller.js";

const publicationRouter = Router();

publicationRouter.post('/', createPublication)
publicationRouter.get('/', getPublications)
publicationRouter.get('/:id', getOnePublication)
publicationRouter.put('/:id', updatePublication)
publicationRouter.delete('/:id', deletePublication)

export default publicationRouter;