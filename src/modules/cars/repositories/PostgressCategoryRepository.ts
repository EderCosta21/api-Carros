import { Category } from "../model/Category";
import { IcategoriesRepository, IcreateCategoryDTO } from "./IcategoryRepository";

// DTO = data transfer object 


class PostgressCategoryRepository implements IcategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        throw new Error("Method not implemented.");
    }
    list(): Category[] {

        throw new Error("Method not implemented.");
    }
    create({ name, description }: IcreateCategoryDTO): void {
        console.log(name, description)
        throw new Error("Method not implemented.");
    }

}
export { PostgressCategoryRepository };