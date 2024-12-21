import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingReview({ rating, setRating, disabled,size }) {
  const [hoverRating, setHoverRating] = useState(null);

  const handleMouseEnter = (event, star) => {
    if (disabled) return; // Prevent hover effect when disabled

    const rect = event.target.getBoundingClientRect();
    const hoverPosition = event.clientX - rect.left; // Get the hover position within the star
    const starWidth = rect.width;
    const fraction = hoverPosition / starWidth; // Calculate the fractional hover value
    const roundedFraction = Math.round(fraction * 2) / 2; // Round to nearest half (0.0, 0.5, 1.0)
    setHoverRating(star - 1 + roundedFraction);
  };

  const handleMouseLeave = () => {
    if (disabled) return; // Prevent hover effect when disabled
    setHoverRating(null);
  };

  const handleClick = (event, star) => {
    if (disabled) return; // Prevent click when disabled

    const rect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left; // Get the click position within the star
    const starWidth = rect.width;
    const fraction = clickPosition / starWidth; // Calculate the fractional value
    const preciseRating = star - 1 + fraction;
    const roundedRating = Math.round(preciseRating * 2) / 2; // Round to the nearest 0.5
    setRating(roundedRating);
  };

  return (
    <div style={{ display: "flex" }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fillLevel = hoverRating
          ? Math.min(1, Math.max(0, hoverRating - (star - 1)))
          : Math.min(1, Math.max(0, rating - (star - 1)));

        return (
          <span
            key={star}
            className="star"
            style={{
              position: "relative",
              cursor: disabled ? "not-allowed" : "pointer",
              fontSize: size? size : `25px`,
            }}
            onClick={(e) => handleClick(e, star)}
            onMouseEnter={(e) => handleMouseEnter(e, star)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Empty star */}
            <FaStar
              style={{
                color: "#d4d4d4",
              }}
            />
            {/* Filled star */}
            <FaStar
              style={{
                color: "#50BED3",
                position: "absolute",
                top: 0,
                left: 0,
                clipPath: `inset(0 ${100 - fillLevel * 100}% 0 0)`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

export default RatingReview;
