import { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  const fetchEmployees = async () => {
    const res = await axios.get('/employees', {
      params: { search },
    });
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, [search]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {employees.map((emp) => (
          <li key={emp._id} className="mb-2 p-2 border rounded bg-white shadow">
            <Link to={`/employee/${emp._id}`} className="text-blue-600 hover:underline">
              {emp.name} - {emp.department}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
