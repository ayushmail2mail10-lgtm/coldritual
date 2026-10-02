/**
 * COLD RITUAL - Centralized Currency Formatter
 * Strict India/INR locale formatting: en-IN, INR
 */

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

/**
 * Formats any numeric value into proper INR currency string
 * e.g., 1299 -> ₹1,299
 * @param {number|string} amount 
 * @returns {string} Formatted INR string
 */
export function formatCurrency(amount) {
  const numericValue = typeof amount === 'number' ? amount : Number(amount) || 0;
  return inrFormatter.format(numericValue);
}

/**
 * Shorthand alias
 */
export const formatINR = formatCurrency;

/**
 * Calculates discount percentage
 * @param {number} originalPrice 
 * @param {number} currentPrice 
 * @returns {number} percentage rounded down
 */
export function calculateDiscountPercentage(originalPrice, currentPrice) {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

export default formatCurrency;
