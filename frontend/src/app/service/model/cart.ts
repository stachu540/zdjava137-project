import {Product} from "./product";

export interface CartItem {
  product: Product
  quantity: number
}

export type Cart = CartItem[]

export interface CartItemDTO {
  product_id: number,
  quantity: number,
}
