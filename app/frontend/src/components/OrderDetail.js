function OrderDetail({name,merchant,description,price,quantity,img}) {
    return(
        <div className="[ order-detail ][ border-b ][ w-full h-[120px] ][ flex justify-between ][ mt-[10px]">
            <div className="[ flex flex-row ]">
                <div className="[ product-img-container ][ h-[100px] w-[100px] phone:w-[70px] phone:h-[70px] ][ rounded-[15px] ][ bg-[#D3D3D3] ]">
                    <img  src={img} alt={name} />
                </div>
                <div className="[ product-info ][ ml-3 phone:ml-4 phone:mx-auto ]">
                    <div className="[ order-num ][ font-[Pacifico] phone:text-[14px] text-[18px] ]">
                        {name}
                    </div>

                    <div className="[ order-num ][ font-[Roboto]  text-[16px] phone:text-[14px] text-[#A8A8A8] ]">
                        {merchant}
                    </div>
                    <div className="[ order-num ][ font-[Roboto]  text-[14px] phone:text-[12px] phone:max-w-[100px] phone:truncate text-[#A8A8A8] ]">
                        {description}
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] phone:text-[12px] text-[#A8A8A8] ]">
                        Quantity: {quantity}
                    </div>
                </div>  
            </div>
            <div className="[ product-total ][ font-[Pacifico] text-[24px] phone:text-[16px] ]">
                ${price}.00
            </div>
        </div>
    )
}

export default OrderDetail;