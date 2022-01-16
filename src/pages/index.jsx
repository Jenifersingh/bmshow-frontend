import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Base } from "../components/Base";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Theater } from "./Theater";
import { Seat } from "./Seat";
import { Auth } from "./Auth";
import { Context } from "../store/context";

export const Pages = () => {
  const { state } = useContext(Context);

  return (
    <Base enabled={true}>
      {/* <Home /> */}
      {/* <Movie /> */}
      {/* <Theater /> */}

      {state.openAuth && <Auth />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />

        <Route path="/theater" element={<Theater />} />

        <Route path="/seat" element={<Seat />} />
      </Routes>
    </Base>
  );
};
