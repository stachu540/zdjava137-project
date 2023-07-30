export interface Category {
  id: number
  name: string
  description: string
  parent: Category | undefined | null
}

export type Categories = Category[]

export interface CategoryCreate {
  name: string
  description: string
  parent_id: number | undefined
}
export interface CategoryUpdate {
  name: string | undefined
  description: string | undefined
  parent_id: number | undefined
}
