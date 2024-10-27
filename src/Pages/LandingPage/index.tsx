import { motion } from 'framer-motion'
import Button from "@src/Components/Button"

export default function LandingPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background gradient */}
            <div
                className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900"
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

                        <div className="flex justify-center">
                            <Button size="lg" className="mt-8 bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg transform hover:scale-105">
                                Explore Now
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
