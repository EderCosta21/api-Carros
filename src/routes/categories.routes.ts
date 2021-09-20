import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCateogryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

debugger
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCateogryService(categoriesRepository);

    createCategoryService.execute({ name, description });
    return response.status(201).send();
    // return response.status(201).json({ category });

});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});

export { categoriesRoutes }