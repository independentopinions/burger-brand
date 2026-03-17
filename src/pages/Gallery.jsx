import React, { useEffect, useState } from 'react';
import FadeInScroll from '../components/FadeInScroll';

const images = [
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8227598ee130df747fcd_R1-07944-0011%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82272994b2723ad670ee_IMG_1280-1000-%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8228e214f2e7629f61b8_R1-07944-0026%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8223e214f2e7629f5db1_IMG_9524%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea01b830ab225481bcbe2_photo_2025-09-26%2017.25.14.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea596c0be7f294032396b_photo_2025-09-26%2020.18.38.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82235a21476b345ede9e_DSCF5357%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8222f21d29c63fd81e9e_DSCF5055%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82259732cbbaa5ac9269_photo_2023-08-02%2012.35%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82266c52fe1a5113623a_photo_2023-08-09%2011.10%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea4e9985dc919c77ece80_photo_2025-09-29%2020.51.00.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea5c5747f24ec280d97e7_photo_2025-09-27%2009.43.32.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea5fb26604a25cf582c51_psv2.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8224e214f2e7629f5e4b_DSCF5046%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8226e214f2e7629f609d_photo_2023-08-04%2008.12%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82246abe46916d786381_IMG_9487%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82265d5f5e6865d4eb07_photo_2023-08-09%2011.09%201.png",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68ce95c4bfb7916aaa529ecc_photo_2025-09-19%2012.34.46.jpeg",
    "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea570995ac80891964c80_IMG_9421.jpg"
];

export default function Gallery() {
    useEffect(() => {
        document.title = "Галерея | Spot&Choo's";
    }, []);

    const [lightboxImg, setLightboxImg] = useState(null);

    return (
        <div className="pt-4 pb-12 md:pb-16 max-w-[1400px] mx-auto">
            <h1 className="text-3xl md:text-5xl mb-10 text-center text-brand-accent drop-shadow-md font-tags transform -rotate-2 leading-relaxed pt-4 pb-2">
                OUR&nbsp;&nbsp;GALLERY
            </h1>


            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-2">
                {images.map((imgUrl, idx) => (
                    <FadeInScroll key={idx} delay={0.1 * (idx % 4)} yOffset={50}>
                        <div
                            className="break-inside-avoid mb-6 cursor-zoom-in relative group perspective-1000"
                            onClick={() => setLightboxImg(imgUrl)}
                        >
                            {/* Random rotation for the brutalist taped look */}
                            <div className={`p-2 bg-white border-2 border-brand-text shadow-[4px_4px_0px_rgba(27,20,7,1)] transition-transform duration-500 hover:scale-105 group-hover:z-10 relative 
                  ${idx % 3 === 0 ? 'rotate-1' : idx % 3 === 1 ? '-rotate-1' : 'rotate-2'}`}
                            >
                                {/* Fake tape randomly placed on images */}
                                {(idx % 4 === 0) && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#e8e6e1] shadow-sm opacity-90 rotate-[-4deg] z-20 border-b border-black/5"></div>
                                )}

                                <img
                                    src={imgUrl}
                                    alt={`Gallery image ${idx + 1}`}
                                    className="w-full h-auto object-cover border-2 border-brand-text grayscale-[40%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </FadeInScroll>
                ))}
            </div>

            {/* Lightbox Component */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-md"
                    onClick={() => setLightboxImg(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-5xl hover:scale-110 transition-transform font-light leading-none"
                        onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
                    >
                        &times;
                    </button>
                    <img
                        src={lightboxImg}
                        alt="Gallery Preview"
                        className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain border-8 border-[#fdfbf7] shadow-xl cursor-default rotate-[-1deg]"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
