import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { IcategoriesRepository } from "../repositories/IcategoryRepository";

interface iRequest {
    name: string,
    description: string
}

class CreateCateogryService {

    constructor(private categoriesRepository: IcategoriesRepository) {

    }
    execute({ name, description }: iRequest) {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists !")
            // return response.status(400).json({ error: "Category Already exists!" });
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCateogryService };