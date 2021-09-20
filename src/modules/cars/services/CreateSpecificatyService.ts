import { ISpecificatyRepostory } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string,
    description: string
}
class CreateSpecificaty {


    constructor(private specRepo: ISpecificatyRepostory) { }

    
    execute({ name, description }: IRequest): void {
        const specifyAlreadyExists = this.specRepo.findByName(name);

        if(specifyAlreadyExists)
        {
            throw new Error("specification already exists!")
        }
        this.specRepo.create({
            name,
            description
        })
    }
}
export { CreateSpecificaty }