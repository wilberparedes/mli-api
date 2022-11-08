export interface Shipping {
  free_shipping: boolean
}

export interface Price {
  amount: number
  currency: string
  decimals: number
}

export interface Address {
  city_id: null | string
  city_name: string
  state_id: string
  state_name: string
}

export interface ItemFormat {
  condition: string
  free_shipping: boolean
  id: string
  picture: string
  price: Price
  title: string
  address: Address
  sold_quantity: number
}

export interface Item {
  condition: string
  currency_id: string
  id: string
  price: number
  shipping: Shipping
  sold_quantity: number
  thumbnail: string
  title: string
  address: Address
}

export interface ValueAvailableFilter {
  id: string
  name: string
  results: string
}

export interface AvailableFilters {
  id: string
  name: string
  type: string
  values: ValueAvailableFilter[]
}

export interface Searched {
  available_filters: AvailableFilters[]
  results: Item[]
}

export interface Snapshot {
  height: number
  status: string
  url: string
  width: number
}

export interface Description {
  date_created: string
  last_updated: string
  plain_text: string
  snapshot: Snapshot
  text: string
}

export interface Author {
  author: {
    lastname: string
    name: string
  }
}

export interface ItemWithDescription extends ItemFormat {
  description?: string
}
export interface ResponseItemWithDescription extends Author {
  item: ItemWithDescription
}

export interface ResponseItems extends Author {
  categories: AvailableFilters | undefined
  items: ItemFormat[]
}
