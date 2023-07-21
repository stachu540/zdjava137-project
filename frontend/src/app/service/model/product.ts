import {User} from "./user";

export interface Product {
  id: number
  name: string
  description: string
  seller: User,
  price_per_unit: number
  units: number
  avg_rate: number
  images: string[] // from CDN
}

export type Products = Product[]

export interface ProductCreate {
  name: string
  description: string
  price_per_unit: number
  units: number
  images: string[]
}

export interface ProductUpdate {
  name: string | undefined
  description: string | undefined
  price_per_unit: number | undefined
  units: number | undefined
  images: string[] | undefined
}

export interface Comment {
  id: number
  rate: number
  comment: string
  author: User | null | undefined
}

export type Comments = Comment[]

export type CommentDTO  =
  { rate: number } |
  { comment: string } |
  { rate: number, comment: string }
