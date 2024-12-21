import React, { useEffect, useRef, useState } from 'react'
import './ShareProduct.css';
import closeBtn from '../../../Assets/icons/cancel.png';
import twitter from '../../../Assets/icons/x-charcol.png'
import facebook from '../../../Assets/icons/facebook-charcol.png'
import insta from '../../../Assets/icons/insta-charcol.png'
import mail from '../../../Assets/icons/mail-charcol.png'
import copyCharcol from '../../../Assets/icons/copy-charcol.png'
import copySuccess from '../../../Assets/icons/copy-success.png'
import star from '../../../Assets/icons/Star 19.png'
import { url } from '../../../utils/api';
import copy from 'copy-to-clipboard';

const ShareProduct = ({ isSharePopup, setIsSharePopup, selectedUid, selectedProduct }) => {
    const copyRef = useRef()
    let generatedLink = `https://furnituremecca.zellesolutions.com/single-product/${selectedProduct?.slug}`

    const handleCloseShareProductPopup = () => {
        setIsSharePopup(null)
        setIsCpoied(false)
    }

    const socialPlatforms = [
        { name: 'X', img: twitter, link: '#' },
        { name: 'Facebook', img: facebook, link: '#' },
        { name: 'Instagram', img: insta, link: '#' },
        { name: 'Email', img: mail, link: '#' }
    ]
    
    const [isCopied, setIsCpoied] = useState(false);
    const copyToClipboard = () => {
        let copyText = copyRef.current.value;
        let isCopy = copy(copyText);
        if(isCopy){
            setIsCpoied(true);
        }
    }
    return (
        <div className={`share-product-link-pop-up-main ${isSharePopup === selectedProduct?.uid ? 'show-product-share-pop-up' : ''}`} onClick={handleCloseShareProductPopup}>
            <div className='share-product-link-pop-up-inner' onClick={(e) => e.stopPropagation()}>
                <button className='share-product-link-pop-up-close-btn' onClick={handleCloseShareProductPopup}>
                    <img src={closeBtn} alt='close' />
                </button>

                <div className='share-product-popup-product-div'>
                    <img
                        src={`${url}${selectedProduct?.images?.[0]?.image_url}`}
                        alt='main-img'
                        className='share-product-selected-product-main-img'
                    />
                    <div className='share-product-selected-product-details'>
                        <h3>{selectedProduct?.name}</h3>
                        <div className='share-product-selected-product-rating'>
                            {Array.from({ length: 5 }).map((itm, indx) => (
                                <img src={star} alt='star icon' />
                            ))}
                            <p>(200)</p>
                        </div>
                        {selectedProduct?.sale_price === ''
                            ? <p className='share-product-selected-product-regural-price'>{selectedProduct?.regular_price}</p>
                            : <span className='share-product-selected-product-regular-and-sale-price'>
                                <del>{selectedProduct?.regular_price}</del>
                                <h3>{selectedProduct?.sale_price}</h3>
                            </span>}
                    </div>
                </div>
                <div className='share-product-social-platforms'>
                    {socialPlatforms.map((item, index) => (
                        <div className='share-product-single-social-platform'>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='share-product-generated-link-main-div'>
                    <input 
                        type='text' 
                        value={generatedLink}
                        // value={'text-to-copy'} 
                        ref={copyRef}
                        disabled 
                        className='share-product-generated-link' 
                        placeholder={ generatedLink} 
                    />
                    <button className={`share-product-link-generator-btn ${isCopied ? 'share-products-copy-btn' : ''}`} onClick={copyToClipboard}>
                        {isCopied ? 'Copied' : 'Copy'} 
                        <img src={isCopied ? copySuccess : copyCharcol} alt='copy' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShareProduct
