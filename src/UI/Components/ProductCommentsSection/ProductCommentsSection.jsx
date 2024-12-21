// import React, { useState, useEffect, useRef } from 'react';
// import './ProductCommentsSection.css';
// import arrowDown from '../../../Assets/icons/arrow-down.png';
// import Comments from '../Comments/Comments';

// const ProductCommentsSection = ({ data }) => {
//     const [isClicked, setIsClicked] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('Most Relevant');
//     const dropdownRef = useRef(null);
//     const selectRef = useRef(null);

//     const handleClicked = () => {
//         setIsClicked(!isClicked);
//     };

//     const handleSelect = (option) => {
//         setSelectedOption(option);
//         setIsClicked(false); 
//     };

//     // Close the dropdown if clicking outside
//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target) &&
//                 selectRef.current &&
//                 !selectRef.current.contains(event.target)
//             ) {
//                 setIsClicked(false);
//             }
//         };

//         if (isClicked) {
//             document.addEventListener('click', handleOutsideClick);
//         } else {
//             document.removeEventListener('click', handleOutsideClick);
//         }

//         return () => {
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, [isClicked]);

//     return (
//         <div className="product-comment-section-main-container">
//             <div className="sort-by-related">
//                 <p>Showing 1-3 of 170 reviews</p>
//                 <div className="input-select-container">
//                     <fieldset className="select-container" ref={selectRef}>
//                         <legend htmlFor="sort-by" className="select-label">
//                             Sort by
//                         </legend>
//                         <span onClick={handleClicked}>
//                             <p>{selectedOption}</p> {/* Display selected option */}
//                             <img
//                                 src={arrowDown}
//                                 alt="arrow down"
//                                 className={`${isClicked ? 'rotate-input-arrow-down' : 'not-rotated'}`}
//                             />
//                         </span>
//                     </fieldset>
//                     <div
//                         ref={dropdownRef}
//                         className={`related-dropdown ${isClicked ? 'show-related-dropdown' : ''}`}
//                     >
//                         <p onClick={() => handleSelect('Most Relevant')}>Most Relevant</p>
//                         <p onClick={() => handleSelect('Most Recent')}>Most Recent</p>
//                         <p onClick={() => handleSelect('Verified Reviews')}>Verified Reviews</p>
//                     </div>
//                 </div>
//             </div>
            // <div className="comments-main-container">
            //     <Comments data={data} order={selectedOption} />
            // </div>
//         </div>
//     );
// };

// export default ProductCommentsSection;





import React, { useState, useEffect, useRef } from 'react';
import './ProductCommentsSection.css';
import arrowDown from '../../../Assets/icons/arrow-down.png';
import Comments from '../Comments/Comments';

const ProductCommentsSection = ({ data }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Most Relevant'); // State to track the selected option
    const [sortedData, setSortedData] = useState(data); // State to store sorted reviews
    const dropdownRef = useRef(null); // To reference the dropdown
    const selectRef = useRef(null); // To reference the select container

    const handleClicked = () => {
        setIsClicked(!isClicked);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);  // Set the selected option
        setIsClicked(false);  // Close the dropdown after selection
    };

    const sortReviews = (option) => {
        let sortedReviews;
        switch (option) {
            case 'Most Relevant':
                // Sort by rating (highest first)
                sortedReviews = [...data].sort((a, b) => b.rating - a.rating);
                break;
            case 'Most Recent':
                // Sort by date (most recent first)
                sortedReviews = [...data].sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
                break;
            case 'Verified Reviews':
                // Filter for only verified reviews and sort by rating (highest first) or date (if needed)
                sortedReviews = [...data].filter((item) => item.verified).sort((a, b) => b.rating - a.rating);
                break;
            default:
                sortedReviews = data; // No sorting
                break;
        }
        setSortedData(sortedReviews); // Update the state with sorted data
    };
    

    // Re-sort the reviews when the selected option changes
    useEffect(() => {
        sortReviews(selectedOption);
    }, [selectedOption, data]); // Trigger when selectedOption or data changes

    // Close the dropdown if clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsClicked(false);
            }
        };

        if (isClicked) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isClicked]);

    return (
        <div className="product-comment-section-main-container">
            <div className="sort-by-related">
                <p>Showing {sortedData?.length} {sortedData?.length > 1 ? "reviews":"review"}</p>
                <div className="input-select-container">
                    <fieldset className="select-container" ref={selectRef}>
                        <legend htmlFor="sort-by" className="select-label">
                            Sort by
                        </legend>
                        <span onClick={handleClicked}>
                            <p>{selectedOption}</p> {/* Display selected option */}
                            <img
                                src={arrowDown}
                                alt="arrow down"
                                className={`${isClicked ? 'rotate-input-arrow-down' : 'not-rotated'}`}
                            />
                        </span>
                    </fieldset>
                    <div
                        ref={dropdownRef}
                        className={`related-dropdown ${isClicked ? 'show-related-dropdown' : ''}`}
                    >
                        <p onClick={() => handleSelect('Most Relevant')}>Most Relevant</p>
                        <p onClick={() => handleSelect('Most Recent')}>Most Recent</p>
                        <p onClick={() => handleSelect('Verified Reviews')}>Verified Reviews</p>
                    </div>
                </div>
            </div>
            <div className="comments-main-container">
                <Comments data={sortedData} order={selectedOption} />
            </div>
        </div>
    );
};

export default ProductCommentsSection;
