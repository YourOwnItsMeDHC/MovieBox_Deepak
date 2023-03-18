import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { MovieInformation, Movie, Actors, Profile, NavBar } from "./";
import useStyle from "./style";

const App = () => {
  //  Calling makeStyle for styling
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Movie />} />
          <Route exact path="/movies" element={<MovieInformation />} />
          <Route exact path="/movies/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
