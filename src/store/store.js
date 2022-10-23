import { configureStore } from '@reduxjs/toolkit'
import CompanyNameSlice from './features/CompanyNameSlice'
import HeroNameSlice from './features/HeroNameSlice'
export const store = configureStore({
  reducer: {
    companyName : CompanyNameSlice ,
    HeroName : HeroNameSlice
  },
})

