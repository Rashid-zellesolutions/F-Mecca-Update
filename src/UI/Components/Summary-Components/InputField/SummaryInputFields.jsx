import React from 'react'
import './SummaryInputFields.css';

const SummaryInputFields = ({label, type, value, error, name, placeholder, required, fieldRequired, onChange}) => {
  return (
    <div className='summary-input-field'>
        <label className={fieldRequired === true ? 'required-field' : ''}>{label} {error && <p className='error-msg' style={{ color: "red", fontSize: "12px",}}>{error}</p>} </label>
        <input 
          type={type} 
          placeholder={placeholder} 
          required={required}
          name={name}
          value={value}
          onChange={onChange}
        />
        
    </div>
  )
}

export default SummaryInputFields
