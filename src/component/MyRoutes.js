import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import InventoryDashboard from "../pages/InventoryDashboard"
import Departments from "../pages/Departments"

export default function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><InventoryDashboard /></Layout>} />
                <Route path="/Dashboard" element={<Layout><InventoryDashboard /></Layout>} />
                <Route path="/Departments" element={<Layout><Departments /></Layout>} />
            </Routes>
        </>
    );
}