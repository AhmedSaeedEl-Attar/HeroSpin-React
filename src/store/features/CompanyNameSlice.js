import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
}

export const CompanyNameSlice = createSlice({
  name: 'CompanyName',
  initialState,
  reducers: {
    updateCompanyName: (state , action) => {
      state.name = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCompanyName } = CompanyNameSlice.actions

export default CompanyNameSlice.reducer