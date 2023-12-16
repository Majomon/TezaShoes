import axios from "axios";
import { create } from "zustand";
import zukeeper from "zukeeper";

const useStoreUsers = create(
  zukeeper((set) => ({
    users: {},
    fetchUsers: async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");

        if (response.status === 200) {
          set({ users: response.data });
          return true; // Indicador de éxito
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
      return false; // Indicador de falla
    },
  }))
);

export { useStoreUsers };
