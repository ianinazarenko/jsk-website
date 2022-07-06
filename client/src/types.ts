export interface Credentials {
  name?: string
  email: string
  password: string
}

// State
export interface CurrentUserState {
  isLoggedIn: boolean
  userInfo: {
    name: string
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
