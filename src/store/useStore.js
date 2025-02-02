import {create} from 'zustand';
import toast from 'react-hot-toast';

const useStore = create((set) => ({
    todoLists: JSON.parse(localStorage.getItem('list1')) || [],

    createList: (data) => set((state) => {
        const newLists = [
            ...state.todoLists, {
                ...data,
                id: Date.now(),
                status: "Pending"
            }
        ];
        localStorage.setItem('list1', JSON.stringify(newLists));
        toast.success("Created task successfully")

        return {todoLists: newLists}

    }),

    deleteList: (id) => set((state) => {
        const newLists = state.todoLists.filter((list) => list.id !== id);
        localStorage.setItem('list1', JSON.stringify(newLists));
        toast.success("Deleted task successfully");

        return {todoLists: newLists}
    })
}));

export default useStore;