import { useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {

      useEffect(() => {
    // No explicit cleanup needed for framer-motion and spline,
    // but this ensures any potential side effects are cleaned on unmount.
    return () => {
      // Cleanup logic if needed in future
    };
  }, []);

  return (
    <section className="h-screen bg-gradient-to-b from-violet-900
    to-black flex xl:flex-row flex-col-reverse items-center
    justify-center lg:px-16 px-4 relative overflow-hidden">

    {/* Left Section */}

    <div
    className="flex flex-col justify-center items-start text-left h-full
    w-full xl:w-1/2 z-40 mt-12 md:mt-20">
        <motion.h1 
        initial={{ opacity : 0, y : 80 }}
        animate={{ opacity: 1, y : 0   }} 
        transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
        }}
        className="text-left text-4xl md:text-5xl lg:text-6xl font-bold text-white 
        leading-tight mb-6 max-w-2xl">
            Building Fast <br /> Reliable Results 
        </motion.h1>
        <motion.p 
         initial={{ opacity : 0, y:80 }}
        animate={{opacity:1, y:0}}
        transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
        }}
        className=" text-base sm:text-lg md:text-xl lg:text-xl text-gray-200
        max-w-md leading relaxed">
                        I deliver robust, production ready websites and web apps with 
                        speed and precision. Every project is backed by clean code
                        and a commitment to getting it done, on time, every time.
        </motion.p>
    </div>

    {/* Right Section */}
    
    <div className="flex justify-center items-center h-full w-full xl:w-1/2">
    <Spline scene="https://prod.spline.design/fp-Il6PADRa-NKfq/scene.splinecode" />




</div>


    </section>
  )
}

export default HeroSection

