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
  method: PaymentMethod
  price: number
  reason: string | undefined // if error
}

export type Payments = Payment[]

export type PaymentStatus = "CREATED" | "IN_PROGRESS" | "ERROR" | "COMPLETED"

export interface PaymentMethod {
  id: string
  name: string
  display_name: string
}

export type PaymentMethods = PaymentMethod[]

export interface Pay {
  method_id: string
  items: [{
    item_id: number,
    quantity: number
  }]
}
