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
  parent_id: number
}
