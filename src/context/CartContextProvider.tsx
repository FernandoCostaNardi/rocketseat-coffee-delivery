import { createContext, ReactNode, useReducer } from 'react'
import { Item } from '../interfaces/Item'
import { cartReducer } from './../reducers/cart/reducer'
import {
  AddProductAction,
  IncrementItemQuantityAction,
  DecrementItemQuantityAction,
} from '../reducers/cart/actions'

interface CartContextType {
  items: Item[]
  addItem: (item: Item) => void
  IncrementItemQuantity: (itemId: number) => void
  DecrementItemQuantity: (itemId: number) => void
}

// Criando o contexto
export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    }
  )

  function addItem(item: Item) {
    dispatch(AddProductAction(item))
  }

  function IncrementItemQuantity(itemId: number) {
    dispatch(IncrementItemQuantityAction(itemId))
  }

  function DecrementItemQuantity(itemId: number) {
    dispatch(DecrementItemQuantityAction(itemId))
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItem,
        IncrementItemQuantity,
        DecrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
