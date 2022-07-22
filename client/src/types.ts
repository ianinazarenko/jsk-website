import * as enums from './enums'

export interface Credentials {
  name?: string
  email: string
  password: string
}

// State
export interface CurrentUserState {
  isLoggedIn: boolean
  userInfo: {
    id: string | null
    name: string
    email: string
    token: string
  }
}

// Request models
export interface News {
  _id: string
  title: string
  body: string
  authorId: number
  authorName: string
  createdAt: string
}

// Utils
export interface BasicAlert {
  type: enums.AlertType
  isShown: boolean
  message: string
}
