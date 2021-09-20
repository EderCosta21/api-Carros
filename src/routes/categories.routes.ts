import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

debugger
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categoriesRepository.create({ name, description });

    return response.status(201).send();
    // return response.status(201).json({ category });

});

export { categoriesRoutes }