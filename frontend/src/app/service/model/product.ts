import {User} from "./user";

export interface Product {
  id: number
  name: string
  description: string
  seller: User,
  price_per_unit: number
  units: number
  avg_rate: number
}

export type Products = Product[]

export interface Comment {
  id: number
  rate: number
  comment: string
  author: User | null | undefined
}

export type Comments = Comment[]
