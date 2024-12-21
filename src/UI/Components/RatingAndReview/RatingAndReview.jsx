import React, { useState, useEffect } from 'react';
import './RatingAndReview.css';
import { Link } from 'react-router-dom';
import starIcon from '../../../Assets/icons/large-star-blue.png';
import CustomerPhotos from '../CustomerPhotos/CustomerPhotos';
import RatingReview from '../starRating/starRating';
import { FaStar } from "react-icons/fa";
import { transformReviewData ,extractImagesFromReviews} from '../../../utils/api';
import error from "../../../Assets/error.png"

const RatingAndReview = ({ rating, data }) => {

    const [ratingDistribution, setRatingDistribution] = useState([
        { count: 5, rev: 928 },
        { count: 4, rev: 392 },
        { count: 3, rev: 170 },
        { count: 2, rev: 98 },
        { count: 1, rev: 117 }
    ]);

    const maxValue = data ? data.length :1;

    const [customerImages,setCustomerImages] = useState([])

  
    useEffect(() => {
        if (data) {
            console.log("Data updated: ", data);
            setRatingDistribution(transformReviewData(data));
            setCustomerImages(extractImagesFromReviews(data));
        }
    }, [data]); 

    return (
        <div className='rating-and-customers-photos'>
            <div className='rating-and-review-main-container'>
                <h3>Rating & Reviews</h3>
                <p>Our <Link>Community Guidelines </Link> help customers write honest reviews.</p>
                <div className='rating-and-review-div'>
                    <div className='rating-div'>
                        <h3>{rating}</h3>
                        <span>
                            <RatingReview disabled={true} rating={rating} />
                        </span>
                        <p>1707 Reviews</p>
                    </div>
                    <div className='rating-progress-bar-div'>
                        {data && ratingDistribution.map((item, index) => {
                            const progress = (item.rev / maxValue) * 100;
                            return (
                                <div key={index} className='progress-bar-div'>
                                    <div className='rating-count-div'>
                                        <p>{item.count}</p>
                                    </div>
                                    <FaStar
                                        style={{
                                            color: "#50BED3",
                                            fontSize: "18px"
                                        }}
                                    />
                                    <div className='progress-bar-container'>
                                        <div className='progress-bar' style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Write Review Form */}

            <div className='customer-images-section'>
                <h3>Customer Photos</h3>
                {data?.length> 0 ? <CustomerPhotos images={customerImages} /> : 
                
               <div className='customer-images-section-not'>

<img src={error} />
               </div>
                
                
                }
                
            </div>
        </div>
    );
};

export default RatingAndReview;
