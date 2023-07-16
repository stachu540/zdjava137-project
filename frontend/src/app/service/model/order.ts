import {Product} from "./product";

export interface Order {
  payment: Payment
  items: OrderItems
}

export interface OrderItem {
  product: Product
  quantity: number
  price_per_unit: number
}

export type OrderItems = OrderItem[]

export interface Payment {
  method: string
  price: number
  paid: number
}

export type Payments = Payment[]
