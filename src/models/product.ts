export class Product {
    name: string;
    desc: string;
    categoryId: number;
    isChecked: boolean;

    constructor() {
        this.name = "";
        this.desc = "";
        this.categoryId = 1;
        this.isChecked = false;
    }
}
