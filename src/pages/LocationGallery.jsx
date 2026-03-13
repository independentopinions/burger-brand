import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import galleriesData from '../data/galleries.json';

const GALLERY_META = {
    'north': {
        title: 'Зимняя 20',
        links: [
            { id: 'ves5', label: 'Весенняя 5' },
            { id: 'lite', label: 'Парковая 1' },
            { id: 'west', label: 'Летняя 10' }
        ]
    },
    'ves5': {
        title: 'Весенняя 5',
        links: [
            { id: 'north', label: 'Зимняя 20' },
            { id: 'lite', label: 'Парковая 1' },
            { id: 'west', label: 'Летняя 10' }
        ]
    },
    'lite': {
        title: 'Парковая 1',
        links: [
            { id: 'ves5', label: 'Весенняя 5' },
            { id: 'west', label: 'Летняя 10' },
            { id: 'north', label: 'Зимняя 20' }
        ]
    },
    'west': {
        title: 'Летняя 10',
        links: [
            { id: 'ves5', label: 'Весенняя 5' },
            { id: 'lite', label: 'Парковая 1' },
            { id: 'north', label: 'Зимняя 20' }
        ]
    }
};

export default function LocationGallery() {
    useEffect(() => {
        document.title = "Локация | BurgerBrand";
    }, []);

    const { id } = useParams();
    const data = galleriesData[id];
    const meta = GALLERY_META[id];

    if (!data || !meta) {
        return <Navigate to="/info" />;
    }

    const panoImg = data[0];
    const restImgs = data.slice(1);

    return (
        <div
            className="fixed inset-0 z-[100] w-full h-full bg-brand-accent overflow-y-auto"
            data-lenis-prevent="true"
        >
            {/* Top Pano */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-black">
                <img
                    src={panoImg}
                    alt={meta.title}
                    className="w-full h-full object-cover opacity-90"
                />

                {/* Overlay Text */}
                <div className="absolute top-8 right-8 text-right z-10 flex flex-col items-end">
                    <h1 className="text-4xl md:text-6xl text-white font-black tracking-tighter uppercase mb-2 drop-shadow-md break-words max-w-[90vw] leading-none">
                        {meta.title}
                    </h1>
                    <div className="flex flex-wrap justify-end gap-x-2 text-white font-bold text-xs md:text-sm uppercase tracking-widest drop-shadow-md">
                        {meta.links.map((link, idx) => (
                            <React.Fragment key={link.id}>
                                <Link to={`/location/${link.id}`} className="hover:underline underline-offset-4 decoration-2">
                                    {link.label}
                                </Link>
                                {idx < meta.links.length - 1 && <span>/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Gradients */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-transparent to-transparent pointer-events-none h-1/3 bottom-0 top-auto"></div>
            </div>

            {/* Grid */}
            <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {restImgs.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid shadow-[8px_8px_0px_rgba(27,20,7,1)] border-[4px] border-brand-text bg-brand-bg relative group overflow-hidden">
                            <img
                                src={img}
                                alt=""
                                className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-color-burn"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Home Button */}
            <Link
                to="/info"
                className="fixed bottom-6 left-6 md:bottom-12 md:left-12 bg-white text-brand-text font-black text-sm uppercase tracking-widest px-6 py-3 border-4 border-brand-text shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:bg-brand-accent hover:text-white transition-all hover:translate-y-[2px] w-auto inline-block z-50 mix-blend-normal"
            >
                Home
            </Link>
        </div>
    );
}
