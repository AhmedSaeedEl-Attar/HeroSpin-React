import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
}

export const HeroNameSlice = createSlice({
  name: 'HeroName',
  initialState,
  reducers: {
    setHeroName: (state , action) => {
      state.name = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setHeroName } = HeroNameSlice.actions

export default HeroNameSlice.reducer