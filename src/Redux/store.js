import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterSlice.reducer //name we want to use in our projext and we pass reducer value
  },
})