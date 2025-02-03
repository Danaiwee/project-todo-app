import {create} from 'zustand';
import useStore from './useStore.js';

const useNotificationStore = create((set,get) => ({
    notifications: JSON.parse(localStorage.getItem('notifications')) || [],

    checkNotification: () => {
        const {todoLists} = useStore.getState();
        const now = new Date();

        const upComingEvents = todoLists.filter((list) => {
            if(list.status === 'Completed' || list.alert !== 'enable') return false;

            const taskDateTime = new Date(`${list.date}T${list.time}`); 
            const timeDifferent = taskDateTime - now;

            return timeDifferent > 0 && timeDifferent <= 24*60*60*1000
        });

        localStorage.setItem('notifications', JSON.stringify(upComingEvents));

        set({notifications: upComingEvents})
    },

    startNotificationChecker: () => {
        setInterval(() => {
            get().checkNotification();
        }, 60000)
    }
}));

export default useNotificationStore;