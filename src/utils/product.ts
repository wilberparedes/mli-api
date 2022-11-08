import { AvailableFilters, Item, ItemFormat } from '../interfaces'

export const category = 'category'

export const returnCategories = (results: AvailableFilters[]): AvailableFilters | undefined => results.find(
  (filter: AvailableFilters) => filter.id === category
)

export const formatItem = (item: Item): ItemFormat => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: Boolean(item?.shipping?.free_shipping)
  }
}

export const formatItems = (results: Item[]): ItemFormat[] => results.map(
  (item: Item) => formatItem(item)
)
