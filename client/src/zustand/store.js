import axios from "axios";
import { create } from "zustand";
import zukeeper from "zukeeper";

const useStoreUsers = create(
  zukeeper((setState) => ({
    users: {},
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
    detail: {},
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
  }))
);

export { useStoreUsers, useStoreProducts };
