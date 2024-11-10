import { motion } from 'framer-motion'
import Button from "@src/Components/Button"
import TrustedBy from '@src/Components/TrustedBy'
import ParallaxPage from '@src/Pages/ParallaxPage'
import { NavLink } from 'react-router-dom';

// import Introduction from './Introduction'

export default function LandingPage() {

    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                {/* Video background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video1.mp4"
                />

                {/* Overlay for shadow effect */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Content container */}
                <div className="relative flex items-center justify-center h-full py-16">
                    {/* Hero section */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative">
                            {/* Main Heading */}
                            <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4">
                                CHAPTER 001
                            </h1>

                            {/* Secondary Heading */}
                            <h2 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-3xl-glow">
                                PAKISTAN
                            </h2>

                            <p className="mt-4 text-xl text-white">
                                Let's start your new chapter
                            </p>

                            {/* Button Link */}
                            <div className="flex justify-center py-4">
                                <NavLink to={"/app/services"}>
                                    <Button title="Explore Now" className="py-8" />
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
                <NavLink to={"/app/services"}>
                    <button className="btn !px-16">
                        Get Started
                    </button>
                </NavLink>
            </section>


        </>
    )
}
