import { currencies, type Currency } from "./currency";

const BASE_MONTHLY_PRICE = 29;
const BASE_YEARLY_PRICE = 290;
const BASE_CREDIT_PACK_PRICE = 5;

interface PriceData {
  monthly: number;
  yearly: number;
  creditPack: number;
  savings: number;
}

export function calculatePrices(currency: Currency): PriceData {
  // Exchange rates (simplified for demo - in production, use a rate API)
  const rates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.12,
    // Add more currencies as needed
  };

  const rate = rates[currency.code] || 1;

  const monthly = Math.round(BASE_MONTHLY_PRICE * rate);
  const yearly = Math.round(BASE_YEARLY_PRICE * rate);
  const creditPack = Math.round(BASE_CREDIT_PACK_PRICE * rate);
  const savings = Math.round((monthly * 12 - yearly) / (monthly * 12) * 100);

  return {
    monthly,
    yearly,
    creditPack,
    savings
  };
}