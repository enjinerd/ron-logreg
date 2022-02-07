import { Home, NotFound, Login, Register } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
