// src/lib/utils.js

/**
 * Utility function to conditionally join class names.
 * @param {...string} classes - Class names to join.
 * @returns {string} - A single string of class names.
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
