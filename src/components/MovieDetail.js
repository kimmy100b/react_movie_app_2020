import React from "react";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";
import "./MovieDetail.css";

function MovieDetail({ id, year, title, runtime, summary, description, poster, genres, rating }) {
  return (
    <section className="movie-detail">
      <div className="detail">
        <img src={poster} alt={title} title={title} />
        <div className="detail-content">
          <h1 className="detail-title">{title}</h1>
          <p className="detail-title-sm">
            {title}, {year}
          </p>
          <div className="detail-rating">
            <h4 class="label">평점</h4>
            <StarRatingComponent name="rating" class="rating" starCount={5} value={rating / 2} starColor="#FF2E3A" emptyStarColor="#737373" />
            <h3 class="rating-value">{rating}</h3>
          </div>
          <div className="detail-genres">
            <h4 className="label"> 장르 </h4>
            {genres.map((genre, index) => (
              <p key={index} className="genres-genre">
                {genre} &nbsp;
              </p>
            ))}
          </div>
          <div className="detail-runtime">
            <h4 className="label"> 상영시간 </h4>
            <p>{runtime} 분 </p>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <h4 className="label"> 줄거리</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
