import { create } from "zustand";
import toast from "react-hot-toast";

const useStore = create((set) => ({
  todoLists: JSON.parse(localStorage.getItem("list1")) || [],

  createList: (data) =>
    set((state) => {
      const newLists = [
        ...state.todoLists,
        {
          ...data,
          id: Date.now(),
          status: "Pending",
        },
      ];
      localStorage.setItem("list1", JSON.stringify(newLists));
      toast.success("Created task successfully");

      return { todoLists: newLists };
    }),

  deleteList: (id) =>
    set((state) => {
      const newLists = state.todoLists.filter((list) => list.id !== id);
      localStorage.setItem("list1", JSON.stringify(newLists));
      toast.success("Deleted task successfully");

      return { todoLists: newLists };
    }),

  updateList: (id, updatedData) =>
    set((state) => {
      const newLists = state.todoLists.map((list) =>
        list.id.toString() === id.toString() ? { ...list, ...updatedData } : list
      );
      console.log("Updated todoLists:", newLists); // Log the updated lists
      localStorage.setItem("list1", JSON.stringify(newLists));
      return { todoLists: newLists };
    }),

  toggleList: (id) =>
    set((state) => {
      const updateList = state.todoLists.map((list) =>
        list.id === id
          ? {
              ...list,
              status: list.status === "Pending" ? "Completed" : "Pending",
            }
          : list
      );

      localStorage.setItem("list1", JSON.stringify(updateList));
      toast.success("Updated task successfully");

      return { todoLists: updateList };
    }),
}));

export default useStore;
