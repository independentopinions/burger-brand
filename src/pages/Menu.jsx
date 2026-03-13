import React, { useEffect, useState } from 'react';
import { menuData, locations } from '../data/menuData';
import FadeInScroll from '../components/FadeInScroll';

const Item = ({ item, isWhite = false }) => (
    <div className="mb-4">
        <div className="flex justify-between items-baseline mb-1 gap-4">
            <h4 className={`font-black uppercase tracking-tight text-sm lg:text-base leading-tight ${isWhite ? 'text-white' : 'text-brand-text'}`}>
                {item.name}
                {item.mods && <span className={`text-[10px] lg:text-xs ml-1 lowercase font-medium ${isWhite ? 'text-white/70' : 'text-brand-text/50'}`}>{item.mods}</span>}
            </h4>
            <div className={`font-bold text-sm lg:text-base shrink-0 ${isWhite ? 'text-white' : 'text-brand-text'}`}>{item.price}</div>
        </div>
        {item.desc && (
            <p className={`text-[10px] lg:text-[11px] font-medium leading-snug lowercase pr-8 ${isWhite ? 'text-white/90' : 'text-brand-text'}`}>
                {item.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        {i < item.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>
        )}
    </div>
);

const Category = ({ title, items, isRed = true }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="mb-8 lg:mb-12 break-inside-avoid">
            <h3 className={`text-xl lg:text-2xl font-black mb-4 lg:mb-6 ${isRed ? 'text-brand-accent' : 'text-brand-text'}`}>
                {title}
            </h3>
            <div>
                {items.map((i, idx) => (
                    <div key={idx} className="transition-all hover:bg-black/5 p-2 -mx-2 rounded">
                        <Item item={i} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const VeggieCategory = ({ items }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="mb-8 lg:mb-12 break-inside-avoid">
            <h3 className="text-xl lg:text-2xl font-black mb-4 lg:mb-6 text-brand-accent">Веджи</h3>
            <div>
                {items.map((i, idx) => <Item key={idx} item={i} />)}
            </div>
            <div className="mt-4 border-[2px] border-dashed border-[#2eb82e] p-3 text-center bg-[#2eb82e]/5">
                <div className="font-black text-[#2eb82e] uppercase text-xs lg:text-sm mb-1 leading-tight">
                    РАСТИТЕЛЬНАЯ КОТЛЕТА<br />hi food
                </div>
                <div className="text-[9px] lg:text-[10px] text-brand-text font-medium leading-tight">
                    можно поменять в любом бургере<br />(готовим на одном гриле)
                </div>
            </div>
        </div>
    );
};

const Speshl = ({ activeLoc }) => {
    if (activeLoc === 'lenina') return null;
    const s = menuData.speshl;
    return (
        <div className="mb-8 lg:mb-12 break-inside-avoid bg-brand-accent text-white p-4 lg:p-6 shadow-[6px_6px_0px_rgba(27,20,7,1)]">
            <h3 className="text-xl lg:text-2xl font-black mb-4 lg:mb-6">Спэшл марта</h3>
            <Item item={s} isWhite={true} />
        </div>
    );
};

export default function Menu() {
    useEffect(() => {
        document.title = "Меню | BurgerBrand";
    }, []);

    const [activeLoc, setActiveLoc] = useState('lenina');

    const filterItems = (arr) => arr.filter(i => activeLoc !== 'lenina' || !i.excludeLenina);

    return (
        <div className="py-8 md:py-12 max-w-[1400px] mx-auto bg-[#fdfbf7] min-h-screen">
            {/* Location Tabs */}
            <div className="px-4 mb-8 md:mb-12">
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                    {locations.map(loc => (
                        <button
                            key={loc.id}
                            onClick={() => setActiveLoc(loc.id)}
                            className={`px-4 py-2 text-xs md:text-sm font-bold tracking-widest uppercase border-[2px] border-brand-text transition-all ${activeLoc === loc.id
                                ? 'bg-brand-text text-white shadow-[4px_4px_0px_rgba(202,35,45,1)] translate-y-[-2px]'
                                : 'bg-white text-brand-text hover:bg-brand-accent/10 hover:shadow-[4px_4px_0px_rgba(27,20,7,1)]'
                                }`}
                        >
                            {loc.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Grid */}
            <FadeInScroll yOffset={60}>
                <div className="px-4 lg:px-8">
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-8 xl:gap-16">
                        {/* Elements flow automatically */}
                        <Speshl activeLoc={activeLoc} />

                        <Category title="Говядина" items={filterItems(menuData.govyadina)} />

                        <Category title="Курица" items={filterItems(menuData.kurica)} />

                        <VeggieCategory items={filterItems(menuData.vedji)} />

                        <Category title="Закуски" items={filterItems(menuData.zakuski)} />

                        <Category title="Супы" items={filterItems(menuData.supy)} />

                        <Category title="Добавки" items={filterItems(menuData.dobavki)} />

                        <Category title="Соусы" items={filterItems(menuData.sousy)} />

                        <Category title="Десерты" items={filterItems(menuData.deserty)} />

                        <Category title="Напитки" items={filterItems(menuData.napitki)} />

                        <Category title="Пиво" items={filterItems(menuData.pivo)} />

                        <Category title="Комбо" items={filterItems(menuData.kombo)} />
                    </div>
                </div>
            </FadeInScroll>

            {/* Bottom Section: double points & happy hours */}
            <FadeInScroll yOffset={80}>
                <div className="px-4 lg:px-8 mt-12 pt-12 border-t-2 border-brand-text/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                        {/* Double Points App */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                            <div className="w-24 h-24 shrink-0 bg-brand-accent rounded-full flex items-center justify-center text-white font-black text-center text-xs leading-none p-2 shadow-[4px_4px_0px_rgba(27,20,7,1)] rotate-[-5deg]">
                                BURGER <br /> BRAND <br /> APP
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-black text-lg md:text-xl uppercase tracking-tighter mb-2 text-brand-text">
                                    ДВОЙНЫЕ БАЛЛЫ В ПРИЛОЖЕНИИ Burger Brand
                                </h3>
                                <p className="text-xs md:text-sm font-medium mb-2">Используй бонусную карту при каждом заказе в Burger Brand и получай баллы.</p>
                                <p className="text-[10px] md:text-xs">Накопленные баллы можно потратить на твои любимые бургеры, закуски, десерты и напитки, а также обменять на приятные подарки в приложении.</p>
                            </div>
                        </div>

                        {/* Happy Hours Banner */}
                        <div className="border-[2px] border-dashed border-brand-accent p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center bg-brand-accent/5">
                            <div className="text-center md:text-right md:w-1/3 shrink-0">
                                <div className="text-xs font-bold uppercase tracking-widest mb-1">скачивай</div>
                                <div className="font-black uppercase text-sm leading-tight">в App Store<br />и Google Play</div>
                            </div>
                            <div className="w-24 h-24 shrink-0 bg-white p-2 border-2 border-brand-text">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com" alt="QR Code" className="w-full h-full mix-blend-multiply" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-brand-accent font-black uppercase text-lg mb-2 tracking-tighter">СЧАСТЛИВЫЕ ЧАСЫ</h3>
                                <p className="font-bold text-sm leading-tight">с 12:00 до 16:00, в рабочие дни:<br />получай 20% от заказа баллами</p>
                            </div>
                        </div>

                    </div>

                    {/* Footer Address info block mimicking image bottom right (optional but adds flavor) */}
                    <div className="mt-16 flex flex-col md:flex-row justify-between items-end border-t-2 border-brand-text/10 pt-8 gap-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs md:text-sm font-bold">
                            <div>@burgerbrandS</div>
                            <div>burgerbrand.com</div>

                            <div className="mt-4 font-medium">ул. Зимняя, 20</div>
                            <div className="mt-4 font-medium">+7 (000) 000-00-00</div>

                            <div className="font-medium">пл. Весенняя, 5</div>
                            <div className="font-medium">+7 (000) 000-00-00</div>

                            <div className="font-medium">ул. Парковая, 1</div>
                            <div className="font-medium">+7 (000) 000-00-00</div>

                            <div className="font-medium">ул. Летняя, 10</div>
                            <div className="font-medium">+7 (000) 000-00-00</div>

                            <div className="font-medium">ул. Осенняя, 15</div>
                            <div className="font-medium">+7 (000) 000-00-00</div>
                        </div>

                        <div className="text-4xl md:text-6xl font-black italic text-brand-accent tracking-tighter">
                            Burger Brand
                        </div>
                    </div>
                </div>
            </FadeInScroll>
        </div>
    );
}
