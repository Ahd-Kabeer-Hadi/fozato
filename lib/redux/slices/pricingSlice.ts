import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Plan {
  id: string;
  name: string;
  price: number;
  basePrice: number;
  interval: string;
  popular: boolean;
  savings?: string;
}

interface PricingState {
  selectedPlan: string | null;
  plans: Plan[];
}

const initialState: PricingState = {
  selectedPlan: 'yearly',
  plans: [
    {
      id: "monthly",
      name: "Monthly",
      price: 39,
      basePrice: 39,
      interval: "month",
      popular: false,
    },
    {
      id: "yearly",
      name: "Yearly",
      price: 390,
      basePrice: 468,
      interval: "year",
      popular: true,
      savings: "Save 17%",
    },
  ],
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    selectPlan: (state, action: PayloadAction<string>) => {
      state.selectedPlan = action.payload;
    },
    updatePlanPrices: (state, action: PayloadAction<{ planId: string; price: number }>) => {
      const plan = state.plans.find(p => p.id === action.payload.planId);
      if (plan) {
        plan.price = action.payload.price;
      }
    },
  },
});

export const { selectPlan, updatePlanPrices } = pricingSlice.actions;
export default pricingSlice.reducer;