import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    updateProductsArray: (state, action) => {
      const productss = action.payload;
      // const productToUpdate = state.products.find(product => product.id === productId);
      state.products = [...productss];
    },
    setApproved: (state, action) => {
      const { productId } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.status = "Approved";
        productToUpdate.cssStatus = "Approved";
      }
    },
    setMissing: (state, action) => {
      const { productId, missingStatus } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.status = missingStatus;
        productToUpdate.cssStatus = missingStatus;
      }
    },
    updatePrice: (state, action) => {
      const { productId, newPrice } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.price = newPrice;
        productToUpdate.status = "Price Updated";
        productToUpdate.cssStatus = "Approved";
      }
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
        productToUpdate.status = "Quantity Updated";
        productToUpdate.cssStatus = "Approved";
      }
    },

    updateTotal: (state, action) => {
      const { productId, newTotal } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.total = newTotal;
        productToUpdate.status = "Quantity and Price Updated";
        productToUpdate.cssStatus = "Approved";
      }
    },
  },
});

export const {
  updateProductsArray,
  setApproved,
  setMissing,
  updatePrice,
  updateQuantity,
  updateTotal,
} = productsSlice.actions;
export default productsSlice.reducer;
