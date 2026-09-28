/** Formats a rupee amount using Indian digit grouping, e.g. 1234567 → ₹12,34,567. */
export const money = (n: number): string => '₹' + n.toLocaleString('en-IN');
