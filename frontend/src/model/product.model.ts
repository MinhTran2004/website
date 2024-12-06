export interface Product {
    _id: string,
    category: string,
    name: string,
    price: string,
    discount: string,
    image: string,
    sold: string,
    quantity: string,
    rate: string,
    describe: string,
    createAt: string,
    status: string,
}

export default class ProductModel {
    category: string;
    name: string;
    price: string;
    discount: string;
    image: string;
    sold: string;
    quantity: string;
    rate: string;
    describe: string;
    createAt: string;
    status: string;

    constructor(category: string, name: string, price: string, discount: string, image: string, sold: string, quantity: string, rate: string, describe: string, createAt: string, status: string) {
        this.category = category,
            this.name = name,
            this.price = price,
            this.discount = discount,
            this.image = image,
            this.sold = sold,
            this.quantity = quantity,
            this.rate = rate,
            this.describe = describe,
            this.createAt = createAt,
            this.status = status
    }

    static checkData = () => {
        
    }

}