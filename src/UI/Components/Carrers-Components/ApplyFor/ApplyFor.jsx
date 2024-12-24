import React, { useState } from 'react'
import './ApplyFor.css'
import { useRef } from 'react'
import applyIcon from '../../../../Assets/Furniture Mecca/Careers/Mask group.png'

const ApplyFor = () => {
    const fileInputRef = useRef(null)
    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const [applyForData, setApplyForData] = useState({
        name: '',
        contact: '',
        email: '',
        city: '',
        state: '',
        file: null,
    })

    const [newData, setNewData] = useState({...applyForData})
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewData((prev) => ({...prev, [name]: value}));
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewData((prev) => ({...prev, file: file}))
    }
    const sendUserData = (e) => {
        e.preventDefault();
        setApplyForData(newData);
    }
    
  return (
    <form className='apply-for-main'>
        <label className='apply-for-input-labels'>
            Name 
            <input type='text' name='name' value={newData.name} placeholder='Alex James' onChange={handleInputChange} />
        </label>
        <label className='apply-for-input-labels'>
            Contact 
            <input type='text' name='contact' value={newData.contact} placeholder='123456789' onChange={handleInputChange} />
        </label>
        <label className='apply-for-input-labels'>
            Email 
            <input type='text' name='email' value={newData.email} placeholder='alex.james@gmail.com' onChange={handleInputChange} />
        </label>
        <label className='apply-for-input-labels'>
            City 
            <input type='text' name='city' value={newData.city} placeholder='New York' onChange={handleInputChange} />
        </label>
        <label className='apply-for-input-labels'>
            State 
            <input type='text' name='state' value={newData.state} placeholder='State' onChange={handleInputChange} />
        </label>
        <label className='apply-for-input-labels'>
            Upload your resume 
            <p className='apply-for-chose-file' onClick={handleFileClick}>Choose File</p>
            <input type='file' name='file' onChange={handleFileChange} style={{display: 'none'}}  />
        </label>
        <button className='apply-for-career-button' onClick={sendUserData}>
            <img src={applyIcon} alt='apply icon' />
            Apply
        </button>
    </form>
  )
}

export default ApplyFor
