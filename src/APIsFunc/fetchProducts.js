import data from "../mockData.json";

export const fetchProducts = () => {
  // Simulate an asynchronous API call with a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.products);
    }, 500); // Simulate a 500ms delay
  });
};
