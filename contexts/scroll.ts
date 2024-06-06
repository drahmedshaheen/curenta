import { createContext } from 'react';
import type { MotionValue } from 'framer-motion';

export const ScrollContext = createContext<MotionValue<number> | null>(null);
