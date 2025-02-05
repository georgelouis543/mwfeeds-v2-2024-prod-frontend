import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Login from "./components/auth/Login";
import DashLayout from "./components/dash/DashLayout";
import Unauthorized from "./components/auth/Unauthorized";
import HomePage from "./components/features/home/HomePage";
import RssPlaygroundCreate from "./components/features/rss_playground/create/RssPlaygroundCreate";
import HtmltoRssCreate from "./components/features/html_to_rss/create/HtmltoRssCreate";
import RssPlaygroundEdit from "./components/features/rss_playground/edit/RssPlaygroundCreate";
import HtmltoRssEdit from "./components/features/html_to_rss/edit/HtmltoRssEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Public Routes Start */}
        <Route index element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Public Routes End */}

        {/* Protected Routes Start */}
        <Route path="dash" element={<DashLayout />}>

          <Route index element={<HomePage />} />
          
          <Route path="html-to-rss">
            <Route path="create" element={<HtmltoRssCreate />} />
            <Route path="edit" element={<HtmltoRssEdit />} />
          </Route>

          <Route path="rss-playground">
            <Route path="create" element={<RssPlaygroundCreate />} />
            <Route path="edit" element={<RssPlaygroundEdit />} />
          </Route>
          
        </Route>
        {/* Protected Routes End */}

      </Route>
    </Routes>
  )
}

export default App
