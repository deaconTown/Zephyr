const prisma = require("../data/prismaClient");
class OrderRepository{
    async createOrder(order){
        console.log(`OrderRepository: Enter createOrder method with params: ${order}`)
        let result = null;
        try {
            if(order == null)
                throw new Error(`There is an issue processing order model: ${order}`)
            console.log(`Attempting to create order...`)
            const response = await prisma.order.create({
                data:{
                    customerId: order.customerId,
                    merchantId: order.merchantId,
                    statusId: order.statusId,
                    totalCost: order.totalCost
                }
            })
            if(response == null)
                throw new Error(`There is an issue creating order: ${response}`)
            console.log(`Order created successfully with id: ${order.id}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit createOrder method ${result}`)
        return result;
    }

    async updateOrder(order){
        console.log(`OrderRepository: Enter updateOrder method with params: ${order}`)
        let result = null;
        try {
            if(order == null)
                throw new Error(`OrderRepository: There is an issue processing order model: ${order}`)
            console.log(`OrderRepository: Attempting to update order...`)
            const response = await prisma.order.update({
                where:{
                    id: order.id
                },
                data:{
                    customerId: order.customerId,
                    merchantId: order.merchantId,
                    statusId: order.statusId,
                    totalCost: order.totalCost
                }
            })
            if(response == null)
                throw new Error(`OrderRepository: There is an issue updating order: ${response}`)
            console.log(`OrderRepository: Order updated successfully with id: ${order.id}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit updateOrder method: ${result}`)
        return result;
    }
    async fetchOrders(){
        console.log(`OrderRepository: Enter fetchOrders method`)
        let result = null;
        try {
            console.log(`Attempting to fetch orders...`)
            const response = await prisma.order.findMany();
            if(response == null)
                throw new Error(`There is an issue fetching orders: ${response}`)
            console.log(`Orders retrieved successfully`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit fetchOrders method: ${result}`)
        return result;
    }

    async fetchOrdersByCustomerId(customerId){
        console.log(`OrderRepository: Enter fetchOrdersByCustomerId method with params: ${customerId}`)
        let result = null;
        try {
            if(customerId == null)
                throw new Error(`There is an issue processing customerId : ${customerId}`)
            let parsedCustomerId = parseInt(customerId)
            console.log(`Attempting to fetch order...`)
            const response = await prisma.order.findMany({
                where: {
                  customerId: parsedCustomerId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully with customerId: ${parsedCustomerId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit fetchOrdersByCustomerId method: ${result}`)
        return result;
    }
    async fetchOrdersByMerchantId(merchantId){
        console.log(`OrderRepository: Enter fetchOrdersByMerchantId method with params: ${customerId}`)
        let result = null;
        try {
            if(merchantId == null)
                throw new Error(`There is an issue processing merchantId : ${merchantId}`)
            let parsedMerchantId = parseInt(merchantId)
            console.log(`Attempting to fetch order...`)
            const response = await prisma.order.findMany({
                where: {
                  merchantId: parsedMerchantId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue fetching order: ${response}`)
            console.log(`Order retrieved successfully with merchantId: ${merchantId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit fetchOrdersByMerchantId method: ${result}`)
        return result;
    }
    async deleteOrderById(orderId){
        console.log(`OrderRepository: Enter deleteOrderById method with params: ${orderId}`)
        let result = null;
        try {
            if(orderId == null)
                throw new Error(`There is an issue processing orderId : ${orderId}`)
            console.log(`Attempting to remove order...`)
            const response = await prisma.order.delete({
                where: {
                    orderId: orderId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue removing order: ${response}`)
            console.log(`Order retrieved successfully with orderId: ${orderId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit deleteOrderById method: ${result}`)
        return result;
    }

    
    async deleteOrderById(orderId){
        console.log(`OrderRepository: Enter deleteOrderById method with params: ${orderId}`)
        let result = null;
        try {
            if(orderId == null)
                throw new Error(`There is an issue processing orderId : ${orderId}`)
            console.log(`Attempting to remove order...`)
            const response = await prisma.order.delete({
                where: {
                    orderId: orderId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue removing order: ${response}`)
            console.log(`Order retrieved successfully with orderId: ${orderId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit deleteOrderById method: ${result}`)
        return result;
    }
    async deleteOrderByCustomerId(customerId){
        console.log(`OrderRepository: Enter deleteOrderByCustomerId method with params: ${customerId}`)
        let result = null;
        try {
            if(customerId == null)
                throw new Error(`There is an issue processing customerId : ${customerId}`)
            console.log(`Attempting to remove order...`)
            const response = await prisma.order.delete({
                where: {
                    customerId: customerId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue removing order: ${response}`)
            console.log(`Order retrieved successfully with customerId: ${customerId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit deleteOrderByCustomerId method: ${result}`)
        return result;
    }
    async deleteOrderByMerchantId(merchantId){
        console.log(`OrderRepository: Enter deleteOrderByMerchantId method with params: ${merchantId}`)
        let result = null;
        try {
            if(merchantId == null)
                throw new Error(`There is an issue processing merchantId : ${merchantId}`)
            console.log(`Attempting to remove order...`)
            const response = await prisma.order.delete({
                where: {
                    merchantId: merchantId,
                },
              })
            if(response == null)
                throw new Error(`There is an issue removing order: ${response}`)
            console.log(`Order retrieved successfully with merchantId: ${merchantId}`)
            result = response;
        } catch (error) {
            console.error(error);
        }
        console.log(`OrderRepository: Exit deleteOrderByMerchantId method: ${result}`)
        return result;
    }



}   

module.exports = OrderRepository;