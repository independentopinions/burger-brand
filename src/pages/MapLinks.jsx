import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MapLinks() {
    useEffect(() => {
        document.title = "На карте | BurgerBrand";
    }, []);

    const maps = [
        { title: 'Зимняя 20', address: 'найти на карте', href: 'https://www.google.com/maps/search/?api=1&query=New+York+Burger' },
        { title: 'Весенняя 5', address: 'найти на карте', href: 'https://www.google.com/maps/search/?api=1&query=Los+Angeles+Burger' },
        { title: 'Парковая 1', address: 'найти на карте', href: 'https://www.google.com/maps/search/?api=1&query=Chicago+Burger' },
        { title: 'Летняя 10', address: 'найти на карте', href: 'https://www.google.com/maps/search/?api=1&query=Houston+Burger' },
        { title: 'ул. Осенняя, 15', address: 'найти на карте', href: 'https://www.google.com/maps/search/?api=1&query=Miami+Burger' }
    ];

    return (
        <div className="pt-4 pb-12 md:pb-24 w-full max-w-[800px] mx-auto flex flex-col items-center min-h-[70vh]">
            <div className="w-full flex justify-center mb-10 px-4">
                <h1 className="font-tags text-5xl md:text-7xl text-center text-brand-accent drop-shadow-md transform rotate-1 leading-relaxed pb-2">
                    ON&nbsp;&nbsp;THE&nbsp;&nbsp;MAP
                </h1>
            </div>

            <div className="w-full flex flex-col gap-6 px-4 md:px-0">
                {maps.map((map, idx) => (
                    <a
                        key={idx}
                        href={map.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-white border-[3px] border-brand-text py-2 px-4 md:py-3 md:px-5 flex items-center justify-between shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_rgba(27,20,7,1)] transition-all group"
                    >
                        <div>
                            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-widest text-brand-text group-hover:text-brand-accent transition-colors mb-0.5">{map.title}</h2>
                            <p className="text-brand-text/70 font-bold text-xs md:text-sm uppercase tracking-widest">{map.address}</p>
                        </div>
                        <div className="text-brand-text group-hover:text-brand-accent transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-16 w-full flex justify-center px-4">
                <Link to="/links" className="bg-brand-text text-white px-8 py-3 font-black text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors border-[2px] border-brand-text shadow-[4px_4px_0px_rgba(202,35,45,1)]">
                    назад к ссылкам
                </Link>
            </div>
        </div>
    );
}
