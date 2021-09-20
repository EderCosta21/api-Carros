import { Category } from "../model/Category";


// DTO = data transfer object 

interface IcreateCategoryDTO {
    name: string,
    description: string
}
class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: IcreateCategoryDTO) : void  {
        const category = new Category();

        // tudo que vem vai ser atribuido ao novo
        Object.assign(category,
            {
                name,
                description,
                created_at: new Date(),
            })


        this.categories.push(category)
    }
}

export { CategoriesRepository }