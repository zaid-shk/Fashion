import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import productsReducer from "./slices/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      wishlist: wishlistReducer,
      products: productsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
