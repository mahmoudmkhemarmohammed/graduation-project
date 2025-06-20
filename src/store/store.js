import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import bestSalingProducts from "./products/bestSalingProductsSlice";
import onSaleProducts from "./products/onSaleProductsSlice";
import singleProduct from "./products/singleProductSlice";
import cart from "./cart/cartSlice";
import categories from "./categories/categoriesSlice";
import brands from "./brands/brandsSlice";
import productsByPrefix from "./products/productsByPrefix";
import auth from "./auth/authSlice";
import wishlist from "./wishlist/wishlistSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PURGE,
  PAUSE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["itemsId"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken", "user"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsIds"],
};

const rootReducer = combineReducers({
  products,
  bestSalingProducts,
  onSaleProducts,
  singleProduct,
  categories,
  brands,
  productsByPrefix,
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
  auth: persistReducer(authPersistConfig, auth),
  cart: persistReducer(cartPersistConfig, cart),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});
export default store;
export const persistor = persistStore(store);
