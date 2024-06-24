import JobsList from './JobsList';
import CompaniesList from './CompaniesList';
import Homepage from './Homepage'
import CompanyDetail from './CompanyDetail';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Route, Routes, Navigate } from 'react-router';
import '../css/AppRoutes.css'
import JobDetail from './JobDetail';
import UpdateProfile from './UpdateProfile';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes({ login, signup, setToken }) {
  return (
  <div className='AppRoutes'>
    <Routes>
        {/* Unprotected Routes */}
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpForm signup={signup}/>} />
        <Route path="/login" element={<LoginForm login={login} setToken={setToken}/>} />
        {/* Protected Routes */}
        <Route path="/companies" element={<ProtectedRoute><CompaniesList /></ProtectedRoute>} />
        <Route path="/companies/:handle" element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><JobsList /></ProtectedRoute>} />
        <Route path="/jobs/:id" element={<ProtectedRoute><JobDetail /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>}  />
        {/* Catch all route redirects to home */}
        <Route path="*" element={<Navigate to="/" />}  />
    </Routes>
  </div>
  )
}

export default AppRoutes;
