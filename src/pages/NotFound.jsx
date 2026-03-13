import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        document.title = "404 | BurgerBrand";
    }, []);

    return (
        <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center relative group perspective-1000">
                {/* Visual noise / grunge background for the 404 block */}
                <div className="absolute inset-4 bg-brand-accent/10 translate-x-4 translate-y-4 -z-10"></div>

                <div className="bg-white border-[3px] md:border-4 border-brand-text p-10 md:p-20 shadow-[10px_10px_0px_rgba(27,20,7,1)] relative overflow-hidden flex flex-col items-center justify-center">

                    {/* Tape decoration */}
                    <div className="absolute -top-4 -right-8 w-32 h-8 bg-[#e8e6e1] shadow-md opacity-90 rotate-12 z-20 mix-blend-multiply border-b border-black/5"></div>
                    <div className="absolute -bottom-4 -left-8 w-32 h-8 bg-[#e8e6e1] shadow-md opacity-90 -rotate-6 z-20 mix-blend-multiply border-b border-black/5"></div>

                    {/* Glitchy Text Effect */}
                    <h1 className="text-8xl md:text-[150px] font-black italic uppercase tracking-tighter leading-none text-brand-text mb-4 relative">
                        <span className="absolute -left-[2px] -top-[2px] text-brand-accent mix-blend-multiply opacity-70">404</span>
                        404
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-black uppercase text-brand-accent mb-6 leading-tight">
                        УПС... <br />
                        <span className="text-brand-text block mt-2 text-2xl md:text-4xl">КТО-ТО СЪЕЛ ЭТУ СТРАНИЦУ</span>
                    </h2>

                    <p className="text-sm md:text-base font-medium max-w-md mx-auto mb-10 opacity-80 border-l-[3px] border-brand-accent pl-4 text-left">
                        Похоже, мы не смогли найти то, что вы искали. Возможно, ссылка устарела, либо такого адреса никогда и не было на районе.
                    </p>

                    <Link
                        to="/"
                        className="bg-brand-text text-brand-bg px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-sm md:text-base shadow-[6px_6px_0px_rgba(202,35,45,1)] hover:bg-brand-accent hover:shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 transition-all"
                    >
                        Вернуться на базу
                    </Link>
                </div>
            </div>
        </div>
    );
}
