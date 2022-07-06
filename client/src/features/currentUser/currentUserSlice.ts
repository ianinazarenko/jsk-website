import { createSlice } from '@reduxjs/toolkit'
import { CurrentUserState } from '../../types'

const initialState: CurrentUserState = {
  isLoggedIn: false,
  userInfo: {
    name: '',
  },
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.isLoggedIn = false
    },
  },
})

console.log(currentUserSlice)

export const { logIn, logOut } = currentUserSlice.actions
export default currentUserSlice.reducer
