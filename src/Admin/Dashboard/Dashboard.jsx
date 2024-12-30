import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <nav
                className="offcanvas-lg offcanvas-start bg-light border-end"
                style={{ width: "250px" }}
                data-bs-backdrop="false"
            >
                <div className="offcanvas-header d-lg-none">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body p-0">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button
                                className={`nav-link w-100 text-start ${activeTab === "home" ? "active-link" : ""
                                    }`}
                                onClick={() => handleTabChange("home")}
                            >
                                <i className="bi bi-house me-2"></i> Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link w-100 text-start ${activeTab === "profile" ? "active-link" : ""
                                    }`}
                                onClick={() => handleTabChange("profile")}
                            >
                                <i className="bi bi-person me-2"></i> Profile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link w-100 text-start ${activeTab === "settings" ? "active-link" : ""
                                    }`}
                                onClick={() => handleTabChange("settings")}
                            >
                                <i className="bi bi-gear me-2"></i> Settings
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow-1 p-3">
                {activeTab === "home" && <h1>Welcome to the Home Section</h1>}
                {activeTab === "profile" && <h1>Welcome to the Profile Section</h1>}
                {activeTab === "settings" && <h1>Welcome to the Settings Section</h1>}
            </div>
        </div>
    );
};

export default Dashboard;
