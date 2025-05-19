import { useState } from "react";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");

    return (
        <aside className="w-64 h-screen bg-green-800 text-white fixed">
            <div className="p-6 text-2xl font-bold">RiceTrax</div>
            <ul className="space-y-4 px-6">
                <li
                    className={`p-2 rounded cursor-pointer ${active === "Dashboard" && "bg-green-700"
                        }`}
                    onClick={() => setActive("Dashboard")}
                >
                    Dashboard
                </li>
                <li
                    className={`p-2 rounded cursor-pointer ${active === "SalesRecord" && "bg-green-700"
                        }`}
                    onClick={() => setActive("SalesRecord")}
                >
                    Sales Record
                </li>
                <li className="hover:bg-green-700 p-2 rounded cursor-pointer">Inventory</li>
                <li className="hover:bg-green-700 p-2 rounded cursor-pointer">POS</li>
                <li className="hover:bg-green-700 p-2 rounded cursor-pointer">Notification</li>
                <li className="hover:bg-green-700 p-2 rounded cursor-pointer">Settings</li>
            </ul>
            <div className="absolute bottom-6 w-full px-6">
                <button className="w-full bg-green-600 p-2 rounded hover:bg-green-700">Log out</button>
            </div>
        </aside>
    );
};

export default Sidebar;
