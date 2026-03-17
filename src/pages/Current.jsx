import React, { useEffect } from 'react';

export default function Current() {
    useEffect(() => {
        document.title = "Афиша | Spot&Choo's";
    }, []);

    return (
        <div className="bg-brand-bg min-h-screen text-brand-text pt-12 pb-24">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl mb-12 text-center text-brand-accent drop-shadow-md font-tags transform -rotate-2 leading-relaxed pt-4 pb-2">
                    AFISHA
                </h1>


                <div className="flex flex-col gap-6">

                    {/* Доставка по Кольцово */}
                    <div className="flex flex-col md:flex-row border-[3px] border-brand-text rounded-none bg-white p-3 gap-4 md:gap-6 shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(27,20,7,1)] transition-all">
                        <div className="w-full md:w-[38%] min-h-[220px] border-[2px] border-brand-text p-1 flex items-center justify-center shrink-0 overflow-hidden bg-brand-bg">
                            <img src="/images/dostavka.png" alt="Кольцово" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
                        </div>
                        <div className="flex flex-col flex-1 py-1">
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Доставка по Кольцово</h3>
                            <div className="text-sm md:text-base leading-relaxed whitespace-pre-line border border-black/10 p-3 bg-brand-bg flex-1 font-medium">
                                Доставляем нашу турбо-еду турбо-курьером, быстро-горячо-качественно<br /><br />
                                Заказывай внутри обозначенной зоны, не переплачивай и не мерзни зимой :0
                            </div>
                            <div className="mt-4">
                                <a href="https://t.me/spotandchoos/1362" target="_blank" rel="noreferrer" className="inline-block border-[2px] border-brand-text bg-brand-accent text-white px-4 py-2 hover:bg-black transition-colors text-sm font-black uppercase tracking-widest">
                                    заказать доставку
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Выездной Кейтеринг */}
                    <div className="flex flex-col md:flex-row border-[3px] border-brand-text rounded-none bg-white p-3 gap-4 md:gap-6 shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(27,20,7,1)] transition-all">
                        <div className="w-full md:w-[38%] min-h-[220px] border-[2px] border-brand-text p-1 flex items-center justify-center shrink-0 overflow-hidden bg-brand-bg">
                            <img src="/images/кейтеринг.png" alt="Кейтеринг" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
                        </div>
                        <div className="flex flex-col flex-1 py-1">
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Выездной Кейтеринг</h3>
                            <div className="text-sm md:text-base leading-relaxed whitespace-pre-line border border-black/10 p-3 bg-brand-bg flex-1 font-medium">
                                Выездное обслуживание на вашем мероприятии: от празднования дня рождения до многотысячного фестиваля<br /><br />
                                Легендарные бургеры, закуски, напитки и даже спешл меню под ваше событие!
                            </div>
                            <div className="mt-4">
                                <a href="#" target="_blank" rel="noreferrer" className="inline-block border-[2px] border-brand-text bg-brand-accent text-white px-4 py-2 hover:bg-black transition-colors text-sm font-black uppercase tracking-widest">
                                    заказать кейтеринг
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Ищем Тайных Гостей */}
                    <div className="flex flex-col md:flex-row border-[3px] border-brand-text rounded-none bg-white p-3 gap-4 md:gap-6 shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(27,20,7,1)] transition-all">
                        <div className="w-full md:w-[38%] min-h-[220px] border-[2px] border-brand-text p-1 flex items-center justify-center shrink-0 overflow-hidden bg-brand-bg">
                            <img src="/images/tainik.png" alt="Тайный гость" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
                        </div>
                        <div className="flex flex-col flex-1 py-1">
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Ищем Тайных Гостей</h3>
                            <div className="text-sm leading-relaxed whitespace-pre-line border border-black/10 p-3 bg-brand-bg flex-1 font-medium">
                                Хочешь внести свой вклад в развитие любимой бургерной? Стань тайником!<br /><br />
                                <strong className="font-black uppercase text-xs tracking-widest bg-brand-accent text-white px-2 py-0.5 mt-2 mb-1 inline-block italic">Что делать?</strong><br />
                                - Залетать в нашу бургерную (шпионить по-тихому, естественно)<br />
                                - попробовать бургеры и оценивать, насколько они огонь 🔥<br />
                                - Следить за тем, чтобы наши ребята были не только быстрыми, но и дружелюбными<br />
                                - Отчётики писать<br /><br />
                                <strong className="font-black uppercase text-xs tracking-widest bg-brand-accent text-white px-2 py-0.5 mt-2 mb-1 inline-block italic">Что получаем?</strong><br />
                                - Гибкий график / работай когда можешь, даже во время сессии<br />
                                - Бесплатные бургеры — лучшее сочетание работы и удовольствия!<br />
                                - Возможность влиять на качество наших бургеров и сервиса<br /><br />
                                Если ты хочешь стать тайником SPOTANDCHOOS — 📩 пиши нам в директ или заполни форму
                            </div>
                            <div className="mt-4">
                                <a href="#" target="_blank" rel="noreferrer" className="inline-block border-[2px] border-brand-text bg-brand-accent text-white px-4 py-2 hover:bg-black transition-colors text-sm font-black uppercase tracking-widest">
                                    хочу стать тайником
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Работа в Spotandchoos */}
                    <div id="job" className="flex flex-col md:flex-row border-[3px] border-brand-text rounded-none bg-white p-3 gap-4 md:gap-6 shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(27,20,7,1)] transition-all">
                        <div className="w-full md:w-[38%] flex items-center justify-center shrink-0 overflow-hidden border-[2px] border-brand-text bg-[#e8e6e1] p-2 self-start">
                            <img src="/images/rabota.jpeg" alt="Работа" className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all block" />
                        </div>
                        <div className="flex flex-col flex-1 py-1">
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Работа в SPOTANDCHOOS</h3>
                            <div className="text-sm md:text-base leading-relaxed whitespace-pre-line border border-black/10 p-3 bg-brand-bg flex-1 font-medium">
                                ищем новых игроков в нашу команду:<br />
                                – повар открытой кухни (с опытом)<br />
                                – заготовщик<br /><br />
                                <strong>от нас:</strong><br />
                                гибкий график, более чем приятная зп дважды в месяц,<br />
                                чемпионский коллектив, мерч, рэп, вечеринки и прочие плюшки<br />
                                почтового сервиса спотнчус<br /><br />
                                <strong>от тебя:</strong><br />
                                заполненная анкета соискателя<br /><br />
                                <span className="text-[10px] md:text-xs opacity-70">*опыт не обязателен, но будет конкурентным преимуществом</span>
                            </div>
                            <div className="mt-4">
                                <a href="#" target="_blank" rel="noreferrer" className="inline-block border-[2px] border-brand-text bg-brand-accent text-white px-4 py-2 hover:bg-black transition-colors text-sm font-black uppercase tracking-widest">
                                    заполнить анкету
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ доставка */}
                    <div className="flex flex-col md:flex-row border-[3px] border-brand-text rounded-none bg-white p-3 gap-4 md:gap-6 shadow-[6px_6px_0px_rgba(27,20,7,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(27,20,7,1)] transition-all">
                        <div className="w-full md:w-[38%] flex items-center justify-center shrink-0 bg-brand-bg p-2 overflow-hidden border-[2px] border-brand-text self-start">
                            <img src="/images/guide.jpeg" alt="FAQ Доставка" className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all block" />
                        </div>
                        <div className="flex flex-col flex-1 py-1">
                            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic">FAQ доставка Spot & Choo's</h3>
                            <div className="text-xs md:text-sm leading-relaxed whitespace-pre-line border border-black/10 p-3 bg-brand-bg flex-1 overflow-x-auto font-medium">
                                <strong className="bg-brand-text text-white px-1 leading-none">/академ</strong><br />
                                Север, Щ, Шлюз (красная зона) = 350₽<br />
                                Нижняя Ельцовка, Тесла Парк, Да Винчи, Каинка (начало района), Новый поселок (желтая зона) = 450₽<br />
                                Центр Бердска (синяя зона) = 550₽<br />
                                Бесплатная доставка на заказ от 4000₽<br />
                                Заказать:<br />
                                • t.me/spotandchoos_akadem<br />
                                • +7-903-912-14-30<br />
                                Принимаем заказы на доставку до 22:00<br /><br />

                                <strong className="bg-brand-text text-white px-1 leading-none">/центр</strong><br />
                                Стоимость доставки – 450₽,<br />
                                Бесплатная доставка на заказ от 4000₽<br />
                                заказать<br />
                                • t.me/spotandchoos<br />
                                • +7-903-932-51-20<br />
                                Принимаем заказы на доставку до 22:00<br /><br />

                                <strong className="bg-brand-text text-white px-1 leading-none">/западный</strong><br />
                                Стоимость доставки – 350₽,<br />
                                Бесплатная доставка на заказ от 4000₽<br />
                                заказать<br />
                                • t.me/spotandchoozap<br />
                                • +7-913-934-04-00<br />
                                Принимаем заказы на доставку до 22:00<br /><br />

                                <strong className="bg-brand-text text-white px-1 leading-none">/кольцово</strong><br />
                                Стоимость доставки – 250₽,<br />
                                Бесплатная доставка на заказ от 4000₽<br />
                                заказать<br />
                                • t.me/spotandchoospark<br />
                                • +7-913-064-14-30<br />
                                Принимаем заказы на доставку до 22:00<br /><br />
                                <span className="italic font-bold tracking-widest uppercase">дождались?</span>
                            </div>
                            <div className="mt-4">
                                <a href="#" target="_blank" rel="noreferrer" className="inline-block border-[2px] border-brand-text bg-brand-accent text-white px-4 py-2 hover:bg-black transition-colors text-sm font-black uppercase tracking-widest">
                                    заказать доставку
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
