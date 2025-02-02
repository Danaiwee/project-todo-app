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
    }),

    toggleList: (id) => set((state) => {
        const updateList = state.todoLists.map((list) => (
            list.id === id
                ? {...list, status: list.status === 'Pending' ? 'Completed' : 'Pending'}
                : list
        ));

        localStorage.setItem('list1', JSON.stringify(updateList));
        toast.success("Updated task successfully");

        return {todoLists: updateList}
    })
}));

export default useStore;