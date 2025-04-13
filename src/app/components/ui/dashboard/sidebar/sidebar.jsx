import React from 'react'
import styles from "../ui/dashboard/sidebar/sidebar.module.css";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            }
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            }
            {
                title: "Dashboard",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>,
            }
        ]
    }
]

const sidebar = () => {
  return (
    <div>sidebar</div>
  )
}

export default sidebar