import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into regular JS object

export function convertToPlainObject (value ) {
  return JSON.parse(JSON.stringify(value));
}

// Formats number with decimal places

export function formatNumberWithDecimal( num ) {
  const[int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

 