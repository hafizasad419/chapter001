import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout: FC = (): JSX.Element => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-700 via-navy-600 to-navy-900">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;