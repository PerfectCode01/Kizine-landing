import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import FAQPage from '../pages/FaqPage';
import Layout from '../components/layout/Layout';
import ContactPage from '../pages/ContactPage';

// 1. Définition des routes
const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        errorElement : <NotFound/>,
        children : [
            {
                index : true,
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/faq',
                element: <FAQPage />,
            },
            {
               path: '/contact',
               element: <ContactPage />, 
            }
        ]
    }
]);

// 2. Composant fournisseur qui sera injecté dans l'application
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}