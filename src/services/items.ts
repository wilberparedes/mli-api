import axios, { AxiosResponse } from 'axios'
import boom from '@hapi/boom'

import { Description, Item, ResponseItems, ResponseItemWithDescription, Searched } from '../interfaces'
import { formatItem, formatItems, returnCategories } from '../utils/product'
import { config } from '../../config'

const getItems = async (q: any): Promise<ResponseItems> => {
  if (Boolean(q) && typeof q === 'string') {
    const response: AxiosResponse<Searched> = await axios.get(`${config.url_api_meli}/sites/MLA/search?q=${q}`)
    const dataAvailable = response.data
    const data: ResponseItems = {
      author: {
        name: 'Wilber',
        lastname: 'Paredes'
      },
      categories: returnCategories(dataAvailable.available_filters),
      items: formatItems(dataAvailable.results)
    }
    return data
  } else {
    throw boom.badRequest('Please, enter query to search')
  }
}

const getItem = async (id: any): Promise<ResponseItemWithDescription | undefined> => {
  console.log('id', id)
  if (id === null || typeof id !== 'string') {
    throw boom.badRequest('Please, insert product id to search')
  }
  try {
    const response: AxiosResponse<Item> = await axios.get(`${config.url_api_meli}/items/${id}`)
    const responseDescription: AxiosResponse<Description> = await axios.get(`${config.url_api_meli}/items/${id}/description`)
    return {
      author: {
        name: 'Wilber',
        lastname: 'Paredes'
      },
      item: { ...formatItem(response?.data), description: responseDescription?.data.plain_text }
    }
  } catch (error) {
    throw boom.notFound('Product not found')
  }
}

export { getItems, getItem }
