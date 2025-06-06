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
    <div className="flex justify-between items-center bg-[#E4FF1A] text-black rounded-2xl p-6 w-full hover:brightness-95 transition">
      {/* left block */}
      <div>
        <h3 className="text-2xl font-bold">I started coding</h3>
        <p className="text-lg opacity-80">
          Tue Sep 15 2020&nbsp;—&nbsp;10:20 pm EST
        </p>
      </div>

      {/* live counter */}
      <div className="text-right leading-tight font-extrabold text-3xl sm:text-5xl tabular-nums">
        {years}y&nbsp;{months}m<br className="hidden sm:block" />
        {days}d&nbsp;{hours}h&nbsp;{minutes}m&nbsp;
        <span className="text-4xl sm:text-6xl">{String(seconds).padStart(2,"0")}s</span>
      </div>
    </div>
  );
}