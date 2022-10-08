import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import EditDashboard from "./EditDashboard";
import Employee from "./Employee";
import EmployeeCreate from "./EmployeeCreate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/employee">Employee Deatils</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit" element={<EditDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/create" element={<EmployeeCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
