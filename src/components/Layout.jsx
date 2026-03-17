import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Layout({ children }) {
    const location = useLocation();
    const isRadioPage = location.pathname === '/radio';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // GSAP refs
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    // Page load animations for Header & Footer
    useGSAP(() => {
        // We add a tiny delay to ensure everything is mounted
        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
            );
        }
        if (footerRef.current) {
            gsap.fromTo(footerRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
            );
        }
    }, [location.pathname]); // Re-run animation if we navigate to a page that suddenly shows it

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <div className="min-h-screen relative overflow-hidden font-sans flex flex-col">
            {/* Background noise texture layer */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Main content layer */}
            <div className="relative z-10 flex-1 flex flex-col w-full">
                {/* Header */}
                {!isRadioPage && (
                    <header ref={headerRef} className="p-4 md:px-8 md:py-6 lg:px-12 max-w-[1400px] mx-auto w-full flex justify-between items-center relative opacity-0">
                        {/* Logo - Left */}
                        <Link to="/" className={`text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter text-brand-accent uppercase drop-shadow-sm flex-shrink-0 mr-4 relative z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                            Spot&Choo's
                        </Link>

                        {/* Navigation - Center */}
                        <nav className="hidden lg:flex gap-6 xl:gap-8 text-xs font-bold uppercase tracking-widest items-center absolute left-1/2 -translate-x-1/2">
                            <Link to="/current" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">Афиша</Link>
                            <Link to="/info" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">Локации</Link>
                            <Link to="/menu" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">Меню</Link>
                            <Link to="/gallery" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">Галерея</Link>
                            <Link to="/about" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">О нас</Link>
                            <Link to="/radio" className="relative text-brand-accent after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform transition-colors">Радио</Link>
                        </nav>

                        {/* Actions - Right */}
                        <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                            <Link to="/links" className="hover:text-brand-accent transition-colors">Ссылки</Link>
                            <a
                                href="https://m.loyaltyplant.com/3177"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-brand-accent text-white px-3 py-1 lg:px-4 lg:py-2 rotate-[-2deg] shadow-[4px_4px_0px_rgba(27,20,7,1)] hover:bg-black transition-colors whitespace-nowrap"
                            >
                                Скачать приложение
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden relative z-50 p-2 text-brand-text -mr-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-8 h-6 relative flex flex-col justify-between items-end">
                                <span className={`h-1 bg-brand-text transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 rotate-45 translate-y-2.5 bg-brand-bg absolute top-0' : 'w-8'}`}></span>
                                <span className={`h-1 bg-brand-text transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0 w-0' : 'w-6'}`}></span>
                                <span className={`h-1 bg-brand-text transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5 bg-brand-bg absolute bottom-0' : 'w-4'}`}></span>
                            </div>
                        </button>
                    </header>
                )}

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-brand-text z-40 lg:hidden flex flex-col justify-center px-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    {/* Background Noise for Mobile Menu */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-multiply"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    ></div>

                    {/* Logo inside Mobile Menu */}
                    <div className={`absolute top-4 left-4 md:top-6 md:left-8 z-50 transition-all duration-500 delay-200 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter text-brand-accent uppercase drop-shadow-sm flex-shrink-0">
                            Spot&Choo's
                        </Link>
                    </div>

                    <nav className="relative z-10 flex flex-col gap-4 sm:gap-6 text-[1.75rem] leading-none sm:text-4xl font-black uppercase tracking-tight text-brand-bg pt-12">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-100 hover:text-brand-accent hover:translate-x-4`}>Домой</Link>
                        <Link to="/current" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-150 hover:text-brand-accent hover:translate-x-4`}>Афиша</Link>
                        <Link to="/info" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-200 hover:text-brand-accent hover:translate-x-4`}>Локации</Link>
                        <Link to="/menu" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-250 hover:text-brand-accent hover:translate-x-4`}>Меню</Link>
                        <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-300 hover:text-brand-accent hover:translate-x-4`}>Галерея</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-350 hover:text-brand-accent hover:translate-x-4`}>О нас</Link>
                        <Link to="/radio" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-400 hover:text-brand-accent hover:translate-x-4`}>Радио</Link>
                        <Link to="/links" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-450 hover:text-brand-accent hover:translate-x-4`}>Ссылки</Link>

                        <div className={`mt-6 sm:mt-8 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-500`}>
                            <a
                                href="https://m.loyaltyplant.com/3177"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-brand-accent text-white px-4 py-3 sm:px-8 sm:py-4 rotate-[-2deg] shadow-[6px_6px_0px_rgba(253,251,247,1)] hover:bg-black transition-colors whitespace-nowrap text-lg sm:text-2xl"
                            >
                                Скачать приложение
                            </a>
                        </div>
                    </nav>

                    <div className={`absolute bottom-8 left-8 right-8 flex justify-between items-end border-t-2 border-brand-bg/20 pt-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500 delay-[600ms]`}>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-black italic text-brand-accent tracking-tighter opacity-80">S&C</h2>
                        </div>
                        <a href="https://t.me/spotandchoo" target="_blank" rel="noreferrer" className="text-sm font-bold tracking-widest uppercase text-brand-bg hover:text-[#0088cc] transition-colors">
                            Telegram
                        </a>
                    </div>
                </div>

                {/* Page Content */}
                <main className={`flex-1 w-full flex flex-col relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-16 scale-[0.98] blur-sm' : ''} ${isRadioPage ? '' : 'max-w-7xl mx-auto p-4 md:p-8'}`}>
                    {children}
                </main>

                {/* Footer */}
                {!isRadioPage && (
                    <footer ref={footerRef} className="bg-[#1b1407] text-[#fdfbf7] p-4 md:p-6 mt-auto z-20 relative opacity-0">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

                            {/* Logo & Copyright */}
                            <div className="text-center md:text-left flex flex-col gap-1">
                                <h2 className="text-2xl md:text-3xl font-black italic text-brand-accent tracking-tighter uppercase">SPOT&CHOO'S</h2>
                                <p className="text-xs opacity-60">© 2026 Spot&Choos. All rights reserved.</p>
                            </div>

                            {/* Nav */}
                            <div className="flex flex-col items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-bold tracking-widest uppercase">
                                    <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-brand-accent transition-colors">О нас</Link>
                                    <Link to="/menu" className="opacity-80 hover:opacity-100 hover:text-brand-accent transition-colors">Меню</Link>
                                    <Link to="/info" className="opacity-80 hover:opacity-100 hover:text-brand-accent transition-colors">Локации</Link>
                                    <a href="https://t.me/spotandchoo" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-[#0088cc] transition-colors">TELEGRAM</a>
                                </div>
                                <a href="mailto:spotandchoos@gmail.com" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-60 hover:opacity-100 hover:text-brand-accent transition-colors mt-1">
                                    связь: spotandchoos@gmail.com
                                </a>
                            </div>

                            {/* Credits */}
                            <div className="flex flex-col items-center md:items-end gap-2 text-xs opacity-60 mt-2 md:mt-0">
                                <p className="tracking-widest italic font-medium text-[10px] md:text-xs lowercase">designed by independent opinions</p>
                            </div>

                        </div>
                    </footer>
                )}
            </div>
        </div>
    );
}
