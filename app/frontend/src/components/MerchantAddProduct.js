import { Button } from 'flowbite-react';

function MerchantAddProduct() {
    return(
        <div className="[ add-product ][ border-2 rounded-[10px] ][ w-[400px] h-[750px] ][ px-[20px] py-[30px] ]">
           <div className="[ add-product-label ][ text-[28px] font-[Lobster] text-[#404040] ]">Add Product</div>
           <form className="max-w-sm mt-[20px]">
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input type="text" id="large-input" className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Cost</label>
                    <input type="text" id="large-input" className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea type="text" id="large-input" className="h-[150px] whitespace-normal w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5 h-[200px] w-full flex border rounded-[15px] cursor-pointer">
                    <p className="mx-auto my-auto text-sm font-medium">Add Image</p>
                </div>
                <Button color='' className="[ login-btn ][ w-[150px] h-[40px] ][ bg-primary text-white ]">Submit</Button>
             
            </form>
        </div>
    )
}

export default MerchantAddProduct