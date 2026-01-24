'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  offset?: ['start' | 'center' | 'end', 'start' | 'center' | 'end'];
}

interface ParallaxReturn {
  ref: RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity?: MotionValue<number>;
  scale?: MotionValue<number>;
}

/**
 * Hook for creating parallax scroll effects
 * @param speed - Multiplier for parallax movement (0.1 = slow, 1 = full speed)
 * @param direction - 'up' moves element up as you scroll down, 'down' is opposite
 */
export function useParallax({
  speed = 0.5,
  direction = 'up',
}: ParallaxOptions = {}): ParallaxReturn {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed * multiplier]);

  return { ref, y };
}

/**
 * Hook for parallax with fade effect
 */
export function useParallaxWithFade({
  speed = 0.5,
  direction = 'up',
}: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return { ref, y, opacity };
}

/**
 * Hook for parallax with scale effect (great for hero sections)
 */
export function useParallaxWithScale({
  speed = 0.3,
}: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return { ref, y, scale, opacity };
}

/**
 * Hook for simple scroll-based Y translation (for floating elements)
 */
export function useFloatingParallax(speed: number = 0.2) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  return y;
}

/**
 * Hook for horizontal parallax (elements move sideways on scroll)
 */
export function useHorizontalParallax(speed: number = 0.3, direction: 'left' | 'right' = 'left') {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'left' ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [0, 150 * speed * multiplier]);

  return { ref, x };
}
