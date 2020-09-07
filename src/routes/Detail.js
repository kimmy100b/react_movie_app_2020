import React from "react";
import axios from "axios";
import MovieDetail from "../components/MovieDetail";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <MovieDetail
          key={location.state.id}
          id={location.state.id}
          year={location.state.year}
          title={location.state.title}
          runtime={location.state.runtime}
          summary={location.state.summary}
          description={location.state.description}
          poster={location.state.poster}
          genres={location.state.genres}
          rating={location.state.rating}
        />
      );
      // return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
