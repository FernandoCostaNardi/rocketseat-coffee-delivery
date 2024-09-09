import { Address } from '../../interfaces/Address'
import { Item } from '../../interfaces/Item'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  EXCLUDE_ITEM = 'EXCLUDE_ITEM',
  PAYMENT_METHOD = 'PAYMENT_METHOD',
  CHECKOUT = 'CHECKOUT',
}

export function AddProductAction(item: Item) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      item,
    },
  }
}

export type AddProductActionType = {
  type: typeof ActionTypes.ADD_PRODUCT
  payload: {
    item: Item
  }
}

export function IncrementItemQuantityAction(itemId: number) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export type IncrementItemQuantityType = {
  type: typeof ActionTypes.INCREMENT_ITEM_QUANTITY
  payload: {
    itemId: number
  }
}

export function DecrementItemQuantityAction(itemId: number) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export type DecrementItemQuantityType = {
  type: typeof ActionTypes.DECREMENT_ITEM_QUANTITY
  payload: {
    itemId: number
  }
}

export function ExcludeItemAction(itemId: number) {
  return {
    type: ActionTypes.EXCLUDE_ITEM,
    payload: {
      itemId,
    },
  }
}

export type ExcludeItemType = {
  type: typeof ActionTypes.EXCLUDE_ITEM
  payload: {
    itemId: number
  }
}

export function CheckOutAction(address: Address) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      address,
    },
  }
}

export type CheckOutType = {
  type: typeof ActionTypes.CHECKOUT
  payload: {
    address: Address
  }
}

export function PaymentMethodAction(paymentMethod: string) {
  return {
    type: ActionTypes.PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}

export type PaymentMethodType = {
  type: typeof ActionTypes.PAYMENT_METHOD
  payload: {
    paymentMethod: string
  }
}
