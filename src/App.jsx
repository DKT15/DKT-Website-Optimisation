import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Home";
import RecentWork from "./pages/RecentWork";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="recentwork" element={<RecentWork />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
