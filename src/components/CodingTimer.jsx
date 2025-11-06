import React, { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";

const startedAt = new Date("2020-09-15T22:20:00-04:00"); // EST

export default function CodingTimer() {
  const [duration, setDuration] = useState(
    intervalToDuration({ start: startedAt, end: new Date() })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setDuration(intervalToDuration({ start: startedAt, end: new Date() }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { years, months, days, hours, minutes, seconds } = duration;

  return (
    <div className="relative flex justify-between items-center bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-6 w-full hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20 group overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold">I started coding</h3>
        <p className="text-sm md:text-base opacity-90 mt-1">Tue Sep 15 2020&nbsp;—&nbsp;10:20 pm EST</p>
      </div>
      <div className="relative z-10 text-right leading-tight font-extrabold text-2xl sm:text-4xl md:text-5xl tabular-nums">
        {years}y&nbsp;{months}m<br className="hidden sm:block" />
        {days}d&nbsp;{hours}h&nbsp;{minutes}m&nbsp;
        <span className="text-3xl sm:text-5xl md:text-6xl">{String(seconds).padStart(2,"0")}s</span>
      </div>
    </div>
  );
}