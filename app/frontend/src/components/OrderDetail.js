function OrderDetail({name,merchant,description,price,quantity,img}) {
    return(
        <div className="[ order-detail ][ border-b ][ w-full h-[120px] ][ flex justify-between ][ mt-[10px]">
            <div className="[ flex flex-row ]">
                <div className="[ product-img-container ][ h-[100px] w-[100px] ][ rounded-[15px] ][ bg-[#D3D3D3] ]">
                    <img  src={img} />
                </div>
                <div className="[ product-info ][ ml-3 ]">
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        {name}
                    </div>
                    <div className="[ order-num ][ font-[Roboto]  text-[16px] text-[#A8A8A8] ]">
                        {merchant}
                    </div>
                    <div className="[ order-num ][ font-[Roboto]  text-[14px] text-[#A8A8A8] ]">
                        {description}
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        Quantity: {quantity}
                    </div>
                </div>  
            </div>
            <div className="[ product-total ][ font-[Pacifico] text-[24px] ]">
                $2,000.00
            </div>
        </div>
    )
}

export default OrderDetail