import React from 'react';
import {
    MdDashboard,
    MdHelpCenter,
    MdOutlineSettings,
    MdSupervisedUserCircle,
  

} from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import styles from "../ui/dashboard/sidebar/sidebar.module.css";
import MenuLink from './menuLink/menuLink';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title: "Dashboard",
                path: "/dashboard/blogs",
                icon: <FaBloggerB/>,
            },
        ],
    },
    {   
        title: "Analytics",
        list: [
            {
                "title": "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork/>,
            },
        ],

    },

    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "dashboard/settings",
                icon: <MdOutlineSettings/>,
            },
            {
                title: "Help",
                path: "dashboard/help",
                icon: <MdHelpCenter/>,

            }
        ]
    }
]

const sidebar = () => {
  return (
    <div className={styles.container}>
        
            <div className={styles.container}>
                <div className={styles.user}>
                    <Image src="" alt="" width="50" height="50" />

                    

                </div>

            </div>
            <ul>
                {menuItems.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>
                            {cat.title}
                        
                        </span>  
                        {cat.list.map(item=> (
                            <MenuLink item={item} key={item.title}/>
                        ))}

                    </li>
                ))}
            </ul>

    
    </div>
  )
}

export default sidebar