import React from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import TopProductsChart from "../components/TopProductsChart";
import StockTable from "../components/StockTable";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 p-6 bg-gray-100 w-full min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <StatCard title="Total Sales" value="₱95,000" />
                    <StatCard title="Total Inventory" value="145 sacks" />
                    <StatCard title="Transactions" value="52" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <SalesChart />
                    <TopProductsChart />
                </div>

                <StockTable />
            </div>
        </div>
    );
};

export default Dashboard;