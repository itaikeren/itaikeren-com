import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";

import MDXWrapper from "./components/mdx-wrapper";
import Layout from "./layout";
import Home from "./pages/home";
import SlekNote from "./pages/notes/slek.mdx";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="notes/slek"
            element={
              <MDXWrapper>
                <SlekNote />
              </MDXWrapper>
            }
          />
        </Route>
      </Routes>
      <SpeedInsights />
    </>
  );
}
