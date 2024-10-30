import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//El método injectEndpoints permite agregar endpoints a un apiSlice existente (lo hemos creado antes, apiSlice.js)
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //un nuevo endpoint, getProducts, que hace una petición GET a la URL de productos. Según contants.js, ésta es /api/products
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // los datos se mantienen en caché durante 5 segundos
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Exportamos un hook useGetProductsQuery que uso en el componente HomeScreen.js para hacer la petición GET a la URL de productos
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
