import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/axiosInstance';

const EmployeeProfile = () => {
  const { id } = useParams();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    const fetchEmp = async () => {
      const res = await axios.get(`/employees/${id}`);
      setEmp(res.data);
    };
    fetchEmp();
  }, [id]);

  if (!emp) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{emp.name}</h2>
      <p>Email: {emp.email}</p>
      <p>Department: {emp.department}</p>
      <p>Role: {emp.role}</p>
      {emp.picture && (
        <img src={`http://localhost:5000/uploads/${emp.picture}`} alt="Profile" className="mt-4 w-32 h-32 rounded-full" />
      )}
    </div>
  );
};

export default EmployeeProfile;
