
interface IcreateSpecificatyyDTO {
    name: string,
    description: string
}


interface ISpecificatyRepostory {
    findByName(name: string): IcreateSpecificatyyDTO;
    // list(): Category[];
    create({ name, description }: IcreateSpecificatyyDTO): void;

}
export { ISpecificatyRepostory, IcreateSpecificatyyDTO };