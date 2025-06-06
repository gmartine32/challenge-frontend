// src/layouts/PrivateLayout.tsx
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-4 shadow">
       <Link to={'/Home'} ><h1 className="text-xl text-primary font-bold hover:underline">Home</h1></Link> 
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
