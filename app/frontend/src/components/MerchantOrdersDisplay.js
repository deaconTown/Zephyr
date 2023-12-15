import MerchantOrderDetailsList from "./MerchantOrderDetailsList"
import MerchantOrders from "./MerchantOrders"

function MerchantOrdersDisplay() {
    return(
        <div className="[ flex flex-row ]">
            <MerchantOrders />
            <MerchantOrderDetailsList />
        </div>
    )
}

export default MerchantOrdersDisplay