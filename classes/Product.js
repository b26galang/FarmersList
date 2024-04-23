class Product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.rewardPoints = rewardPoints;
        this.quantity = quantity;
    }

    inStock = true;

    display() {
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
    }


}

module.exports = Product;