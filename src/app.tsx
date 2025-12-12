import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <SpeedInsights />
    </>
  );
}
