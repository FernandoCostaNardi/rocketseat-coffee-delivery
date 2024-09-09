import { Address } from './Address'
import { Item } from './Item'

export interface CartState {
  items: Item[]
  address: Address | null
  paymentMethod: string | null
}
