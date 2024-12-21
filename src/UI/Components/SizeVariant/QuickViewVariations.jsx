import React, { useEffect, useState } from 'react';
import './QuickViewVariations.css';
import { url } from '../../../utils/api';

const QuickViewVariations = ({ default_uid, attributes, productData, variations,onChangeVar }) => {
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [matchedUid, setMatchedUid] = useState(null);

    // Handle attribute selection
    const handleAttributeSelection = (attributeName, option) => {
        setSelectedAttributes((prev) => {
            const updatedAttributes = { ...prev, [attributeName]: option };
    
            // Match the selected attributes to find the correct variation
            const matchingVariation = variations.find((variation) =>
                variation.attributes.every((attr) => {
                    const selectedOption = updatedAttributes[attr.name];
                    return selectedOption?.value === attr.options?.[0]?.value;
                })
            );
    
            // Only update UID if a matching variation is found or it's different from the current UID
            if (matchingVariation && matchingVariation.uid !== matchedUid) {
                setMatchedUid(matchingVariation.uid);
            } else if (!matchingVariation) {
                setMatchedUid(null); // No match found
            }
    
            return updatedAttributes;
        });
    };

    useEffect(() => {
        // Check if the product is a simple product (non-variable)
        const isSimpleProduct = productData && productData?.attributes?.every(attr => attr.options.length === 1);

        if (variations && default_uid) {
            const defaultVariation = variations.find((v) => v.uid === default_uid);
    
            if (defaultVariation) {
                const initialAttributes = {};
                defaultVariation.attributes.forEach((attr) => {
                    initialAttributes[attr.name] = attr.options[0];
                });
                setSelectedAttributes(initialAttributes);
                setMatchedUid(default_uid);
                return;
            }
        }
    
        if (productData) {
            const initialAttributes = {};

            // If it's a simple product, automatically select the only option for each attribute
            if (isSimpleProduct) {
                productData?.attributes?.forEach((attr) => {
                    initialAttributes[attr.name] = attr.options[0]; // Select the only option
                });
                setSelectedAttributes(initialAttributes);
                setMatchedUid(productData.uid); // Set matched UID directly
            } else {
                productData?.attributes?.forEach((attr) => {
                    initialAttributes[attr.name] = attr.options?.[0];
                });
                setSelectedAttributes(initialAttributes);
                setMatchedUid(productData.uid);
            }
        }
    }, [default_uid, productData, variations]);  // Runs when any of these values change
    
    useEffect(() => {
        // Check if the selected attributes match a variation
        if (Object.keys(selectedAttributes).length === 0) return;
    
        const matchingVariation = variations.find((variation) =>
            variation.attributes.every((attr) => {
                const selectedOption = selectedAttributes[attr.name];
                return selectedOption?.value === attr.options?.[0]?.value;
            })
        );
    
        if (matchingVariation) {
            setMatchedUid(matchingVariation.uid);
        } else {
            setMatchedUid(null); // No match found
        }
    }, [selectedAttributes, variations]);  // Runs when selectedAttributes or variations change


    useEffect(()=>{
        onChangeVar(matchedUid)
    },[matchedUid])
    

    return (
        <div className='quick-view-attributes-main'>
            {attributes?.map((attribute) => (
                <div className='attributes-types' key={attribute.name}>
                    {attribute.type === 'color' ? (
                        <div className='attribute-type'>
                            <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
                            <div className='attribute-variations' style={{height:"60px"}}>
                                {attribute.options.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`attribute-single-color `}
                                        onClick={() => handleAttributeSelection(attribute.name, option)}
                                    >
                                        <div
                                            className={`attribute-color-variation-box ${
                                                selectedAttributes[attribute.name]?.value === option.value ? 'selected' : ''
                                            }`}
                                            style={{ backgroundColor: option.value }}
                                        ></div>
                                        <p className='quick-view-atribute-option-name'>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : attribute.type === 'image' ? (
                        <div className='attribute-type'>
                        <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
                        <div className='attribute-variations' style={{height:"80px"}}>
                            {attribute.options.map((option) => (
                                <div
                                    key={option.value}
                                    className={`attribute-image-type`}
                                    onClick={() => handleAttributeSelection(attribute.name, option)}
                                >
                                    <div
                                        className={`variation-image-div ${
                                            selectedAttributes[attribute.name]?.value === option?.value
                                                ? 'active-selected-image-variation'
                                                : ''
                                        }`}
                                    >
                                        <img src={`${url}${option.value}`} alt={option.name} />
                                    </div>
                                    {/* Option name will show on hover */}
                                    <p className='quick-view-atribute-option-name'>{option.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    ) : attribute.type === 'select' ? (
                        <div className='attribute-type'>
                            <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
                            <div className='attribute-variations'>
                                {attribute.options.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`select-type-attribute ${
                                            selectedAttributes[attribute.name]?.value === option.value
                                                ? 'select-select-variation'
                                                : ''
                                        }`}
                                        onClick={() => handleAttributeSelection(attribute.name, option)}
                                    >
                                        <p className='quick-view-atribute-option-name'>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default QuickViewVariations;












// import React, { useEffect, useState, useMemo } from 'react';
// import './QuickViewVariations.css';
// import { url } from '../../../utils/api';

// const QuickViewVariations = ({ default_uid, attributes, productData, variations, onChangeVar }) => {
//     const [selectedAttributes, setSelectedAttributes] = useState({});
//     const [matchedUid, setMatchedUid] = useState(null);

//     const isSimpleProduct = productData && productData?.attributes?.every(attr => attr.options.length === 1);

//     // Memoize the variation matching logic to avoid recalculating on every render
//     const findMatchingVariation = useMemo(() => {
//         return (updatedAttributes) => {
//             return variations.find((variation) =>
//                 variation.attributes.every((attr) => {
//                     const selectedOption = updatedAttributes[attr.name];
//                     return selectedOption?.value === attr.options?.[0]?.value;
//                 })
//             );
//         };
//     }, [variations]);

//     // Handle attribute selection
//     const handleAttributeSelection = (attributeName, option) => {
//         setSelectedAttributes((prev) => {
//             const updatedAttributes = { ...prev, [attributeName]: option };

//             const matchingVariation = findMatchingVariation(updatedAttributes);

//             if (matchingVariation && matchingVariation.uid !== matchedUid) {
//                 setMatchedUid(matchingVariation.uid);
//             } else if (!matchingVariation) {
//                 setMatchedUid(null); // No match found
//             }

//             return updatedAttributes;
//         });
//     };

//     useEffect(() => {
//         // Initialize the selected attributes and UID
//         if (variations && default_uid) {
//             const defaultVariation = variations.find((v) => v.uid === default_uid);
//             if (defaultVariation) {
//                 const initialAttributes = defaultVariation.attributes.reduce((acc, attr) => {
//                     acc[attr.name] = attr.options[0];
//                     return acc;
//                 }, {});
//                 setSelectedAttributes(initialAttributes);
//                 setMatchedUid(default_uid);
//                 return;
//             }
//         }

//         if (productData) {
//             const initialAttributes = productData?.attributes?.reduce((acc, attr) => {
//                 acc[attr.name] = attr.options[0]; // Select the first option for each attribute
//                 return acc;
//             }, {});
//             setSelectedAttributes(initialAttributes);
//             setMatchedUid(isSimpleProduct ? productData.uid : null);
//         }
//     }, [default_uid, productData, variations, isSimpleProduct]);

//     useEffect(() => {
//         // Call onChangeVar whenever matchedUid changes
//         onChangeVar(matchedUid);
//     }, [matchedUid, onChangeVar]);

//     return (
//         <div className='quick-view-attributes-main'>
//             {attributes?.map((attribute) => (
//                 <div className='attributes-types' key={attribute.name}>
//                     {attribute.type === 'color' && (
//                         <div className='attribute-type'>
//                             <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
//                             <div className='attribute-variations'>
//                                 {attribute.options.map((option) => (
//                                     <div
//                                         key={option.value}
//                                         className={`attribute-single-color ${
//                                             selectedAttributes[attribute.name]?.value === option.value ? 'selected' : ''
//                                         }`}
//                                         onClick={() => handleAttributeSelection(attribute.name, option)}
//                                     >
//                                         <div className='attribute-color-variation-box' style={{ backgroundColor: option.value }}></div>
//                                         <p className='quick-view-atribute-option-name'>{option.name}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {attribute.type === 'image' && (
//                         <div className='attribute-type'>
//                             <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
//                             <div className='attribute-variations'>
//                                 {attribute.options.map((option) => (
//                                     <div
//                                         key={option.value}
//                                         className={`attribute-image-type ${
//                                             selectedAttributes[attribute.name]?.value === option?.value
//                                                 ? 'active-selected-image-variation'
//                                                 : ''
//                                         }`}
//                                         onClick={() => handleAttributeSelection(attribute.name, option)}
//                                     >
//                                         <div className='variation-image-div'>
//                                             <img src={`${url}${option.value}`} alt={option.name} />
//                                         </div>
//                                         <p className='quick-view-atribute-option-name'>{option.name}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {attribute.type === 'select' && (
//                         <div className='attribute-type'>
//                             <h3 className='quick-view-attribute-heading-1'>{attribute.name}</h3>
//                             <div className='attribute-variations'>
//                                 {attribute.options.map((option) => (
//                                     <div
//                                         key={option.value}
//                                         className={`select-type-attribute ${
//                                             selectedAttributes[attribute.name]?.value === option.value
//                                                 ? 'select-select-variation'
//                                                 : ''
//                                         }`}
//                                         onClick={() => handleAttributeSelection(attribute.name, option)}
//                                     >
//                                         <p className='quick-view-atribute-option-name'>{option.name}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             ))}
//             {matchedUid && <p className='matched-uid'>Matched Variation UID: {matchedUid}</p>}
//         </div>
//     );
// };

// export default QuickViewVariations;

