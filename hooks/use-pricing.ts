import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { selectPlan } from '@/lib/redux/slices/pricingSlice';
import { togglePaymentForm } from '@/lib/redux/slices/paymentSlice';

export function usePricing() {
  const dispatch = useDispatch();
  const { selectedPlan, plans } = useSelector((state: RootState) => state.pricing);
  const selectedPlanDetails = plans.find(plan => plan.id === selectedPlan);

  const handlePlanSelection = (planId: string) => {
    dispatch(selectPlan(planId));
  };

  const handleContinueToPayment = () => {
    dispatch(togglePaymentForm(true));
  };

  return {
    selectedPlan,
    plans,
    selectedPlanDetails,
    handlePlanSelection,
    handleContinueToPayment,
  };
}