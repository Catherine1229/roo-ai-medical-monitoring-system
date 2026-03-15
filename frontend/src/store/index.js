import { configureStore } from '@reduxjs/toolkit';

// Placeholder reducers - to be implemented in Phase 2
const placeholderReducer = (state = { status: 'Phase 1: Foundation Complete' }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    app: placeholderReducer,
    // auth: authReducer,        // Phase 2
    // patients: patientsReducer, // Phase 2
    // vitals: vitalsReducer,     // Phase 2
    // alerts: alertsReducer,     // Phase 2
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;