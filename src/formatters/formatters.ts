export const formatDate = (date: Date) => date.toISOString().split('T')[0];
export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
