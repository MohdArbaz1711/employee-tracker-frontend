import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <img
        src={`http://localhost:5000/uploads/${employee.picture || 'default-avatar.jpg'}`}
        alt={employee.name}
        className="w-20 h-20 rounded-full mb-2"
      />
      <h3 className="font-semibold">{employee.name}</h3>
      <p>{employee.department}</p>
      <Link
        to={`/employee/${employee._id}`}
        className="text-blue-500 underline text-sm mt-2 inline-block"
      >
        View Profile
      </Link>
    </div>
  );
};

export default EmployeeCard;
