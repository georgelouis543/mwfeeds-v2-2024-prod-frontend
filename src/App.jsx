import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/auth/Login";
import DashLayout from "./components/dash/DashLayout";
import Unauthorized from "./components/auth/Unauthorized";
import HomePage from "./components/features/home/HomePage";
import RssPlayground from "./components/features/rss_playground/RssPlayground";

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
          <Route path="rss-playground" element={<RssPlayground />} />
          
        </Route>
        {/* Protected Routes End */}

      </Route>
    </Routes>
  )
}

export default App
