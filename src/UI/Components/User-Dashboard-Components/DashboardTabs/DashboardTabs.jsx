import React, { useState } from 'react'
import './DashboardTabs.css';
import DashTab from '../DashTab/DashTab';
import OrdersTab from '../OrderTab/OrdersTab';
import DownloadsTab from '../DownloadsTab/DownloadsTab';
import AddressesTab from '../AddressesTab/AddressesTab';
import PaymentMethodTab from '../PaymentMethodTab/PaymentMethodTab';
import AccountDetailsTab from '../AccountDetailsTab/AccountDetailsTab';
import Loader from '../../Loader/Loader';

const DashboardTabs = () => {
    const [loading, setLoading] = useState(false);
    const dashTabsTitles = [
        'Dashboard',
        'Orders',
        'Downloads',
        'Addresses',
        'Payment Methods',
        'Account Details',
        'Logout'
    ]
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const handleTabOpen = (index) => {
        setLoading(true)
        setCurrentTabIndex(index);
        setTimeout(() => setLoading(false), 1000);
    }
  return (
    <div className='dashboard-all-tabs-toggler-main-container'>
        {loading && <Loader />}
        <div className='dashboard-tabs-toggle-nav'>
            {dashTabsTitles.map((item, index) => (
                <h3 
                    key={index} 
                    className={`dash-single-tab-title ${currentTabIndex === index ? 'active-dash-tab' : ''}`}
                    onClick={() => handleTabOpen(index)}
                >
                    {item}
                </h3>
            ))}
        </div>
        {
            currentTabIndex === 0 ? <DashTab /> : 
            currentTabIndex === 1 ? <OrdersTab /> : 
            currentTabIndex === 2 ? <DownloadsTab /> : 
            currentTabIndex === 3 ? <AddressesTab /> : 
            currentTabIndex === 4 ? <PaymentMethodTab /> : 
            currentTabIndex === 5 ? <AccountDetailsTab /> : <></>
        }
    </div>
  )
}

export default DashboardTabs
