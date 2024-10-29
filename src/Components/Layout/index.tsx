import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SmoothTicker from '../SmoothTicker';

const Layout: FC = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col min-h-screen mb-12 bg-gradient-to-br from-slate-700 via-navy-600 to-navy-900">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
            <SmoothTicker />
        </>
    );
};

export default Layout;