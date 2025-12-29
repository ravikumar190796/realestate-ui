export const formatPrice = (price: number): string => {
  // Indian Rupee formatting with commas
  return `₹${price.toLocaleString('en-IN')}`;
};

