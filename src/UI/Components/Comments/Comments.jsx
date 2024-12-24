import React from 'react'
import './Comments.css';
import productOne from '../../../Assets/images/product-one.png'
import productTwo from '../../../Assets/images/product-two.png'
import productThree from '../../../Assets/images/product-three.png'
import filledStar from '../../../Assets/icons/large-star-blue.png';
import thumbUp from '../../../Assets/icons/Thumbs up.png'
import RatingReview from '../starRating/starRating';
import { url } from '../../../utils/api';
import { formatTime } from '../../../utils/api';

const Comments = ({ data ,order }) => {
    const mobileCommentData = [
        {
            name: 'Pamela', date: '23/10/2024', state: 'Duxbury, MA', verified: 'Verified',
            starIcon: [
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
            ],
            comment: `
                This furniture has barely made it into a third season. 
                Despite covering it during the winter, it has completely fallen apart....`,
            productImgs: [
                { img: productOne },
                { img: productTwo },
                { img: productThree },
            ]
        },
        {
            name: 'Pamela', date: '23/10/2024', state: 'Duxbury, MA', verified: 'Verified',
            starIcon: [
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
            ],
            comment: `
                This furniture has barely made it into a third season. 
                Despite covering it during the winter, it has completely fallen apart....
        `, productImgs: [
                { img: productOne },
                { img: productTwo },
                { img: productThree },
            ]
        },
        {
            name: 'Pamela', date: '23/10/2024', state: 'Duxbury, MA', verified: 'Verified',
            starIcon: [
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
                { star: filledStar },
            ],
            comment: `
                This furniture has barely made it into a third season. 
                Despite covering it during the winter, it has completely fallen apart....
        `, productImgs: [
                { img: productOne },
                { img: productTwo },
                { img: productThree },
            ]
        }
    ]
    

    return (
        <div >
            {data?.map((item, index) => {
                return <div className='comments-container'>
                    <div className='user-details'>
                        <div className='user-name-and-detail'>
                            <h3>{item.reviewer}</h3>
                            <p>{"Pennesylvania"}</p>
                            <p>{item.verified ? "Verified" : "Not Verifiled"}</p>
                        </div>
                        <div className="cemmented-product-images">
                            {item?.images &&
                                item.images.map((image, index) => (
                                    <img key={index} src={`${url}${image}`} alt={`img-${index}`} />
                                ))}
                        </div>

                    </div>
                    <div key={index} className='comment-section'>
                        <div className='stars-and-date'>
                            <RatingReview disabled={true} rating={item.rating} />
                            <p>{formatTime("Pennsylvania",item.date_created)}</p>
                        </div>
                        <div className='comment-and-see-more'>
                            <p>{item.review}</p>
                            {/* <Link>{item.showLess}</Link> */}
                        </div>
                    </div>
                    <div className='feedback'>
                        <button>
                            <img src={thumbUp} alt='thhumb' />
                            Helpful  0
                        </button>
                    </div>
                </div>
            })}


            <div className='mobile-comments'>
                {mobileCommentData.map((item, index) => (
                    <div key={index} className='mobile-single-comment'>
                        <div className='mobile-comment-name-and-date'>
                            <h3>{item.name}</h3>
                            <p>{item.date}</p>
                        </div>
                        <h3 className='mobile-comment-state'>{item.state}</h3>
                        <div className='mobile-comment-status-and-rating'>
                            <p>{item.verified}</p>
                            <span>
                                {item.starIcon.map((item, ind) => (
                                    <img key={ind} src={item.star} alt='star' />
                                ))}
                            </span>
                        </div>
                        <p className='mobile-comment'>{item.comment}</p>
                        <button className='mobile-comment-show-more-btn'>show more</button>
                        <div className='mobile-comment-images-and-feedback'>
                            <div className='mobile-single-comment-images'>
                                {item.productImgs.map((item, index) => (
                                    <img src={item.img} alt='product-image' />
                                ))}
                            </div>
                            <button className='mobile-comment-feedback'>
                                <img src={thumbUp} alt='thhumb' />
                                <p>Helpful  0</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments
