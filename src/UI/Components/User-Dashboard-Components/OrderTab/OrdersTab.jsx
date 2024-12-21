import React, { useState } from 'react'
import './OrdersTab.css';
import arrowLeft from '../../../../Assets/icons/arrow-left-charcol.png';
import arrowRight from '../../../../Assets/icons/arrow-right-charcol.png';
import Loader from '../../Loader/Loader';
import OrderViewModal from '../OrderViewModal/OrderViewModal';

const OrdersTab = () => {
  const dataPerPage = 7;
  const [currentTableDataIndex, setCurrentTableDataIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const ordersData = [
    {row: 'TableHeah', tableHeadData: 
      [
        'Order Number',
        'Date',
        'Status',
        'Total',
        'Action'
      ],
      tableBody: [
        {
          orderNumber: '#0001',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0002',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0003',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0004',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0005',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0006',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0007',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0008',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0009',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0010',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0011',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0012',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0013',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0014',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
        {
          orderNumber: '#0015',
          date:  'september 12, 24',
          status: 'Canceled',
          total: '$14555 for 15 items',
        },
      ]
    }
  ]
  const totalItems = ordersData[0].tableBody.length;
  const maxIndex = Math.ceil(totalItems / dataPerPage) - 1
  const handleTableDataNext = () => {
    if(currentTableDataIndex < maxIndex){
      setLoading(true)
      setCurrentTableDataIndex(currentTableDataIndex + 1)
      setTimeout(() => setLoading(false), 1500)
    }
  }

  const handleTableDataPrev = () => {
    if(currentTableDataIndex > 0 ){
      setLoading(true)
      setCurrentTableDataIndex(currentTableDataIndex - 1);
      setTimeout(() => setLoading(false), 1500)
    }
  }

  const starterIndex = currentTableDataIndex * dataPerPage;
  const endIndex = starterIndex + dataPerPage;
  const currentItems = ordersData[0].tableBody.slice(starterIndex, endIndex)

  // View Modal
  const [viewProductModal, setViewProductModal] = useState(false)
  const [selectedProductData, setSelectedProductData] = useState([])
  const handleViewProductData = (data) => {
    setViewProductModal(true);
    setSelectedProductData(data);
  }
  console.log("selected product data", selectedProductData);
  return (
    <div className='dash-orders-main-container'>
        {loading && <Loader /> }
        <table className='order-table'>
           {ordersData.map((items, index) => (
            <>
            <tr key={index}>
              {items.tableHeadData.map((headItems, headItemIndex) => (
                <th key={headItemIndex}>{headItems}</th>
              ))}
            </tr>
              {currentItems.map((tbody, tindex) => (
                <tr key={tindex}>
                  <td>{tbody.orderNumber}</td>
                  <td>{tbody.date}</td>
                  <td>{tbody.status}</td>
                  <td>{tbody.total}</td>
                  <td>
                    <div className='table-action-buttons'>
                        <button>Pay</button>
                        <button onClick={() => handleViewProductData(tbody)}>View</button>
                        <button>Cancel</button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
           ))}
        </table>
        <div className='paginations'>
          <div className='pagination-controls'>
            <span className='pagination-counts'>
              <p>{starterIndex + 1} - {Math.min(endIndex, totalItems)}</p>
              of {totalItems}
            </span>
            <div className='pagination-page-change-arrows'>
              <button onClick={handleTableDataPrev} disabled={currentTableDataIndex === 0}>
                <img src={arrowLeft} alt='left arrow' />
              </button>
              <button onClick={handleTableDataNext} disabled={currentTableDataIndex === maxIndex}>
                <img src={arrowRight} alt='arrow right' />
              </button>
            </div>
          </div>
        </div>
        <OrderViewModal 
          viewModal={viewProductModal}
          setViewModal={setViewProductModal}
        />
    </div>
  )
}

export default OrdersTab
