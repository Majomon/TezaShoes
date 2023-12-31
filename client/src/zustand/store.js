import axios from "axios";
import { create } from "zustand";
import zukeeper from "zukeeper";

const useStoreUsers = create(
  zukeeper((setState) => ({
    users: {},
    userData: {},
    fetchAllUsers: async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        if (response.status === 200) {
          setState((prevState) => ({ ...prevState, users: response.data }));
        } else {
          throw new Error(
            `Error al obtener la lista de usuarios: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        return false; // Indica falla en la solicitud
      }
    },
  }))
);

const useStoreProducts = create(
  zukeeper((setState) => ({
    allProducts: [],
    productsFilter:[],
    detail: {},
    categories: [],
    fetchDetailProduct: async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        if (response.status === 200) {
          setState((prevState) => ({ ...prevState, users: response.data }));
        } else {
          throw new Error(
            `Error al obtener el detalle del Producto: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`No existe el producto de ID: ${id}`, error);
        return false; // Indica falla en la solicitud
      }
    },
    fetchAllProducts: async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            allProducts: response.data,
          })); // Actualiza el estado allProducts con la información de todos los productos
        } else {
          throw new Error(
            `Error al obtener todos los productos: ${response.status}`
          );
        }
      } catch (error) {
        console.error(
          "Error al realizar la solicitud de todos los productos:",
          error
        );
        return false; // Indica falla en la solicitud
      }
    },
    setProducts: (products) => {
      setState({ allProducts: products });
    },
    setDetail: (product) => {
      setState({ detail: product });
    },
    setCategories: (category) => {
      setState({ categories: category });
    },
    setProductsFilter: (productsFilter) => {
      setState({ productsFilter: productsFilter });
    },
  }))
);


const totalSidebarCart = create(
  zukeeper((setState) => ({
    totalCart: 0,
    setTotalCart: () => {
      setState((state) => ({totalCart: state.totalCart + 1}))
    }
  }))
);


export { useStoreUsers, useStoreProducts, totalSidebarCart};
