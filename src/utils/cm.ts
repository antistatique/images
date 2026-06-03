import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const classMerge = (...classes: ClassValue[]) => twMerge(clsx(classes));

export default classMerge;
