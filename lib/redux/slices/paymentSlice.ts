import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  isProcessing: boolean;
  error: string | null;
  showPaymentForm: boolean;
}

const initialState: PaymentState = {
  isProcessing: false,
  error: null,
  showPaymentForm: false,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    startPayment: (state) => {
      state.isProcessing = true;
      state.error = null;
    },
    paymentSuccess: (state) => {
      state.isProcessing = false;
      state.error = null;
      state.showPaymentForm = false;
    },
    paymentFailure: (state, action: PayloadAction<string>) => {
      state.isProcessing = false;
      state.error = action.payload;
    },
    togglePaymentForm: (state, action: PayloadAction<boolean>) => {
      state.showPaymentForm = action.payload;
    },
    resetPayment: (state) => {
      state.isProcessing = false;
      state.error = null;
      state.showPaymentForm = false;
    },
  },
});

export const {
  startPayment,
  paymentSuccess,
  paymentFailure,
  togglePaymentForm,
  resetPayment,
} = paymentSlice.actions;

export default paymentSlice.reducer;