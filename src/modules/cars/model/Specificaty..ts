import { v4 as uuid } from 'uuid';
 class Specificaty {

    id!: string;
    name!: string;
    description!: string;
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

 }

  export {Specificaty};