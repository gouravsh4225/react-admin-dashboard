import React from 'react';
import {useHistory,useLocation} from "react-router-dom"
import logoBrand from "../../assets/avatar-michelle.jpg"
import "./Sidebar.css";
 
const navigationList = [
    {
        path:"/home",
        name:"Home",
    },
    {
        path:"/dashboard",
        name:"Dashboard",
    },
    {
        path:"/",
        name:"Listing",
    },
]


function Sidebar({toggleSide}) {
    const history = useHistory();    
    const goToPage = (e,item) => {
        
    console.log(history)
        history.push(item.path)

    }
    return (
        <div className={`sidebar-container ${toggleSide && 'show-sidebar'}`}>
            <div className="sidebar-brands">
            <img src={logoBrand} className="sidebar-brand"/>
            <span>Brand Name</span>
            </div>
            <div className="sidebar-navigation">
                <ul className="navigation-lists">
                {navigationList.map(item=>
                    <li className="navigation-item" 
                    key={item.name}
                    onClick={e=>goToPage(e,item)}>
                        {item.name}
                    </li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
