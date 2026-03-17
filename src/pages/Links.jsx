import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
    useEffect(() => {
        document.title = "Ссылки | Spot&Choo's";
    }, []);

    const links = [
        { type: 'external', href: 'https://t.me/spotandchoo/1362', img: 'https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c467c1e1f2a4ceb2fa53ab_Frame%2070..png', alt: 'Доставка / Предзаказ' },
        { type: 'external', href: 'https://t.me/spotandchoo', img: 'https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c468147a7c0e565416c08c_Frame%2071..png', alt: 'Оставить Отзыв' },
        { type: 'internal', to: '/map', img: 'https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c4685902812661363ec085_Frame%2072..png', alt: 'Найти На Карте' },
        { type: 'external', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeJ1IN9aQRxPrgXFuq6Q1UMdG3m9mPkA2CiiulRQcFuCPOPYg/viewform', img: 'https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c468c1315e98aa8424c6b7_Frame%2075..png', alt: 'Ищу Работу' },
        { type: 'external', href: 'https://docs.google.com/forms/d/1GXy8FXkhjeocb5VOY3qntZjPghgsfSIx16PoUVB1PaQ/viewform?edit_requested=true', img: 'https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c468e032be69612115fd31_Frame%2076..png', alt: 'Поддержка' }
    ];

    return (
        <div className="pt-4 pb-12 md:pb-24 w-full max-w-[800px] mx-auto flex flex-col items-center min-h-[70vh]">
            <div className="w-full flex justify-center mb-10 px-4">
                <h1 className="font-tags text-5xl md:text-7xl text-center text-brand-accent drop-shadow-md transform -rotate-2 leading-relaxed pb-2">
                    LINKS
                </h1>
            </div>

            <div className="w-full flex flex-col gap-6 px-4 md:px-0">
                {links.map((link, idx) => {
                    const contentElement = (
                        <div className="w-full bg-white border-[3px] border-brand-text p-4 md:p-6 flex items-center justify-between shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_rgba(27,20,7,1)] transition-all group">
                            {/* Text content */}
                            <div className="text-xl md:text-2xl font-black uppercase italic tracking-widest text-brand-text group-hover:text-brand-accent transition-colors">
                                {link.alt}
                            </div>
                            {/* Arrow icon */}
                            <div className="text-brand-text group-hover:text-brand-accent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    );

                    if (link.type === 'internal') {
                        return (
                            <Link key={idx} to={link.to} className="w-full block">
                                {contentElement}
                            </Link>
                        );
                    } else {
                        return (
                            <a key={idx} href={link.href} target="_blank" rel="noreferrer" className="w-full block">
                                {contentElement}
                            </a>
                        );
                    }
                })}
            </div>
        </div>
    );
}
