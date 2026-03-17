import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FadeInScroll({ children, delay = 0, yOffset = 50, className = "" }) {
    const elRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(elRef.current,
            {
                opacity: 0,
                y: yOffset
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: elRef.current,
                    start: 'top 85%', // Animate when the top of the element hits 85% of the viewport height
                    toggleActions: 'play none none reverse', // Play on enter, reverse on leave back
                }
            }
        );
    }, { scope: elRef });

    return (
        <div ref={elRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}
