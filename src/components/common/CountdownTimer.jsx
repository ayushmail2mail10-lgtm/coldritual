import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetHours = 36 }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Persistent end time in localStorage so it doesn't reset on every refresh
    const storedTarget = localStorage.getItem('coldritual_drop_target');
    let targetTime;
    if (storedTarget && !isNaN(Number(storedTarget)) && Number(storedTarget) > Date.now()) {
      targetTime = Number(storedTarget);
    } else {
      targetTime = Date.now() + targetHours * 60 * 60 * 1000;
      localStorage.setItem('coldritual_drop_target', targetTime.toString());
    }

    const difference = Math.max(0, targetTime - Date.now());
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const storedTarget = Number(localStorage.getItem('coldritual_drop_target') || Date.now());
      const difference = Math.max(0, storedTarget - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigits = (val) => String(val).padStart(2, '0');

  return (
    <div className="flex items-center gap-3 sm:gap-6 font-mono text-offWhite select-none">
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-bold tracking-tight text-offWhite">
          {formatDigits(timeLeft.days)}
        </span>
        <span className="text-[10px] sm:text-xs text-lightGray/70 uppercase tracking-widest mt-1">Days</span>
      </div>
      <span className="text-2xl sm:text-4xl text-white/30 font-light -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-bold tracking-tight text-offWhite">
          {formatDigits(timeLeft.hours)}
        </span>
        <span className="text-[10px] sm:text-xs text-lightGray/70 uppercase tracking-widest mt-1">Hours</span>
      </div>
      <span className="text-2xl sm:text-4xl text-white/30 font-light -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-bold tracking-tight text-offWhite">
          {formatDigits(timeLeft.minutes)}
        </span>
        <span className="text-[10px] sm:text-xs text-lightGray/70 uppercase tracking-widest mt-1">Mins</span>
      </div>
      <span className="text-2xl sm:text-4xl text-white/30 font-light -mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl font-bold tracking-tight text-icyBlue">
          {formatDigits(timeLeft.seconds)}
        </span>
        <span className="text-[10px] sm:text-xs text-lightGray/70 uppercase tracking-widest mt-1">Secs</span>
      </div>
    </div>
  );
}
