class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
    }


    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
    }

    rewardPoints = 0;

    getRewardPoints() {
        for(let i = 0; i < this.orderHistory.length; i++) {
            this.rewardPoints++;
        }
    }
}

module.exports = Customer;