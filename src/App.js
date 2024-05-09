import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Event from "./pages/Event/Event";
import Database from "./pages/database/Database";
import PlanJob from "./pages/planjob/PlanJob";
import Casting from "./pages/casting/Casting";
import Calender from "./pages/calender/Calender";
import Payments from "./pages/payments/Payments";
import Invoices from "./pages/invoices/Invoices";
import Report from "./pages/Report/Report";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Database />} />
        <Route path="/event" element={<Event />} />
        <Route path="/casting" element={<Casting />} />
        <Route path="/planjob" element={<PlanJob />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
