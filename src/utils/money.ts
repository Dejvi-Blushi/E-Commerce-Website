export function formatMoney(number: number): string {
  return `$${(number / 100).toFixed(2)}`;
}
