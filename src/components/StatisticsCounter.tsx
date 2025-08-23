'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconType } from 'react-icons';

interface StatisticCounterProps {
  icon: IconType;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  index?: number;
}

export default function StatisticsCounter({
  icon: Icon,
  value,
  label,
  suffix = '',
  prefix = '',
  index = 0
}: StatisticCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      
      <p className="text-gray-600 font-medium">
        {label}
      </p>
    </motion.div>
  );
}