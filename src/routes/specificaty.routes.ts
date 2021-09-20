import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification";
import { CreateSpecificaty } from "../modules/cars/services/CreateSpecificatyService";

const specificationsRoutes = Router();
const specifications = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecService = new CreateSpecificaty(specifications);

    createSpecService.execute({ name, description });

    return response.status(201).send();

})

export { specificationsRoutes };