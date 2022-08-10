import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Jobs from "./components/pages/Jobs";
import NotFoundPage from "./components/pages/NotFoundPage";

const routing = function createRouting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs />}>
          {/* <Route path=":jobId" element={<JobDetail />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        </Route>
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;
