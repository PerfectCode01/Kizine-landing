import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Ton composant Navbar actuel

export default function Layout() {
  return (
    <div className="app-container">
      {/* La Navbar reste fixe et ne recharge jamais */}
      <Navbar /> 
      
      <main className="main-content">
        {/* C'est ici que React Router va injecter Home, About, etc. */}
        <Outlet /> 
      </main>
      
      {/* Tu peux aussi mettre un Footer global ici */}
    </div>
  );
}