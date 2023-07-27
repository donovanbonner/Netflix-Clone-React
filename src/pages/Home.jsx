import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

export const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Popular Movies"
        fetchURL={requests.requestPopularMovies}
      />
      <Row
        rowID="2"
        title="Popular TV Shows"
        fetchURL={requests.requestPopularTV}
      />
      <Row
        rowID="3"
        title="Trending Movies"
        fetchURL={requests.requestTrendingMovies}
      />
      <Row
        rowID="4"
        title="Trending TV Shows"
        fetchURL={requests.requestTrendingTV}
      />
      <Row
        rowID="5"
        title="Upcoming Movies"
        fetchURL={requests.requestUpcomingMovies}
      />
    </>
  );
};

export default Home;
