import React from "react";
import "./RatingFilter.css"
import { useState } from "react";

function Rating(props) {
	const { rating, caption, onClick } = props;
	const [selectedRating, setSelectedRating] = useState(null);

	const handleRating = (selectedRating) => {
		setSelectedRating(selectedRating);
		onClick(selectedRating);
	  };

	return (
		<div className="ratingg">
			<span
			className={selectedRating >= 1 ? 'selected' : ''}
			onClick={() => handleRating(1)}
			>
				<i
					className={
						rating >= 1
							? "fa fa-star"
							: rating >= 0.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span
			className={selectedRating >= 2 ? 'selected' : ''}
			onClick={() => handleRating(2)}
			>
				<i
					className={
						rating >= 2
							? "fa fa-star"
							: rating >= 1.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span
			className={selectedRating >= 3 ? 'selected' : ''}
			onClick={() => handleRating(3)}
			>
				<i
					className={
						rating >= 3
							? "fa fa-star"
							: rating >= 2.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span
			className={selectedRating >= 4 ? 'selected' : ''}
			onClick={() => handleRating(4)}
			>
				<i
					className={
						rating >= 4
							? "fa fa-star"
							: rating >= 3.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span
			className={selectedRating >= 5 ? 'selected' : ''}
			onClick={() => handleRating(5)}
			>
				<i
					className={
						rating >= 5
							? "fa fa-star"
							: rating >= 4.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
            
			{caption ? (
				<span>{caption}</span>
			) : (
				<span></span>
			)}
		</div>
	);
}

export default Rating;
