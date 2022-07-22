import { createSlice } from '@reduxjs/toolkit'
import { CurrentUserState } from '../../types'

const initialState: CurrentUserState = {
  isLoggedIn: false,
  userInfo: {
    id: null,
    name: '',
    email: '',
    token: '',
  },
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.isLoggedIn = false
    },
    register: (state, { payload }) => {
      state.isLoggedIn = true
      state.userInfo.id = payload.id
      state.userInfo.name = payload.name
      state.userInfo.email = payload.email
      state.userInfo.token = payload.token
    },
  },
})

console.log(currentUserSlice)

export const { logIn, logOut, register } = currentUserSlice.actions
export default currentUserSlice.reducer
