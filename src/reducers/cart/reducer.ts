import { produce } from 'immer'
import { CartState } from './../../interfaces/Cart'
import { ActionTypes } from './../../reducers/cart/actions'

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        draft.items = draft.items || []
        const existentItem = draft.items.find(
          (item) => item.productId === action.payload.item.productId
        )

        if (existentItem) {
          existentItem.quantity += action.payload.item.quantity
        } else {
          draft.items.push(action.payload.item)
        }
      })
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const item = draft.items.find(
          (item) => item.productId === action.payload.itemId
        )

        if (item) {
          item.quantity += 1
        }
      })
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const item = draft.items.find(
          (item) => item.productId === action.payload.itemId
        )

        if (item) {
          item.quantity -= 1
        }
      })
    case ActionTypes.EXCLUDE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex(
          (item) => item.productId === action.payload.itemId
        )

        if (itemIndex !== -1) {
          draft.items.splice(itemIndex, 1)
        }
      })
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        draft.address = action.payload.address
      })
    case ActionTypes.PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod
      })
    default:
      return state
  }
}
