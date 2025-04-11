import { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get('/projects');
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Project Management</h2>
      <ul>
        {projects.map((proj) => (
          <li key={proj._id} className="mb-2 p-2 border rounded bg-white shadow">
            <h3 className="font-semibold">{proj.name}</h3>
            <p>{proj.description}</p>
            <p>Status: <span className="text-sm bg-gray-200 px-2 py-1 rounded">{proj.status}</span></p>
            <p>Assigned To: {proj.assignedTo?.map(e => e.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManagement;
