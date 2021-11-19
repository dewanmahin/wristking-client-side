import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css'

const DashboardHome = () => {
    const {user} = useAuth()
    return (
        <div className="dashboardHome d-flex align-items-center justify-content-center h-100">
            <h1 className="m-0">Welcome {user?.displayName}!</h1>
        </div>
    );
};

export default DashboardHome;