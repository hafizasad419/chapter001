import { motion } from 'framer-motion'
import Button from "@src/Components/Button"
import TrustedBy from '@src/Components/TrustedBy'
import ParallaxPage from '@src/Pages/ParallaxPage'
import { NavLink } from 'react-router-dom';

// import Introduction from './Introduction'

export default function LandingPage() {

    return (
        <>
            <div className=" w-full overflow-hidden">
                {/* Background gradient */}
                <div
                    className="w-full h-full bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900"
                    style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradient 15s ease infinite',
                    }}
                />

                {/* Content container */}
                <div className="relative flex items-center justify-center py-16">
                    {/* Hero section */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* 3D Text Effect */}
                        <div className="relative">
                            <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 drop-shadow-3xl-glow mb-4 ">
                                CHAPTER 001
                            </h1>


                            {/* <img
                            className='absolute w-60 top-0 left-64 ' // Set z-50 for the image
                            src="/logo.png" alt="" /> */}


                            <h2 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 drop-shadow-3xl-glow">
                                PAKISTAN
                            </h2>
                            <p className="mt-4 text-xl text-cyan-200">Let's start your new chapter</p>

                            <div className="flex justify-center py-4">
                                <NavLink to={"/app/services"}>
                                    <Button title='Explore Now'
                                        className='py-8'
                                    />
                                </NavLink>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <Introduction /> */}
            <TrustedBy />

            <ParallaxPage />
            <section className='py-16 flex justify-center'>
                <button className="btn !px-16">
                    <NavLink to={"/app/services"}>
                        Get Started
                    </NavLink>
                </button>
            </section>


        </>
    )
}
