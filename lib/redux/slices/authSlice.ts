import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email?: string;
    provider?: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startAuth: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<{ email?: string; provider: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { startAuth, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;