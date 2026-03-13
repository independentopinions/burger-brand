import React, { useEffect } from 'react';

export default function Shop() {
    useEffect(() => {
        document.title = "Мерч | BurgerBrand";
    }, []);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-8xl font-black italic uppercase text-brand-accent drop-shadow-sm mb-6">
                Магаз
            </h1>
            <div className="bg-brand-text text-brand-bg px-8 py-4 rotate-[-2deg] shadow-[6px_6px_0px_rgba(202,35,45,1)]">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider">
                    New Merch Soon
                </h2>
            </div>
        </div>
    );
}
