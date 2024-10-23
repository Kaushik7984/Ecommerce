import React, { useState } from "react";
import profilePng from "../../images/Profile.png";
import './ReviewCard.css';
import Rating from '@mui/material/Rating';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongComment = review.comment.length > 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating
        name="read-only"
        value={review.rating}
        precision={0.5}
        readOnly
        size={window.innerWidth < 600 ? "small" : "medium"}
        // style={{ color: "tomato" }}
      />
      <span className="reviewCardComment">
        {isExpanded || !isLongComment ? review.comment : `${review.comment.slice(0, 100)}...`}
      </span>
      {isLongComment && (
        <button className="viewMoreButton" onClick={toggleExpand}>
          {isExpanded ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
