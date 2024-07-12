import Hero from "../hero/hero";
import React from "react";

const Home = ({movies}) => {
  return (
    <Hero movies={movies}/>
  )
}


export default Home;