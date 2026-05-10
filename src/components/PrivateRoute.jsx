import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-classic-black px-6">
        <div className="panel-soft rounded-[28px] p-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan">
            Auth Check
          </p>
          <p className="mt-4 text-sm text-classic-slate-light">
            Memeriksa sesi admin...
          </p>
        </div>
      </div>
    );
  }
  
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
