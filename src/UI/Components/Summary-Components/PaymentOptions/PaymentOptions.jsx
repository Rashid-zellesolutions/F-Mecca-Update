import React, { useState, useEffect } from 'react'
import './PaymentOptions.css'
import acimoLogo from '../../../../Assets/Logo/acimo-logo.png'
import masterCard from '../../../../Assets/icons/master.png';
import visaCard from '../../../../Assets/icons/visa.png';
import discoverCard from '../../../../Assets/icons/discover.png';
import americanExpress from '../../../../Assets/icons/american-express.png';
import SummaryInputFields from '../InputField/SummaryInputFields';
import { useMyOrders } from '../../../../context/orderContext/ordersContext';


const PaymentOptions = ({ onSelectedLabel }) => {

    const creditCards = [masterCard, visaCard, discoverCard, americanExpress]
    const [selectPaymentMethod, setSelectPaymentMethod] = useState(null);
    const [selectedLabelValue, setSelectedLabelValue] = useState('')

    const handlePaymentToggle = (paymentMethod, label) => {
        setSelectPaymentMethod(paymentMethod);
        setSelectedLabelValue(label)
        onSelectedLabel(label)
    }

    const {
        creditCardData,
        setCreditCardData,
        activePaymentMethods
    } = useMyOrders();

    const checkPaymentMethodById = (id) => {
        const paymentMethod = activePaymentMethods?.find(pm => pm.id === id);
        if (paymentMethod) {
            return paymentMethod;
        } else {
            return paymentMethod;
        }
    };

    const detectCardType = (cardNumber) => {
        const cardTypes = {
            visa: /^4/,
            mastercard: /^5/,
            amex: /^3[47]/, // American Express starts with 34 or 37
            discover: /^6/, // Discover cards typically start with 6
            // You can add more card types as needed
        };

        // Check the card number's first digit and match with card type
        for (const [type, regex] of Object.entries(cardTypes)) {
            if (regex.test(cardNumber)) {
                return type;
            }
        }

        return ''; // Default to empty string if no match found
    };

    useEffect(() => {
        console.log(activePaymentMethods, "here are active payment");

    }, [activePaymentMethods])


    return (
        <div className='payment-types-inner-container'>


            {activePaymentMethods && checkPaymentMethodById("9879079j7mummjh") ? <>

                <div className='select-payment-method credit-card' onClick={() => handlePaymentToggle('credit-card', 'Credit Card')}>
                    <input type="radio" id='credit-card' name="payment" value="credit-card" checked={selectPaymentMethod === 'credit-card'} readOnly />
                    <label for='credit-card' class="radio-label">Credit Card</label>
                </div>

                <div className={`credit-card-data ${selectPaymentMethod === 'credit-card' ? 'show-credit-card' : ''}`}>
                    <SummaryInputFields
                        type={'text'}
                        value={creditCardData.card_holder_name || ''}
                        label={'Card Holder Name'}
                        fieldRequired={true}
                        placeholder={'Card Holder Name'}
                        name={'card_holder_name'}
                        required={'required'}
                        onChange={(e) => {
                            const { value } = e.target;
                            setCreditCardData((prevData) => ({
                                ...prevData,
                                card_holder_name: value
                            }))
                        }}
                    />

                    <label className='card-number-input'>
                        <div className='card-number-input-label'>
                            <p>Card Number</p>
                            <div className='card-number-input-card-types'>
                                {creditCardData.card_type === "" ? (
                                    creditCards.map((items, index) => (
                                        <img key={index} src={items} alt='card' />
                                    ))
                                ) : (
                                    <img src={creditCardData.card_type==="visa"?visaCard:creditCardData.card_type==="mastercard"?masterCard:creditCardData.card_type==="amex"?americanExpress:creditCardData.card_type==="discover"?discoverCard:null} alt='card' />
                                )}

                            </div>
                        </div>
                        <input
                            className='card-number-input-field'
                            type='text'
                            value={creditCardData.card_number}
                            placeholder='0000-0000-0000-0000'
                            name='card_number'
                            onChange={(e) => {
                                let { value } = e.target;
                                value = value.replace(/\D/g, ''); // Remove all non-digit characters
                                if (value.length > 16) {
                                    value = value.slice(0, 16); // Keep only the first 16 digits
                                }

                                // Format card number with dashes after every 4 digits
                                const formattedValue = value
                                    .replace(/(\d{4})(?=\d)/g, '$1-') // Add dash after every 4 digits
                                    .slice(0, 19); // Ensure the formatted value doesn't exceed 19 characters (4 sets of 4 digits + 3 dashes)

                                // Set card type based on the card number
                                const cardType = detectCardType(formattedValue.replace(/-/g, '')); // Remove dashes for detection

                                setCreditCardData((prevData) => ({
                                    ...prevData,
                                    card_number: formattedValue,
                                    card_type: cardType, // Set the detected card type
                                }));
                                console.log(creditCardData, "data")
                            }}
                        />
                    </label>

                    <div className='credit-card-expiry-and-sec-number'>
                        <SummaryInputFields
                            type={'text'}
                            value={creditCardData.expiry_date}
                            placeholder={'MM/YY'}
                            label={'Expiry date'}
                            name={'expiry_date'}
                            onChange={(e) => {
                                let { value } = e.target;
                                value = value.replace(/[^0-9/]/g, '');
                                if (value.length === 2 && !value.includes('/')) {
                                    value = `${value}/`; // Add slash after the month
                                }
                                const [month, year] = value.split('/');
                                if (month && parseInt(month, 10) > 12) {
                                    value = ''; // Reset if month exceeds 12
                                    alert('Invalid month. Please enter a value between 01 and 12.');
                                }
                                if (value.length > 5) {
                                    value = value.slice(0, 5); // Limit length to MM/YY format
                                }
                                setCreditCardData((prevData) => ({
                                    ...prevData,
                                    expiry_date: value
                                }))
                            }}
                        />
                        <SummaryInputFields
                            type={'text'}
                            value={creditCardData.sec_code}
                            placeholder={'000'}
                            label={'Sec code'}
                            name={'sec_code'}
                            onChange={(e) => {
                                let { value } = e.target;
                                value = value.replace(/\D/g, '');
                                if (value.length > 3) {
                                    value = value.slice(0, 3);  // Keep only the first 16 digits
                                }
                                const formattedValue = value
                                    .replace(/(\d{4})(?=\d)/g, '$1-')
                                setCreditCardData((prevData) => ({
                                    ...prevData,
                                    sec_code: formattedValue
                                }))
                            }}
                        />
                    </div>

                    <div className='pay-secure-option'>
                        <p>Pay securely using your credit card</p>
                    </div>
                </div>
            </> : <></>}


            {activePaymentMethods && checkPaymentMethodById("961803160m79delmiw") ? <>
                <div className='select-payment-method paypal' onClick={() => handlePaymentToggle('paypal', 'Paypal')}>
                    <input type="radio" id='paypal' name="payment" value="paypal" checked={selectPaymentMethod === 'paypal'} readOnly />
                    <label for='paypal' class="radio-label">Paypal</label>
                </div>

                <div className={`paypal-data ${selectPaymentMethod === 'paypal' ? 'show-paypal' : ''}`}>
                    <p>Pay via Paypal</p>
                </div>
            </> : <></>}


            {activePaymentMethods && checkPaymentMethodById("19783168sagsk879") ? <>
                <div className='select-payment-method' onClick={() => handlePaymentToggle('acima', 'Acima Leasing')}>
                    <input type="radio" id='acima' name="payment" value="acima" checked={selectPaymentMethod === 'acima'} readOnly />
                    <label for='acima' class="radio-label">Acima Leasing</label>
                    <p>The no credit option</p>
                    <p>Learn more</p>
                </div>

                <div className={`acima-payment-method acima ${selectPaymentMethod === 'acima' ? 'acima-payment-toggle' : ''}`}>
                    <img src={acimoLogo} alt='logo' />
                    <p>Pay via acima</p>
                </div></> : <></>}



            {/* 
            <div className='select-payment-method checkout' onClick={() => handlePaymentToggle('checkout', 'Checkout Financing')}>
                <input type="radio" id='checkout' name="payment" value="checkout" checked={selectPaymentMethod === 'checkout'} readOnly />
                <label for='checkout' class="radio-label">Checkout Financing</label>
            </div> */}
        </div>
    )
}

export default PaymentOptions
