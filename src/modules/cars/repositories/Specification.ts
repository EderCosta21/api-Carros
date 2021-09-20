import { Specificaty } from "../model/Specificaty.";
import { IcreateSpecificatyyDTO, ISpecificatyRepostory } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificatyRepostory {
    private spec: Specificaty[];

    constructor() {
        this.spec = [];
    }

    create({ description, name }: IcreateSpecificatyyDTO): void {
        const specifications = new Specificaty();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date()
        })
        this.spec.push(specifications);
        // throw new Error("method not implemented");
    }; 

    findByName(name: string):  Specificaty{
        const especif = this.spec.find(res => res.name === name);
        return especif ;
    }

}

export { SpecificationRepository };