import React from 'react'
import './UserDashboard.css';
import DashboardTabs from '../../Components/User-Dashboard-Components/DashboardTabs/DashboardTabs';

const UserDashboard = () => {
  return (
    <div className='user-dashboard-main-page'>
        <div className='user-dashboard-main-heading'>
            <h3>My Account</h3>
        </div>
        <DashboardTabs />
    </div>
  )
}

export default UserDashboard
