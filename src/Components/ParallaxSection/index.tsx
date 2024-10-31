import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { pop } from '@src/utils/animations'

interface ParallaxSectionProps {
    id: string
    title: string
    description: string
    imgSrc: string
    imgAlt: string
    bgColor: string
    textColor: string
}

export default function ParallaxSection({
    id,
    title,
    description,
    imgSrc,
    imgAlt,
    bgColor,
    textColor,
}: ParallaxSectionProps) {
    return (
        <section
            id={id}
            className={`w-full min-h-screen relative ${bgColor} ${textColor} overflow-hidden`}
        >
            <ParallaxBanner className="h-screen">
                <ParallaxBannerLayer speed={-20}>
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="absolute inset-0 w-[30vw] mx-auto hidden md:block"
                        style={{ top: '47%', transform: 'translateY(-50%) translateX(70%)', }}
                    />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={-30}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[70%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between">
                            {/* Title for mobile */}
                            <motion.div
                                variants={pop}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="w-full lg:hidden mb-8"
                            >
                                <h3 className="font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] text-[55px] text-center ">
                                    {title}
                                </h3>
                            </motion.div>
                            {/* Title For Desktop */}
                            <Parallax speed={10} className="w-full lg:w-1/2 lg:text-left">
                                <motion.h3
                                    variants={pop}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="hidden lg:block mb-11 font-extrabold leading-[0.85em] tracking-[0.01em] uppercase text-[56px] lg:text-[70px]"
                                >
                                    {title}
                                </motion.h3>


                                {/* Text content */}

                                <motion.p
                                    variants={pop}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="lg:max-w-[500px] mb-5 text-lg lg:text-2xl font-light"
                                >
                                    {description.split('\n').map((line, index) => (
                                        <p key={index} className="mb-2">{line}</p>
                                    ))}
                                </motion.p>
                            </Parallax>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </section>
    )
}