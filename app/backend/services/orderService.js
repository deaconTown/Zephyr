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
            const response = await this.orderRepository.createOrder(orderModel)
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
    fetchOrders = async () =>{
        console.log(`OrderService: Enter fetchOrders method`)
        let result = null;
        try {
            console.log("Attempting to fetch orders")
            const response = await this.orderRepository.fetchOrders()
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit fetchOrders method ${result}`)
        return result;
    }
    fetchOrdersByCustomerId = async (customerId) =>{
        console.log(`OrderService: Enter fetchOrdersByCustomerId method with params: ${customerId}`)
        let result = null;
        try {
            console.log("Attempting to fetch orders")
            const response = await this.orderRepository.fetchOrdersByCustomerId(customerId)
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit fetchOrdersByCustomerId method ${result}}`)
        return result;
    }
    fetchOrdersByMerchantId = async (customerId) =>{
        console.log(`OrderService: Enter fetchOrdersByMerchantId method with params: ${customerId}`)
        let result = null;
        try {
            console.log("Attempting to fetch orders")
            const response = await this.orderRepository.fetchOrdersByCustomerId(customerId)
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit fetchOrdersByMerchantId method ${{result}}`)
        return result;
    }
    deleteOrderById = async (orderId) => {
        console.log(`OrderService: Enter fetchOrdersByMerchantId method with params: ${orderId}`)
        let result = null;
        try {
            console.log(`Attempting to remove order for id: ${orderId}`)
            const response = await this.orderRepository.deleteOrderById(orderId)
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderService: Exit fetchOrdersByMerchantId method ${{result}}`)
        return result;
    }
}


module.exports = OrderService;