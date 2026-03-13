import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
    useEffect(() => {
        document.title = "BurgerBrand";
    }, []);

    const [entered, setEntered] = useState(false);

    // Refs for GSAP
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);
    const carouselRef = useRef(null);

    // Page load animation effect
    useGSAP(() => {
        if (entered) {
            // Fade in main container instantly
            gsap.to(containerRef.current, { opacity: 1, duration: 0.1 });

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Set initial states
            gsap.set(headingRef.current, { y: 100, opacity: 0 });
            gsap.set(textRef.current, { y: 50, opacity: 0 });
            gsap.set(carouselRef.current, { opacity: 0 });
            gsap.set(btnRef.current, { y: 30, opacity: 0, scale: 0.9 });

            // Play sequence
            tl.to(headingRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
                .to(textRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
                .to(carouselRef.current, { opacity: 1, duration: 1.5, ease: 'power2.out' }, "-=0.6")
                .to(btnRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.5 }, "-=1");
        }
    }, [entered]);

    // Lock body scroll when overlay is active
    useEffect(() => {
        if (!entered) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [entered]);

    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const images = [
        '/images/hero1.png',
        '/images/hero2.png',
        '/images/hero3.png',
        '/images/hero4.png',
        '/images/hero5.png',
        '/images/hero6.png',
    ];

    useEffect(() => {
        if (entered) {
            const interval = setInterval(() => {
                setCurrentImageIdx((prev) => (prev + 1) % images.length);
            }, 5500);
            return () => clearInterval(interval);
        }
    }, [entered, images.length]);

    if (!entered) {
        return (
            <div
                className="fixed inset-0 w-full h-full bg-black z-50 flex items-center justify-center cursor-pointer overflow-hidden transition-opacity duration-1000"
                onClick={() => setEntered(true)}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="https://cdn.prod.website-files.com/64d8af984c758e0313a895b7%2F68bffe3e2245aebcc4321aa3_snc-radio-background-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/64d8af984c758e0313a895b7%2F68bffe3e2245aebcc4321aa3_snc-radio-background-transcode.webm" type="video/webm" />
                </video>
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase drop-shadow-lg mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                        BurgerBrand
                    </h1>
                    <div className="bg-black/50 backdrop-blur-sm px-6 py-2 border border-white/20 text-white text-sm md:text-base tracking-widest uppercase font-bold text-center animate-pulse">
                        TAP TO ENTER
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] w-full py-8 px-4 opacity-0">
            <div className="relative group max-w-5xl w-full">
                <div className="bg-[#fdfbf7] p-5 text-center md:text-left md:p-8 lg:p-10 border-[3px] border-brand-text shadow-[10px_10px_0px_rgba(27,20,7,1)] relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8">

                    {/* Left: Text Content & Button */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-black italic uppercase text-brand-text tracking-tighter mb-4 md:mb-5 leading-none relative">
                            МЫ ЖАРИМ<br />
                            <span className="text-brand-accent block md:inline-block mt-2">МЯСО</span>
                        </h1>

                        <p ref={textRef} className="text-xs md:text-sm mb-8 opacity-90 border-l-[3px] md:border-l-4 border-brand-accent pl-4 text-left font-medium leading-relaxed">
                            <strong>BurgerBrand</strong> — это симбиоз высшей еды и уличной культуры. То, что началось, как хасл двух парней, выросло в целый бренд. Наша огромная любовь — качественный рэп, грязные бургеры, уличная одежда, кипящее масло и тянущийся сыыыр.<br /><br />
                            Концепция ясна: давать гостям новый опыт. С тщательным вниманием к деталям мы создаем каждый бургер, используя только топовые ингредиенты. Мы предложили городу по-настоящему крутой стритфуд, самый приветливый сервис и громкий бит из колонок. И нам без разницы, вегетарианец ты, мясоед или просто зашел взять кофе.
                        </p>

                        <div ref={btnRef} className="flex w-full max-w-xs mx-auto md:mx-0">
                            <Link
                                to="/menu"
                                className="w-full text-center bg-brand-text text-brand-bg px-6 py-4 font-black uppercase text-base tracking-widest shadow-[6px_6px_0px_rgba(202,35,45,1)] hover:bg-brand-accent hover:shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 transition-all"
                            >
                                Смотреть меню
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image Carousel */}
                    <div ref={carouselRef} className="flex-1 min-h-[250px] md:min-h-[400px] border-[3px] border-brand-text p-2 bg-[#e8e6e1] shadow-[6px_6px_0px_rgba(27,20,7,1)] relative overflow-hidden group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                        {images.map((img, idx) => (
                            <img
                                key={img}
                                src={img}
                                alt="Burger Brand"
                                className={`absolute top-2 left-2 right-2 bottom-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale-[10%] transition-opacity duration-700 ease-in-out ${idx === currentImageIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
