class Order{
    id
    customerId;
    merchantId;
    statusId;
    totalCost;
    productOrders;
    
    constructor(id, customerId, merchantId, statusId, totalCost, productOrders) {
        this.id = id;
        this.customerId = customerId;
        this.merchantId = merchantId;
        this.statusId = statusId;
        this.totalCost = totalCost;
        this.productOrders = productOrders;
    }
}

module.exports = Order;