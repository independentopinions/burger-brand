import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Radio() {
    useEffect(() => {
        document.title = "Радио | BurgerBrand";
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [npData, setNpData] = useState({ title: 'Loading...', artist: 'Please wait', cover: '', elapsed: 0, duration: 0 });
    const audioRef = useRef(null);
    const [camName, setCamName] = useState('CAM_01 // KITCHEN');

    // Audio Context and Anim refs (for reactive background)
    const audioCtxRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const [bassReact, setBassReact] = useState(0);

    const initAudio = () => {
        if (!audioCtxRef.current) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtxRef.current = new AudioContext();
                analyserRef.current = audioCtxRef.current.createAnalyser();
                analyserRef.current.fftSize = 64; // Low res for just bass
                dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);

                const sourceNode = audioCtxRef.current.createMediaElementSource(audioRef.current);
                sourceNode.connect(analyserRef.current);
                analyserRef.current.connect(audioCtxRef.current.destination);
            } catch (e) {
                console.error("Audio Context initialization failed", e);
            }
        } else if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
    };

    useEffect(() => {
        let reqId;
        const updateBass = () => {
            if (isPlaying && analyserRef.current && dataArrayRef.current) {
                analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                let sum = 0;
                for (let i = 0; i < 4; i++) sum += dataArrayRef.current[i];
                const avg = sum / 4;
                // Normalize 0 to 1
                setBassReact(avg / 255);
            } else {
                setBassReact(prev => prev > 0.05 ? prev * 0.9 : 0);
            }
            reqId = requestAnimationFrame(updateBass);
        };
        updateBass();
        return () => cancelAnimationFrame(reqId);
    }, [isPlaying]);

    const togglePlay = () => {
        initAudio();
        if (audioRef.current.paused) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        if (audioRef.current) {
            audioRef.current.volume = val;
        }
        if (val > 0) setIsMuted(false);
    };

    const toggleMute = () => {
        if (isMuted) {
            setIsMuted(false);
            if (audioRef.current) audioRef.current.volume = volume;
        } else {
            setIsMuted(true);
            if (audioRef.current) audioRef.current.volume = 0;
        }
    };

    // Camera name cycler
    useEffect(() => {
        const cams = ['CAM_01 // KITCHEN', 'CAM_02 // HALL', 'CAM_03 // GRILL', 'CAM_04 // REGISTER'];
        let idx = 0;
        const interval = setInterval(() => {
            idx = (idx + 1) % cams.length;
            setCamName(cams[idx]);
        }, 15000); // Change cam every 15s
        return () => clearInterval(interval);
    }, []);

    // API NOW PLAYING
    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch('https://radio.burgerbrand.com/api/nowplaying/1?t=' + Date.now());
                const json = await res.json();
                if (json.now_playing) {
                    setNpData({
                        title: json.now_playing.song.title || 'Unknown Title',
                        artist: json.now_playing.song.artist || 'Unknown Artist',
                        cover: json.now_playing.song.art || '',
                        elapsed: json.now_playing.elapsed || 0,
                        duration: json.now_playing.duration || 0,
                    });
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 5000);
        return () => clearInterval(interval);
    }, []);

    // Format time (seconds to mm:ss)
    const formatTime = (secs) => {
        if (!secs) return "00:00";
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const progressPercent = npData.duration > 0 ? Math.min(100, (npData.elapsed / npData.duration) * 100) : 0;
    const bgScale = 1 + (bassReact * 0.03);

    const tickerText = "СЧАСТЛИВЫЕ ЧАСЫ С 12:00 ДО 16:00: ЗАБИРАЙ 20% БАЛЛАМИ В ПРИЛОЖЕНИИ BurgerBrand /// НОВЫЙ БЕКОН ДЖЕМ БУРГЕР УЖЕ В ОСНОВНОМ МЕНЮ /// 100% МРАМОРНАЯ ГОВЯДИНА /// ТВОЯ ЛЮБИМАЯ МУЗЫКА И ГРЯЗНЫЕ БУРГЕРЫ /// ";

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black overflow-hidden pointer-events-auto">

            {/* Video Background */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-75 ease-out"
                style={{ transform: `scale(${bgScale})` }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
                >
                    <source src="https://cdn.prod.website-files.com/64d8af984c758e0313a895b7%2F68bffe3e2245aebcc4321aa3_snc-radio-background-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/64d8af984c758e0313a895b7%2F68bffe3e2245aebcc4321aa3_snc-radio-background-transcode.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-brand-accent mix-blend-multiply opacity-60"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-50 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-brand-accent transition-opacity duration-75 z-20 mix-blend-color-burn" style={{ opacity: bassReact * 0.4 }}></div>
            </div>

            {/* LIVE UI Elements */}
            <div className="absolute top-6 right-6 lg:top-12 lg:right-12 z-40 flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full bg-brand-accent ${isPlaying ? 'animate-pulse' : 'opacity-50'}`}></div>
                <span className="font-mono font-bold text-white tracking-widest text-lg lg:text-xl drop-shadow-md">
                    {isPlaying ? 'REC // LIVE' : 'STANDBY'}
                </span>
            </div>

            <Link
                to="/"
                className="absolute top-6 left-6 lg:top-12 lg:left-12 z-50 flex items-center gap-2 font-bold uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors bg-white px-4 py-2 border-2 border-brand-text shadow-[4px_4px_0px_rgba(27,20,7,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(27,20,7,1)]"
            >
                <ArrowLeft className="w-5 h-5" />
                На главную
            </Link>

            <audio id="snc-radio" ref={audioRef} preload="none" playsInline crossOrigin="anonymous" style={{ display: 'none' }}>
                <source src="https://radio.burgerbrand.com/listen/snc_radio/radio.mp3" type="audio/mpeg" />
            </audio>

            {/* Main Player UI */}
            <div className="relative z-30 w-[90%] max-w-xl flex flex-col items-center bg-black/80 backdrop-blur-md border-[2px] border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

                {/* Seamless Ticker Tape */}
                <div className="w-full bg-brand-accent text-white py-2 border-b-[2px] border-white/20 whitespace-nowrap flex group">
                    <div className="flex animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused] font-mono text-[10px] lg:text-xs font-bold tracking-widest uppercase">
                        <span className="shrink-0">{tickerText}</span>
                        <span className="shrink-0">{tickerText}</span>
                        <span className="shrink-0">{tickerText}</span>
                        <span className="shrink-0">{tickerText}</span>
                    </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col items-center w-full">
                    {/* Cover Art */}
                    <div className="relative w-48 h-48 lg:w-64 lg:h-64 mb-8 border-[2px] border-white/30 overflow-hidden group shadow-[0_0_30px_rgba(202,35,45,0.2)] flex-shrink-0">
                        {npData.cover ? (
                            <>
                                <img src={npData.cover} alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]" />
                                <div className="absolute inset-0 bg-brand-accent mix-blend-screen transition-opacity duration-75" style={{ opacity: bassReact * 0.3 }}></div>
                            </>
                        ) : (
                            <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center text-white/50">
                                <span className="font-black italic text-4xl mb-2">B&B</span>
                                <span className="font-mono text-xs uppercase tracking-widest">NO SIGNAL</span>
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="w-full text-center flex flex-col items-center">
                        <h2 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-1 line-clamp-1 w-full px-4 drop-shadow-md">
                            {npData.title}
                        </h2>
                        <h3 className="text-brand-accent text-lg lg:text-xl font-bold uppercase tracking-widest mb-8 line-clamp-1 w-full drop-shadow-sm">
                            {npData.artist}
                        </h3>

                        {/* Progress */}
                        <div className="w-full max-w-md mb-6">
                            <div className="w-full h-[2px] bg-white/20 relative">
                                <div
                                    className="absolute top-0 left-0 h-full bg-brand-accent transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(202,35,45,0.8)]"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-3 font-mono text-[10px] lg:text-xs text-white/50">
                                <span>{formatTime(npData.elapsed)}</span>
                                <span>{formatTime(npData.duration)}</span>
                            </div>
                        </div>

                        {/* Controls Container */}
                        <div className="flex items-center justify-center w-full max-w-xs relative mt-4 mb-2">
                            {/* Play Button - Centered icon */}
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-[2px] border-white text-white flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:scale-110 transition-all active:scale-95 z-10 mx-auto"
                            >
                                {/* Changed Play icon logic to remove ml-1/ml-2 so it centers perfectly in the circle */}
                                {isPlaying ? <Square className="w-6 h-6 lg:w-8 lg:h-8 fill-current" /> : <Play className="w-6 h-6 lg:w-8 lg:h-8 fill-current translate-x-[2px]" />}
                            </button>

                            {/* Volume Control - Absolute right of play button */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                                <button onClick={toggleMute} className="hover:text-brand-accent">
                                    {(isMuted || volume === 0) ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                </button>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={isMuted ? 0 : volume}
                                    onChange={handleVolumeChange}
                                    className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Volume"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timestamp & Camera UI Overlay */}
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-40 hidden md:flex items-center gap-4">
                <span className="font-mono text-white/60 text-sm tracking-widest uppercase transition-colors duration-1000 animate-pulse">
                    {camName}
                </span>
            </div>

            {/* Ticker Keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
            `}} />
        </div>
    );
}
