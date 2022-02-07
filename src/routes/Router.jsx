import { Home, NotFound } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
