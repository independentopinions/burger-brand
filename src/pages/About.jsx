import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInScroll from '../components/FadeInScroll';

export default function About() {
    useEffect(() => {
        document.title = "О нас | Spot&Choo's";
    }, []);

    const sections = [
        {
            title: <span className="font-tags text-brand-accent text-5xl md:text-7xl uppercase transform -rotate-2 inline-block drop-shadow-sm leading-relaxed py-2">STORY</span>,
            content: (
                <>
                    <p className="mb-6"><span className="font-black text-brand-accent uppercase mr-2">Spot&Choo's</span> — это симбиоз высшей еды и уличной культуры. То, что началось, как сторонний хасл двух друзей детства, выросло в узнаваемый бренд. Наша любовь - качественный рэп, грязные бургеры, уличная одежда, кипящее масло и тянущийся сыыыр.</p>
                    <p>Всё это основатели Spot и Choo впитали в США и Австралии, вернулись домой в Академгородок и приступили к созданию бургер-джоинта. Пацаны сложили воедино всё, что любят, нашли братьев и сестёр по духу, и предложили городу самый приветливый сервис, крутой стритфуд, красивых мальчишек и девчонок в фирмовых кепочках, и, конечно, громкий рэп.</p>
                </>
            ),
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64f919928c3a23a8bd09356c_Rectangle.png",
            alt: "Founders",
            reverse: false,
            tag: "ORIGINAL GANG"
        },
        {
            title: <span className="font-tags text-brand-accent text-5xl md:text-7xl uppercase transform -rotate-1 inline-block drop-shadow-sm leading-relaxed py-2">CONCEPTION</span>,
            content: (
                <>
                    <p className="mb-6">Концепция <span className="font-bold bg-brand-text text-brand-bg px-1 mx-1">Spot&Choo's</span> ясна: дать гостю новый опыт. На входе тебя встретит команда друзей, а наша атмосфера заставит вернуться вечером за бутылочкой пива с луковыми кольцами. С тщательным вниманием к деталям, мы создаем каждый бургер, используя только самые свежие и качественные ингредиенты.</p>
                    <p className="text-xl font-medium italic text-brand-accent mb-6 px-4 border-l-4 border-brand-accent">"Наши талантливые повара создают такие вкусовые сочетания, что тебе захочется еще, и еще, и еще."</p>
                    <p>Мы удовлетворим тебя, и нам без разницы, вегетарианец ты, мясоед или просто зашел взять кофе.</p>
                </>
            ),
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c41530901dafa49738ee29_photo_2023-08-02-12.18-1.png",
            alt: "People enjoying food",
            reverse: true,
            tag: "GOOD VIBES ONLY"
        },
        {
            title: <span className="font-tags text-brand-accent text-5xl md:text-7xl uppercase transform rotate-1 inline-block drop-shadow-sm leading-relaxed py-2">LOCATIONS</span>,
            content: (
                <>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-brand-accent text-sm">АКАДЕМГОРОДОК</h4>
                            <p>Мы начались с OG Spot&Choo's в Академгородке на ул.Ильича, 10 и продолжились в других районах Новосибирска.</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-brand-accent text-sm">ЦЕНТР</h4>
                            <p>Сейчас ты можешь найти в центре города большой S&C KOM45 с диджеями по пятницам и субботам по адресу Коммунистическая, 45, а также маленький S&C Lite на ул.Ленина, 3.</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-brand-accent text-sm">ЛЕВЫЙ БЕРЕГ</h4>
                            <p>Левый берег представлен точкой S&C NSTU по адресу ул.Блюхера, 32/1 (в общежитии НГТУ номер 6).</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-brand-accent text-sm">КОЛЬЦОВО</h4>
                            <p>+ Недавно мы открыли пятый джоинт в Кольцово по адресу ул. Академика Сандахчиева, 5.</p>
                        </div>
                    </div>
                </>
            ),
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82272994b2723ad670ee_IMG_1280-1000-%201.png",
            alt: "Restaurant location exterior",
            reverse: false,
            tag: "OPEN 24/7"
        },
        {
            title: <span className="font-tags text-brand-accent text-5xl md:text-7xl uppercase transform -rotate-2 inline-block drop-shadow-sm leading-relaxed py-2">WAITING</span>,
            content: (
                <>
                    <p className="mb-4">Если ты любишь стрит-культуру, отборный хип-хоп, уличную еду и дружить, то ты скорее всего уже завязываешь шнурки на пороге и слушаешь наш плейлист. А мы уже включили гриль, охладили пиво и сделали погромче.</p>
                    <p className="font-bold text-lg mb-6">Приходи получать опыт Spot&Choo's, есть, пить, слушать и болтать!</p>

                    <div className="border-t-2 border-dashed border-brand-text/30 py-4 my-6 text-center">
                        <h3 className="text-2xl font-black italic text-brand-accent">C YA, FELLAS & SISTAS!</h3>
                    </div>

                    <p className="text-sm opacity-70 italic mt-6">
                        Примечание: В разделе <Link to="/info" className="text-brand-accent hover:underline">«ИНФО»</Link> есть подробная информация о всех филиалах.
                    </p>
                </>
            ),
            img: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8227598ee130df747fcd_R1-07944-0011%201.png",
            alt: "Crowd",
            reverse: true,
            tag: "JOIN US"
        }
    ];

    return (
        <div className="py-12 md:py-24 max-w-5xl mx-auto flex flex-col gap-32">
            {sections.map((section, idx) => (
                <FadeInScroll key={idx} yOffset={80}>
                    <section className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center ${section.reverse ? 'md:flex-row-reverse' : ''}`}>

                        {/* Text Content */}
                        <div className={`${section.reverse ? 'md:col-start-2 md:row-start-1' : ''} relative`}>
                            <h2 className="mb-6 leading-none text-center">
                                <span className="relative inline-block">
                                    {section.title}
                                </span>
                            </h2>

                            <div className={`text-base md:text-lg leading-relaxed text-brand-text/90 ${idx % 2 === 0 ? 'bg-white/40 backdrop-blur-sm p-6 md:p-8 shadow-sm border border-brand-text/10' : ''}`}>
                                {section.content}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className={`relative group perspective-1000 ${section.reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
                            {/* Background offset block */}
                            <div className={`absolute top-4 left-4 right-[-1rem] bottom-[-1rem] bg-brand-accent/10 -z-10 ${section.reverse ? 'right-4 left-[-1rem]' : ''}`}></div>

                            <div className={`border-[3px] md:border-4 border-brand-text bg-white p-2 md:p-3 transform transition-transform duration-500 hover:-translate-y-2 ${section.reverse ? 'hover:-rotate-2' : 'hover:rotate-2'} shadow-[6px_6px_0px_rgba(27,20,7,1)]`}>

                                {/* Tape decoration */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-8 bg-[#e8e6e1] shadow-md opacity-90 rotate-[-2deg] z-20 overflow-hidden mix-blend-multiply border-b border-black/5 flex flex-col justify-end">
                                    <div className="w-full h-[1px] bg-black/5 mt-1"></div>
                                    <div className="w-full h-[1px] bg-black/5 mt-1"></div>
                                </div>

                                <img
                                    src={section.img}
                                    alt={section.alt}
                                    className="w-full h-auto aspect-square md:aspect-[4/5] object-cover grayscale-[30%] contrast-125 sepia-[20%] transition-all duration-700 group-hover:grayscale-0"
                                    loading="lazy"
                                />

                                <div className={`absolute -bottom-4 ${section.reverse ? '-left-4 rotate-[4deg]' : '-right-4 rotate-[-6deg]'} bg-brand-accent text-white font-black italic px-3 md:px-5 py-1 md:py-2 border-2 border-brand-text shadow-[4px_4px_0px_rgba(27,20,7,1)] text-sm md:text-base whitespace-nowrap z-30`}>
                                    {section.tag}
                                </div>
                            </div>
                        </div>

                    </section>
                </FadeInScroll>
            ))}
        </div>
    );
}
