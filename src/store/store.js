import { configureStore } from '@reduxjs/toolkit'
import CompanyNameSlice from './features/CompanyNameSlice'


export const store = configureStore({
  reducer: {
    companyName : CompanyNameSlice ,
  },
})