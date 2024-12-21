import React from 'react'
import './ProductOverView.css';
import seatingIcon from '../../../Assets/icons/seating-capacity-icon.png';
import waterResistanceIcon from '../../../Assets/icons/water-resistance-icon.png';
import assemblyTool from '../../../Assets/icons/assemble-tool-icon.png';
import assemblyRequired from '../../../Assets/icons/assembly-required-icon.png';
import removeAbleCoushin from '../../../Assets/icons/removeable-cousion-icon.png';
import washingMachine from '../../../Assets/icons/washng-machine-icon.png'

const ProductOverView = () => {

    const overViewData = [
        {icon: seatingIcon, details: 'Seating Capacity: 5'},
        {icon: waterResistanceIcon, details: 'Water resistant'},
        {icon: assemblyRequired, details: 'Assembly Required'},
        {icon: assemblyTool, details: 'Assembly Tools Included'},
        {icon: removeAbleCoushin, details: 'Removable cushion cover'},
        {icon: washingMachine, details: 'Machine Washable Cushion Covers'},
    ]
  return (
    <div className='product-over-view-main-div'>
        <h3>Product Overview</h3>
        <div className='over-view-details-container'>
            {overViewData.map((item, index) => {
                return <div className='over-view-details'>
                    <img src={item.icon} alt='seating capacity icon' />
                    <p>{item.details}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductOverView
