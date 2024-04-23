const Product = require('./Product');

class Cart {
    
    constructor(){
        this.products = [];
        this.total = 0;
    }


    addProduct(product, quantity) {
        if (quantity < this.products.quantity) {
            this.products.push(product);
            this.total += product.price * quantity;
            this.products.quantity -= quantity;
            
            if (this.products.quantity === 0) {
                product.inStock = false;
            }

            return product;
        } else {
            return `I'm sorry there are only ${this.products.quantity} of this product left`
        }
    }

    removeProduct(i) {
        this.total -= this.products[i].price;
        this.products.splice(i, 1);
    }

    // addProduct and removeProduct already updates total
    getTotal() {
        return this.total;
    }

    clear() {
        for(let i = 0; i < this.products.length; i++) {
            this.total -= this.products[i].price;
        }
        this.products = [];
    }

    // Removes the specified product assigning a new array without the product specified
    removeItemsByName(productName) {
        this.products = this.products.filter(product => product !== productName);
    }

}

module.exports = Cart;