import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
// import { Home } from "../components/pages/Home.jsx";
// import { Destination } from "../components/pages/Destination.jsx";
// import { Crew } from "../components/pages/Crew.jsx";
// import { Technology } from "../components/pages/Technology.jsx";
import { AnimatePresence } from "framer-motion";
const Home = React.lazy(() => import("../components/pages/Home.jsx"));
const Destination = React.lazy(() =>
  import("../components/pages/Destination.jsx")
);
const Crew = React.lazy(() => import("../components/pages/Crew.jsx"));
const Technology = React.lazy(() =>
  import("../components/pages/Technology.jsx")
);

export const AnimatedRoutes = () => {
  document.title = "Space Tourism";
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/destination"
          element={
            <React.Suspense fallback={<>...</>}>
              <Destination />
            </React.Suspense>
          }
        />
        <Route
          path="/crew"
          element={
            <React.Suspense fallback={<>...</>}>
              <Crew />
            </React.Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <React.Suspense fallback={<>...</>}>
              <Technology />
            </React.Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
