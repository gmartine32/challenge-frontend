// src/layouts/PrivateLayout.tsx
import { Link, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';

export default function PrivateLayout() {


  const logout = () =>{
    useAuthStore.getState().logout();
  }

  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-4 shadow">
      <section className='flex items-center gap-4'>
      <Link to={'/'} ><h1 className="text-xl text-primary font-bold hover:underline">Home</h1></Link> 
      <Link to={'/user'} ><h1 className="text-xl text-primary font-bold hover:underline">User</h1></Link> 
      </section>
        <button
          onClick={logout}
          className="bg-primary text-black cursor-pointer px-4 py-2 rounded hover:bg-red-600"
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
