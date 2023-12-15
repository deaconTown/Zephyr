const Order = require("../models/order");
const OrderRepository = require("../repository/orderRepository");

class OrderService{
    constructor(){
        this.orderRepository = new OrderRepository();
    }
    createOrder = async (order) =>{
        console.log(`OrderService: Enter createOrder method with params: ${JSON.stringify(order, null , 4)}`)
        let result = null;
        try {
            if(order == null)
                throw new Error(`There is an issue processing order model: ${order}`)
            console.log("Attempting to build order obejct")
            let orderModel = new Order(null, order.customerId, order.merchantId, order.statusId, order.totalCost, [])
            console.log(`Attempting to create order...`)
            const response = this.orderRepository.createOrder(orderModel)
            if(response == null)
                throw new Error(`There is an issue creating order: ${response}`)
            console.log(`Order created successfully with id: ${order.id}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit createOrder method ${result}`)
        return result;
    }
}


module.exports = OrderService;