import React, { useState } from "react";
import "./WriteReview.css";
import RatingReview from "../starRating/starRating";
import { IoImages } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import loader from "../../../Assets/Loader-animations/loader-check-two.gif"
import thumb from "../../../Assets/thumbs-up.png"
import { url } from "../../../utils/api";


export default function WriteReview({ product_id, product_name, product_permalink }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const [images, setImages] = useState([]);
    
    const [successPopup, setSuccessPopup] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showReviewSection,setReviewSectionState]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object to send data with files
        const formData = new FormData();
        formData.append("reviewer", name);
        formData.append("reviewer_email", email);
        formData.append("review", review);
        formData.append("rating", rating);
        formData.append("product_id", product_id);
        formData.append("product_name", product_name);
        formData.append("product_permalink", product_permalink);
        formData.append("verified", false);

        // Append each selected image file to FormData
        images.forEach(image => {
            formData.append("images", image); // 'images' is the key on the backend
        });

        try {
            setLoading(true);
            const response = await fetch(`${url}/api/v1/reviews/add`, {
                method: "POST",
                body: formData, // Send the form data
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Review Submitted Successfully:', result);
                setLoading(false);
                setSuccessPopup(true);
                setName("")
                setEmail("")
                setReview("")
                setRating(1)
                // Handle success (e.g., show a success message, clear form)
            } else {
                const error = await response.json();
                console.error('Error:', error.message);
                setLoading(false);
                alert("Something Went Wrong");
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error sending review:', error);
            setLoading(false);
            alert("Something Went Wrong");
        }
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length + images.length <= 5) { // Ensure no more than 5 images
            const newImages = [...images];
            for (let i = 0; i < files.length; i++) {
                newImages.push(files[i]); // Store file references
            }
            setImages(newImages); // Update the images state
        } else {
            alert("You can upload up to 5 images only.");
        }
    };

    // Function to handle removing an image from the preview
    const handleImageRemove = (index) => {
        const newImages = images.filter((_, i) => i !== index); // Remove the image at the specified index
        setImages(newImages); // Update the images state
    };



    return (
       <div className="write_review_main">
         {!showReviewSection ? <button onClick={()=>{setReviewSectionState(true)}} className="write_review_btn">Write a Review</button>
        : <div className={`write_review ${showReviewSection ? "open" : ""}`}>
            
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmit}>

                <div className="write_review_left">
                    <div className="form-group">
                        <p className="review_add_label">Give Score</p>
                        <RatingReview rating={rating} setRating={setRating} />
                    </div>
                    <div className="form-group">
                        <label className="review_add_label" htmlFor="review">Write Review</label>
                        <textarea
                            id="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                            style={{ height: "165px" }}
                        ></textarea>
                    </div>
                </div>

                <div className="write_review_right">
                    <div className="form-group">
                        <label className="review_add_label" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="review_add_label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Image Upload Section */}
                    <div className="form-group">
                        <label className="review_add_label" htmlFor="images">Upload Images (up to 5)</label>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <div className="image-preview-container">
                                {images.map((image, index) => (
                                    <div key={index} className="image-preview">
                                        <img
                                            src={URL.createObjectURL(image)} // Create URL for preview
                                            alt={`Preview ${index + 1}`}
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <button
                                            type="button"
                                            className="remove-image-button"
                                            onClick={() => handleImageRemove(index)}
                                        >
                                            <RiCloseLine />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <input
                                name="images"
                                type="file"
                                id="images"
                                accept="image/*"
                                multiple // Allows for multiple file selection
                                onChange={handleImageChange} // Handle image selection
                                className="image_upload_review"
                                hidden // Hide the default file input element
                            />
                            <label htmlFor="images" className="image-upload-label">
                                <p className="icon"> <IoImages /> </p>
                                <p className="text">{images.length > 0 ? "Add More" : "Add Images"}</p>
                            </label>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: "flex", justifyContent: "flex-end" }}>
                        <button className="button_add_label" type="submit">Submit Review</button>
                    </div>
                </div>

            </form>

            {loading && <div className="review_loader">
                <img src={loader} alt="" />
                <p>Submitting Review</p>
                <p>Please Wait...</p>
            </div>
            }
            {successPopup && <div className="review_success">
                <div className="success_popup_review">
                    <img src={thumb} alt="" srcset="" />
                    <h3>FANTASTIC! THANK YOU FOR SUBMITTING A REVIEW</h3>
                    <p>Your review was sent successfully and is now waiting for our staff to publish it.</p>
                    <button
                        type="button"
                        className="remove-success-button"
                        onClick={() => setSuccessPopup(false)}
                    >
                        <RiCloseLine style={{ fontSize: "15px !important" }} />
                    </button>
                </div>
            </div>}
        </div>}
       </div>
    );
}
