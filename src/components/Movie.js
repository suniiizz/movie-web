import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <MovieBox>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </MovieBox>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MovieBox = styled.div``;

export default Movie;
