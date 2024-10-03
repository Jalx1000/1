import { EmailValidator } from "@angular/forms"

export interface UserInterface {
  createdAt: string
  name: string
  email: string
  password: string
  avatar: string
  token: string
  id: string
}