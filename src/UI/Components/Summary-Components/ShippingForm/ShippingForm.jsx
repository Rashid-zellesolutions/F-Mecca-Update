import React, { useEffect, useState } from 'react'
import './ShippingForm.css';
import SummaryInputFields from '../InputField/SummaryInputFields';
import { useOrder } from '../../../../context/orderContext/orderContext';
import { useMyOrders } from '../../../../context/orderContext/ordersContext';

const ShippingForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxClick = () => { setIsChecked(!isChecked) }

    const {orderPayload, emptyField, setEmptyField, handleNestedValueChange,handleNestedValueChangeShipping,handleNestedShippingBool, loading, handleValueChange, handleClickTop, handleTabOpen} = useMyOrders();

    // const validateBillingFields = () => {
    //     const {billing} = orderPayload;

    //     for (const key in billing){
    //         if(billing[key] === ""){
    //             alert(`the field ${key.replace("_", "")} is missing`)
    //             return false;
    //         }
    //     } 
    //     alert("all fields are missing")
    //     return true
    // }

    const areBillingFieldsFilled = () => {
        const { billing } = orderPayload;
        const newErrorObj = {};

        // return Object.values(billing).every((value) => value.trim() !== "");
        for (const field in billing){
            if(billing[field].trim() === ""){
                newErrorObj[field] = `required`
            }
        }
        console.log(billing,"here is billing detsile")
        setEmptyField(newErrorObj);
        return Object.keys(newErrorObj).length === 0;
    };

     const handleSubmit = (e) => {
        e.preventDefault();
        if (areBillingFieldsFilled()) {
        // Proceed with form submission
        handleTabOpen(1); 
        handleClickTop()
        console.log("Order submitted:", orderPayload);
        }
    };

    if(loading){
        return <div>Loading....</div>
    }

    return (
        <>
            <form className='shipping-detail-form'>
                <div className='first-name-last-name'>
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.first_name || ''}
                        label={'First Name'}
                        fieldRequired={true}
                        placeholder={'First Name'}
                        name={'first_name'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.first_name}
                    />
                    <SummaryInputFields
                        type={'text'}
                        name={'last_name'}
                        value={orderPayload.billing?.last_name || ''}
                        label={'Last Name'}
                        fieldRequired={true}
                        placeholder={'Last Name'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.last_name}
                    />
                </div>
                <div className='email-container'>
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.email || ''}
                        label={'Email'}
                        fieldRequired={true}
                        placeholder={'Email'}
                        name={'email'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.email}
                    />
                </div>
                <div className='country-region'>
                    <p>Country/ Region</p>
                    <h3>United States (USA)</h3>
                </div>
                <div className='shipping-address'>
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.address_1 || ''}
                        label={'Street Address'}
                        fieldRequired={true}
                        placeholder={'House number & Street number'}
                        name={'address_1'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.address_1}
                    />
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.address_2 || ''}
                        placeholder={'Apartment, suite, unit etc'}
                        fieldRequired={false}
                        name={'address_2'}
                        onChange={handleNestedValueChange}
                        error={emptyField.address_2} 
                    />
                </div>
                <div className='city-state-zip'>
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.postal_code || ''}
                        label={'Zip Code'}
                        // fieldRequired={true}
                        name={'postal_code'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.postal_code}
                    />
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.city || ''}
                        label={'Town/City'}
                        name={'city'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.city}
                    />
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.state || ''}
                        label={'State'}
                        fieldRequired={true}
                        placeholder={'Pennsylvanian'}
                        name={'state'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.state}
                    />
                </div>
                <div>
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.billing?.phone || ''}
                        label={'Phone'}
                        fieldRequired={true}
                        placeholder={'Phone'}
                        name={'phone'}
                        required={'required'}
                        onChange={handleNestedValueChange}
                        error={emptyField.phone}
                    />
                </div>
                <div className='different-billing-option'>
                    <div className='different-billing-checkox'>
                        <input type='checkbox' id='defferent-billing' onClick={handleCheckboxClick} />
                        <label for='defferent-billing'>Ship to a different Address</label>
                    </div>
                    <div className={`defferent-billing-option-true ${isChecked ? 'show-defferent-billing-option' : ''}`}>
                        <div className='first-name-last-name'>
                        <SummaryInputFields
                        type={'text'}
                        value={orderPayload.shipping?.first_name || ''}
                        label={'First Name'}
                        fieldRequired={isChecked ? true : false}
                        placeholder={'First Name'}
                        name={'first_name'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.first_name}
                    />
                    <SummaryInputFields
                        type={'text'}
                        name={'last_name'}
                        value={orderPayload.shipping?.last_name || ''}
                        label={'Last Name'}
                        fieldRequired={isChecked ?true:false}
                        placeholder={'Last Name'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.last_name}
                    />
                        </div>
                        <div className='country-region'>
                            <p>Country/ Region</p>
                            <h3>United States (USA)</h3>
                        </div>
                        <div className='shipping-address'>
                        <SummaryInputFields
                        type={'text'}
                        value={orderPayload.shipping?.address_1 || ''}
                        label={'Street Address'}
                        fieldRequired={isChecked ?true:false}
                        placeholder={'House number & Street number'}
                        name={'address_1'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.address_1}
                    />
                    <SummaryInputFields
                        type={'text'}
                        placeholder={'Apartment, suite, unit etc'}
                        value={orderPayload.shipping?.address_2 || ''}
                        fieldRequired={false}
                        name={'address_2'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.address_2} 
                    />
                        </div>
                        <div className='city-state-zip'>
                        <SummaryInputFields
                        type={'text'}
                        value={orderPayload.shipping?.postal_code || ''}
                        label={'Zip Code'}
                        fieldRequired={isChecked ?true:false}
                        name={'postal_code'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.postal_code}
                    />
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.shipping?.city || ''}
                        label={'Town/City'}
                        name={'city'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.city}
                    />
                    <SummaryInputFields
                        type={'text'}
                        value={orderPayload.shipping?.state || ''}
                        label={'State'}
                        fieldRequired={isChecked ?true:false}
                        placeholder={'Pennsylvanian'}
                        name={'state'}
                        required={'required'}
                        onChange={handleNestedValueChangeShipping}
                        error={emptyField.state}
                    />
                        </div>
                    </div>
                </div>
                <div className='order-note'>
                    <SummaryInputFields type={'text'} label={'Order Notes (Optional)'} placeholder={'Notes about your order, e.g Special  delivery notes'} />
                </div>
                <button type='button' onClick={handleSubmit} className='desktop-billing-details-send-button'>
                    Continue to Payment
                </button>
            </form>
            <form className='mobile-view-shipping-details-form'>
                <div className='mobile-view-personal-details'>
                    <SummaryInputFields type={'text'} label={'First Name'} fieldRequired={true} placeholder={'First Name'} required={true} />
                    <SummaryInputFields type={'text'} label={'Last Name'} fieldRequired={true} placeholder={'Last Name'} required={true} />
                    <SummaryInputFields type={'text'} label={'Phone'} fieldRequired={true} placeholder={'Phone'} required={true} />
                    <SummaryInputFields type={'text'} label={'Email'} fieldRequired={true} placeholder={'Email'} required={true} />
                </div>
                <div className='mobile-delivery-details'>
                    <h3>Delivery Options</h3>
                    <SummaryInputFields type={'text'} label={'Address'} fieldRequired={true} placeholder={'Address'} required={true} />
                    <SummaryInputFields type={'text'} label={'Apt, Suite (Optional)'} fieldRequired={false} placeholder={'Apt, Suite'} required={true} />
                    <SummaryInputFields type={'text'} label={'Phone'} fieldRequired={true} placeholder={'Phone'} required={true} />
                    <SummaryInputFields type={'text'} label={'Email'} fieldRequired={true} placeholder={'Email'} required={true} />
                    <SummaryInputFields type={'text'} label={'City'} fieldRequired={true} placeholder={'City'} required={true} />
                    <div className='mobile-view-city-and-zip'>
                        <SummaryInputFields type={'text'} label={'Zip Code'} fieldRequired={true} placeholder={'Zip Code'} required={true} />
                        <SummaryInputFields type={'text'} label={'State'} placeholder={'State'} required={true} />
                    </div>
                </div>
                <div className='mobile-delivery-options-sections'>
                    <h3>Delivery Options:</h3>
                    <div className='mobile-delivery-option-details'>
                        <input type='radio' />
                        <div className='mobile-delivery-option-single-detail'>
                            <h3>White Glove : $199</h3>
                            <p>
                                Full delivery service to the room of your choice,
                                unpacking, assambling & trash removal.
                            </p>
                        </div>
                    </div>
                    <div className='mobile-delivery-option-details'>
                        <input type='radio' />
                        <div className='mobile-delivery-option-single-detail'>
                            <h3>Thrushhold: $149</h3>
                            <p>
                                Deliver inside the front door of your home. You do  the
                                unpacking & assambling.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mobile-pay-btn-section'>
                    <button onClick={()=> handleTabOpen(1)}>
                        Continue to Payment
                    </button>
                </div>
            </form>
        </>
    )
}

export default ShippingForm
