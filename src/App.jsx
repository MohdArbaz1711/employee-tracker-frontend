import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';
import ProjectManagement from './pages/ProjectManagement';
import Navbar from './components/Navbar';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        <Route path="/projects" element={<ProjectManagement />} />
      </Routes>
    </>
  );
};

export default App;
