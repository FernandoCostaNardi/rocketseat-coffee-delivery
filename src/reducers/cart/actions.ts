import { Item } from '../../interfaces/Item'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
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
