import React, { useEffect, useState } from 'react'
import './SelectStore.css'
import axios from 'axios';
import arrowRight from '../../../../Assets/icons/arrow-right-white.png'

const SelectStore = () => {

    const [storesData, setStoresData] = useState()
    useEffect(() => {
        const fetchStores = async () => {
            const api = `https://fm.skyhub.pk/api/v1/stores/get`;
            try {
                const response = await axios.get(api);
                setStoresData(response.data.data)
            } catch (error) {
                console.error("Error fetching stores", error);
            }
        }
        fetchStores()
    }, [])

    return (
        <div className='select-store-tab-main-container'>
            <h3 className='store-select-main-heading'>Select Store</h3>
            <div className='stores-list-container'>
                {storesData && storesData.map((items, index) => (
                    <div className='single-store-card' key={index}>
                        <img src={`https://fm.skyhub.pk${items.images[0].image_url}`} alt='store icon' className='single-store-card-img' />
                        <p className='single-store-card-store-name'>{items.address_1}</p>
                    </div>
                ))}
            </div>
            <div className='select-stores-tab-next-button-div'>
                <button className='next-tab-button'>
                    Next 
                    <img src={arrowRight} alt='arrow right' />
                </button>
            </div>
        </div>
    )
}

export default SelectStore
