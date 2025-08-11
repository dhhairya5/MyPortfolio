import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) st.kill(true);
      });
    };
    cleanup();

    // Initial states
    gsap.set(circleRef.current, { opacity: 0, scale: 0.9, 
        background: "linear-gradient(to right, #9333EA, #FBCFE8)", boxShadow: "none" });
    gsap.set(initialTextRef.current, { opacity: 1, visibility: "visible" });
    gsap.set(finalTextRef.current, { opacity: 0, visibility: "hidden" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
          pin: true,
      },
    });

    // Step 1: Slight expansion with violet gradient
    tl.to(circleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
    }, 0);

    // Step 2: Fade out initial text
    tl.to(initialTextRef.current, {
      opacity: 0,
      visibility: "hidden",
      ease: "power1.out",
      duration: 0.3,
    }, 0.6);

    // Step 3: Large expansion with softer gradient
    tl.to(circleRef.current, {
      scale: 20,
      background: "linear-gradient(to right, #E9D5FF, #FBCFE8)",
      boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
      ease: "power2.inOut",
      duration: 0.5,
    }, 0.4);

    // Step 4: Show final text
    tl.to(finalTextRef.current, {
      opacity: 1,
      visibility: "visible",
      ease: "power2.in",
      duration: 0.5,
    }, 0.6);

    // return cleanup function to remove ScrollTrigger listeners
    return cleanup;
  }, []);

   useEffect(() => {
    // No explicit cleanup needed for framer-motion and spline,
    // but this ensures any potential side effects are cleaned on unmount.
    return () => {
      // Cleanup logic if needed in future
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center bg-black relative overflow-hidden h-screen"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Circle */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 z-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 
        rounded-full flex items-center justify-center shadow-violet-300/50
        shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl text-center pointer-events-none"
        >
          SCROLL DOWN
        </p>
      </div>

      {/* Final Text */}
      <div
        ref={finalTextRef}
        className="absolute text-center px-4 pointer-events-none z-10"
      >
        <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          Let's Connect
        </h1>
        <p className="text-black max-w-[40rem] text-center text-base md:text-lg 
        leading-relaxed mb-6">
          Full-stack developer skilled in building dynamic, responsive
          applications using React, Node.js, Express, and MongoDB. Passionate
          about scalable architecture, clean code, and seamless user
          experiences.
        </p>
        <button
            onClick={() => window.open("https://www.linkedin.com/in/dhhairya-shukla-58291a23b/", "_blank")}
            className="px-10 py-2 rounded-xl bg-black text-white hover:bg-white 
            hover:text-black transition-all duration-500 pointer-events-auto"
        >
            Contact Me
        </button>

        

      </div>
    </section>
  );
};

export default ContactSection;
