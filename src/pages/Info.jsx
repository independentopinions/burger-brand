import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInScroll from '../components/FadeInScroll';

export default function Info() {

    const locations = [
        {
            id: "original",
            galleryId: "north",
            name: "burgerbrands original",
            address: "ул. ул. Зимняя, 20\nСевер",
            hours: "вс-чт 12:00-23:00\nпт-сб 12:00-00:00",
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c4903be67f3562ff9b38e9_photo_2023-08-11%2013.19.11.jpeg",
            tg: "https://t.me/burgerbrands",
            tel: "+7 (000) 000-00-00",
            telLink: "tel:+70000000000",
        },
        {
            id: "ves5",
            galleryId: "ves5",
            name: "burgerbrands ves5",
            address: "ул. пл. Весенняя, 5\nНовосибирск",
            hours: "вс-чт 12:00-23:00\nпт-сб 12:00-00:00",
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8de0e6e4f3a42a8c5614_photo_2023-08-04%2019.25_5.png",
            tg: "https://t.me/burgerbrandsves5",
            tel: "+7 (000) 000-00-00",
            telLink: "tel:+70000000000",
        },
        {
            id: "lite",
            galleryId: "lite",
            name: "burgerbrands lite",
            address: "ул. ул. Парковая, 1\nНовосибирск",
            hours: "вс-чт 12:00-22:00\nпт-сб 12:00-22:00",
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe9aba2994b2723af306aa_photo_2023-08-04%2020.47_2.png",
            tg: "https://t.me/burgerbrandslite",
            tel: "+7 (000) 000-00-00",
            telLink: "tel:+70000000000",
        },
        {
            id: "west",
            galleryId: "west",
            name: "burgerbrands west",
            address: "ул. ул. Летняя, 10\nЗападный Берег",
            hours: "вс-чт 12:00-22:00\nпт-сб 12:00-23:00",
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48b708470ab07c3b4ef0b_photo_2023-08-04%2013.22.43.jpeg",
            tg: "https://t.me/burgerbrandsleft",
            tel: "+7 (000) 000-00-00",
            telLink: "tel:+70000000000",
        },
        {
            id: "park",
            galleryId: null,
            name: "burgerbrands Koltsovo",
            address: "ул. ул. Осенняя, 15\nПарк",
            hours: "вс-чт 12:00-22:00\nпт-сб 12:00-22:00",
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68382c27a3f01c1fe7be41a7_photo_2025-05-29%2014.42.21.jpeg",
            tg: "https://t.me/burgerbrandspark",
            tel: "+7 (000) 000-00-00",
            telLink: "tel:+70000000000",
        }
    ];

    useEffect(() => {
        document.title = "Локации | BurgerBrand";
    }, []);



    return (
        <div className="pt-4 pb-12 md:pb-16 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl mb-6 text-center text-brand-accent drop-shadow-md font-tags transform rotate-1 leading-relaxed pt-4 pb-2">
                OUR&nbsp;&nbsp;LOCATIONS
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24">
                {locations.map((loc, idx) => (
                    <FadeInScroll key={loc.id} delay={0.1 * (idx % 3)} yOffset={60} className="h-full">
                        <div className="relative group perspective-1000 flex flex-col h-full mt-4">
                            {/* Duct Tape decoration */}
                            <div className="absolute -top-4 right-4 w-20 h-6 bg-[#e8e6e1] shadow-sm opacity-90 rotate-[3deg] z-20 overflow-hidden mix-blend-multiply border-b border-black/5 flex flex-col justify-end"></div>

                            <div className={`flex flex-col h-full bg-[#fdfbf7] border-[3px] border-brand-text p-3 shadow-[6px_6px_0px_rgba(27,20,7,1)] transition-transform duration-300 hover:-translate-y-2 ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}>
                                <Link to={`/location/${loc.galleryId}`} className="relative overflow-hidden aspect-[4/3] bg-brand-text mb-4 border-2 border-brand-text cursor-pointer block">
                                    <img
                                        src={loc.img}
                                        alt={loc.name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale-[40%] contrast-125 sepia-[10%] hover:grayscale-0"
                                        loading="lazy"
                                    />
                                </Link>

                                <div className="flex flex-col flex-1">
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-brand-accent leading-none">
                                        {loc.name}
                                    </h3>

                                    <div className="flex flex-col gap-4 text-sm md:text-base font-medium flex-1">
                                        <div>
                                            <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Адрес</span>
                                            <p className="whitespace-pre-line leading-snug font-bold">{loc.address}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Режим работы</span>
                                            <p className="whitespace-pre-line leading-snug font-bold">{loc.hours}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-col gap-3">
                                        <div className="flex gap-2 w-full">
                                            <a
                                                href={loc.tg}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 bg-brand-text text-brand-bg text-center py-3 font-black uppercase tracking-wide text-sm hover:bg-brand-accent transition-colors"
                                            >
                                                Заказать в ТГ
                                            </a>
                                            <Link
                                                to={`/location/${loc.galleryId}`}
                                                className="bg-brand-accent text-brand-bg px-4 py-3 font-black uppercase tracking-wide text-sm hover:bg-black transition-colors"
                                            >
                                                Фотки
                                            </Link>
                                        </div>
                                        <a
                                            href={loc.telLink}
                                            className="border-2 border-brand-text text-brand-text text-center py-3 font-black tracking-wide text-sm hover:bg-brand-text hover:text-brand-bg transition-colors"
                                        >
                                            {loc.tel}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInScroll>
                ))}
            </div>

            <FadeInScroll yOffset={100}>
                <section className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase text-center mb-8 inline-block relative w-full">
                        <span className="bg-brand-text text-brand-bg px-4 py-2 rotate-[-2deg] inline-block shadow-[4px_4px_0px_rgba(202,35,45,1)]">
                            Бургерные на карте
                        </span>
                    </h2>

                    <div className="border-4 border-brand-text p-2 shadow-[8px_8px_0px_rgba(27,20,7,1)] bg-white rotate-[1deg]">
                        <div className="relative w-full h-[500px] md:h-[600px] bg-gray-200">
                            <iframe
                                id="map_791265397"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2739882294!2d-118.6919242!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1692881232840!5m2!1sen!2s"
                                sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                                title="BurgerBrand Locations Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </FadeInScroll>
        </div>
    );
}
