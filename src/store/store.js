import { configureStore } from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import bestSalingProducts from "./products/bestSalingProductsSlice";
import onSaleProducts from "./products/onSaleProductsSlice"
import singleProduct from "./products/singleProductSlice"
const store = configureStore({
    reducer: {
        products,
        bestSalingProducts,
        onSaleProducts,
        singleProduct
    }
})
export default store