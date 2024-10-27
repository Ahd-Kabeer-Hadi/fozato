import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import {
  startPayment,
  paymentSuccess,
  paymentFailure,
  togglePaymentForm,
  resetPayment,
} from '@/lib/redux/slices/paymentSlice';
import { useRouter } from 'next/navigation';

export function usePayment() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isProcessing, error, showPaymentForm } = useSelector(
    (state: RootState) => state.payment
  );

  const handlePayment = async (paymentDetails: any) => {
    dispatch(startPayment());
    try {
      // Simulate payment - replace with real payment in production
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(paymentSuccess());
      router.push('/onboarding/success');
    } catch (error) {
      dispatch(paymentFailure(error instanceof Error ? error.message : 'Payment failed'));
    }
  };

  const handleBack = () => {
    dispatch(togglePaymentForm(false));
  };

  const resetPaymentState = () => {
    dispatch(resetPayment());
  };

  return {
    isProcessing,
    error,
    showPaymentForm,
    handlePayment,
    handleBack,
    resetPaymentState,
  };
}