import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { startAuth, authSuccess, authFailure } from '@/lib/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleAuth = async (provider: string) => {
    dispatch(startAuth());
    try {
      // Simulate auth - replace with real auth in production
      await new Promise(resolve => setTimeout(resolve, 800));
      dispatch(authSuccess({ provider }));
      router.push('/onboarding/pricing');
    } catch (error) {
      dispatch(authFailure(error instanceof Error ? error.message : 'Authentication failed'));
    }
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    error,
    handleAuth,
  };
}