import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;


// children: Refers to any content/components passed inside
// In this case, children is the <Dashboard />