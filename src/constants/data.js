import { FaTasks } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

export const HEADER_LISTS = [
    {id: '1', title: 'HOME', link: '/'},
    {id: '2', title: 'DASHBOARD', link: '/dashboard'},
    {id: '3', title: 'CONTACT', link: '/contact'}
];

export const DASHBOARD_TOPICS = ['Dashboard', 'Tasks'];
export const DASHBOARD_CARDS_DATA = [
    {total: 195, title: "Total Tasks", icon: FaTasks, bg:'bg-blue-400' },
    {total: 105, title: 'Pending Tasks', icon: MdOutlinePendingActions, bg: 'bg-[#ED6A5A]'},
    {total: 90, title: 'Complete Tasks', icon: FaRegCalendarCheck, bg: 'bg-[#54D17E]'}
]
export const DASHBOARD_CHART_DATA = [
    {name: 'Pendding Tasks', value: 40, color: "#ED6A5A"},
    {name: 'Complete Tasks', value: 10, color: "#54D17E"}
]