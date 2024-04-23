const Customer = require('./Customer');

class Auth {
    constructor() { 
        this.customers = [];
    }

    register(name, email, shippingAddress) {
        this.customers.push(new Customer(name, email, shippingAddress));
    }

    login(email) {
        for(let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].email === email) {
                return this.customers[i];
            } else {
                return null;
            }
        }
    }

    // alternatively, with find:
    // login(email) {
    //     return this.customers.find(customer => customer.email === email) || null;
    // }


}

module.exports = Auth;
