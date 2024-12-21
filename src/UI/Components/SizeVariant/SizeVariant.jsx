import React, { useState, useEffect } from 'react';
import './SizeVariant.css';
import { url } from '../../../utils/api';
import { useProductPage } from '../../../context/ProductPageContext/productPageContext';

const SizeVariant = ({ 
    productType,
    attributes, 
    productData,
    selectedColor,
    handleSelectColor,
    handleSelectVariation,
    handleSelectedVariationData,
}) => {
    const { selectedVariationData, setSelectedVariationData } = useProductPage();
    const [colorVariation, setColorVariation] = useState();
    const [imageVariation, setImageVariation] = useState(0);
    const [selectedImageName, setSelectedImageName] = useState();
    const [selectedColorName, setSelectedColorName] = useState();
    const [selectedSelectAttrs, setSelectedSelectAttrs] = useState({}); // For multiple select attributes

    useEffect(() => {
        if (attributes && attributes.length > 0) {
            const defaultSelections = {};

            if (productType === 'simple') {
                // Automatically select all variations for simple products
                attributes.forEach(attr => {
                    defaultSelections[attr.name] = attr.options?.[0]?.value;
                });
                
                setSelectedSelectAttrs(defaultSelections); // Set all attributes selected
                handleSelectedVariationData(productData?.[0]?.uid); // Notify parent
                setSelectedVariationData(productData?.[0]); // Set the first variation as default
            } else {
                if (selectedVariationData) {
                    // Initialize selected attributes from selectedVariationData
                    selectedVariationData.attributes.forEach(attr => {
                        defaultSelections[attr.name] = attr.options?.[0]?.value;
                    });
                } else if (productData && productData.length > 0) {
                    // Fallback to the first variation in productData
                    productData[0].attributes.forEach(attr => {
                        defaultSelections[attr.name] = attr.options?.[0]?.value;
                    });

                    setSelectedVariationData(productData[0]); // Set the first variation in context
                    handleSelectedVariationData(productData[0].uid); // Notify parent
                }
            }

            setSelectedSelectAttrs(defaultSelections); // Initialize selected attributes
        }
    }, [attributes, productData, selectedVariationData, productType]);
    

    // Handle Image Selection
    const handleImageVariation = (attributeName,index, name,value) => {
        setImageVariation(index); // Update image variation
        setSelectedImageName(name); // Optionally store image name
        console.log(name, index, "Image variation selected");
    
        // Update selected attributes to include the selected image
        setSelectedSelectAttrs((prevState) => {
            const updatedAttrs = {
                ...prevState,
                [attributeName]: value, // Update selected value for the attribute
            };
            console.log(productData,"variations")
    
            // Now try to find the matching variation with all selected attributes
            const matchedVariation = productData.find((variation) => {
                return variation.attributes.every((attr) => {
                    const selectedValue = updatedAttrs[attr.name];
                    // Ensure you're comparing the value correctly based on the attribute type
                    console.log(updatedAttrs[attr.name],"atr nme")
                    return selectedValue === attr.options?.[0]?.value;
                });
            });
    
            if (matchedVariation) {
                console.log("Matched UID:", matchedVariation.uid);
                handleSelectedVariationData(matchedVariation.uid); // Pass the matched UID
                setSelectedVariationData(matchedVariation); // Set the context with matched variation
            } else {
                console.log("No matching variation found");
            }
    
            return updatedAttrs; // Update the selected attributes
        });
    };
    

    // Handle Color Selection
    const handleClickColor = (attributeName,value, name) => {
        setSelectedSelectAttrs((prevState) => {
            const updatedAttrs = {
                ...prevState,
                [attributeName]: value, // Update selected value for the attribute
            };
            console.log(productData,"variations")
    
            // Now try to find the matching variation with all selected attributes
            const matchedVariation = productData.find((variation) => {
                return variation.attributes.every((attr) => {
                    const selectedValue = updatedAttrs[attr.name];
                    // Ensure you're comparing the value correctly based on the attribute type
                    console.log(updatedAttrs[attr.name],"atr nme")
                    return selectedValue === attr.options?.[0]?.value;
                });
            });
    
            if (matchedVariation) {
                console.log("Matched UID:", matchedVariation.uid);
                handleSelectedVariationData(matchedVariation.uid); // Pass the matched UID
                setSelectedVariationData(matchedVariation); // Set the context with matched variation
            } else {
                console.log("No matching variation found");
            }
    
            return updatedAttrs; // Update the selected attributes
        });
        handleSelectColor(value); // Call the parent handler for color
        setSelectedColorName(name); // Update selected color name
    };

    // Handle Select Attribute Selection
    const handleSelectClick = (attributeName, value, name) => {
        setSelectedSelectAttrs((prevState) => {
            const updatedAttrs = {
                ...prevState,
                [attributeName]: value, // Update selected value for the attribute
            };
            console.log(productData,"variations")
    
            // Now try to find the matching variation with all selected attributes
            const matchedVariation = productData.find((variation) => {
                return variation.attributes.every((attr) => {
                    const selectedValue = updatedAttrs[attr.name];
                    // Ensure you're comparing the value correctly based on the attribute type
                    console.log(updatedAttrs[attr.name],"atr nme")
                    return selectedValue === attr.options?.[0]?.value;
                });
            });
    
            if (matchedVariation) {
                console.log("Matched UID:", matchedVariation.uid);
                handleSelectedVariationData(matchedVariation.uid); // Pass the matched UID
                setSelectedVariationData(matchedVariation); // Set the context with matched variation
            } else {
                console.log("No matching variation found");
            }
    
            return updatedAttrs; // Update the selected attributes
        });
    
        handleSelectVariation(value); // Pass the selected value to the parent if needed
        console.log(selectedSelectAttrs, "Selected aattr");
    };
    

    return (
        <>
            {attributes?.map((attribute) => (
                <div className="attributes-types" key={attribute.name}>
                    {attribute.type === 'color' ? (
                        <div className="attribute-type">
                            <h3 className="attribute-heading">
                                {selectedColorName ? selectedColorName : attribute.name}
                            </h3>
                            <div className="attribute-variations" style={{height:"60px"}}>
                            {attribute.options.map((option, index) => (
    <div className="attribute-single-color" key={index}>
        <div
            className={`attribute-color-variation-box ${
                selectedSelectAttrs[attribute.name] === option.value
                    ? 'selected'
                    : ''
            }`}
            onClick={() => handleClickColor(attribute.name, option.value, option.name)}
            style={{
                backgroundColor: option.value,
            }}
        ></div>
        <p className='quick-view-atribute-option-name'>{option.name}</p>
    </div>
))}

                            </div>
                        </div>
                    ) : attribute.type === 'image' ? (
                        <div className="attribute-type">
                            <h3 className="attribute-heading">{attribute.name}</h3>
                            <div className="attribute-variations">
                                {attribute.options.map((option, index) => (
                                    <div
                                        className={`attribute-image-type`}
                                        key={index}
                                        onClick={() => handleImageVariation(attribute.name, index, option.name, option.value)}
                                    >
                                        <div
                                            className={`variation-image-div ${
                                                imageVariation === index
                                                    ? 'active-selected-image-variation'
                                                    : ''
                                            }`}
                                        >
                                            <img src={`${url}${option.value}`} alt={option.name} />
                                        </div>
                                        <p>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : attribute.type === 'select' ? (
                        <div className="attribute-type">
                            <h3 className="attribute-heading">
                                {selectedSelectAttrs[attribute.name]
                                    ? attribute.options.find(option => option.value === selectedSelectAttrs[attribute.name])?.name
                                    : attribute.name}
                            </h3>
                            <div className="attribute-variations">
                                {attribute.options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`select-type-attribute ${
                                            selectedSelectAttrs[attribute.name] === option.value
                                                ? 'select-select-variation'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSelectClick(
                                                attribute.name,
                                                option.value,
                                                option.name
                                            )
                                        }
                                    >
                                        <p>{option.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </>
    );
};

export default SizeVariant;
