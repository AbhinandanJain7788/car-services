"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";
import {
  SprayCan,
  Settings,
  UserCog,
  Thermometer,
} from "lucide-react";

const iconMap: any = {
  spray: SprayCan,
  gears: Settings,
  engineer: UserCog,
  radiator: Thermometer,
};

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {stats.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <CounterBox
              key={item.id}
              value={item.value}
              label={item.label}
              Icon={Icon}
              start={start}
            />
          );
        })}

      </div>
    </section>
  );
}

function CounterBox({
  value,
  label,
  Icon,
  start,
}: {
  value: number;
  label: string;
  Icon: any;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startVal += increment;
      if (startVal >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div className="flex items-center gap-6">
      <div className="text-red-600">
        <Icon size={42} strokeWidth={1.5} />
      </div>

      <div>
        <h2 className="text-4xl font-semibold text-gray-900">
          {count}
        </h2>
        <p className="uppercase tracking-widest text-sm text-gray-600 mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}
