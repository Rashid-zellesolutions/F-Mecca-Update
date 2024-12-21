import React from 'react'
import './OrderViewModal.css'
import closeBtn from '../../../../Assets/icons/close-btn-black.png'

const OrderViewModal = ({viewModal, setViewModal}) => {
    const handleCloseOrderView = () => {
        setViewModal(false)
    }
  return (
    <div className={`order-view-modal-main ${viewModal ? 'show-product-modal' : ''}`}>
        <div className='order-view-modal-inner-sec'>
            <button className='order-close-btn' onClick={handleCloseOrderView}>
                <img src={closeBtn} alt='close-btn' />
            </button>
        </div>
    </div>
  )
}

export default OrderViewModal
