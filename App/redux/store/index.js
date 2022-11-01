import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/test.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})