export type Currency = {
  code: string;
  symbol: string;
  position: 'before' | 'after';
};

export const currencies: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', position: 'before' },
  INR: { code: 'INR', symbol: '₹', position: 'before' },
  EUR: { code: 'EUR', symbol: '€', position: 'before' },
  GBP: { code: 'GBP', symbol: '£', position: 'before' },
};

export function formatPrice(amount: number, currency: Currency): string {
  return currency.position === 'before'
    ? `${currency.symbol}${amount}`
    : `${amount}${currency.symbol}`;
}

export async function getUserCurrency(): Promise<Currency> {
  try {
    const response = await fetch('https://api.ipapi.com/api/check?access_key=YOUR_API_KEY');
    const data = await response.json();
    
    // Always return INR for users in India
    if (data.country_code === 'IN') {
      return currencies.INR;
    }
    
    // Default to USD if currency not supported
    return currencies[data.currency] || currencies.USD;
  } catch (error) {
    // Fallback to USD on error
    return currencies.USD;
  }
}