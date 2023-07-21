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
  id: string
  status: PaymentStatus
  method: string
  price: number
  reason: string | undefined // if error
}

export type Payments = Payment[]

export type PaymentStatus = "CREATED" | "IN_PROGRESS" | "ERROR" | "COMPLETED"
