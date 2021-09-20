import { Category } from "../model/Category";
import { IcategoriesRepository, IcreateCategoryDTO } from "./IcategoryRepository";



class CategoriesRepository implements IcategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: IcreateCategoryDTO): void {
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
    list(): Category[] {
        return this.categories;
    };
    findByName(name: string): Category {
        const category = this.categories.find(res => res.name === name)
        return category ;
    }
}

export { CategoriesRepository }