import React from "react";
import { Link } from "react-router-dom";
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
            {title},{year}
          </p>
          <h3 className="detail-rating"> 평점 : {rating}/10</h3>
          <h4 className="genres-label"> 장르</h4>
          <ul className="detail-genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres-genre">
                {genre}
              </li>
            ))}
          </ul>
          <div className="detail-description">
            <h4 className="description-label"> 줄거리</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="detail-date"></div>
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
