import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Sanitizes a string to prevent basic XSS (though React handles most of this)
 * Useful for raw HTML injection if ever needed (avoid if possible)
 */
export function sanitizeInput(input: string): string {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Generates a high-entropy component ID
 */
export function generateSecureId(prefix: string = 'id'): string {
    const array = new Uint32Array(4);
    crypto.getRandomValues(array);
    return `${prefix}-${array.join('')}`;
}
